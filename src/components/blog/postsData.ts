export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string;
};

export const posts: Post[] = [
  {
    slug: "rag-system-production",
    title: "How I Built a Production RAG System with Multi-Query Expansion and Re-Ranking",
    excerpt:
      "Most RAG tutorials show the happy path. Here's what I learned building a real system at Emulxion.ai — multi-query expansion, query decomposition, RAG fusion, and intelligent re-ranking that actually improved retrieval accuracy.",
    date: "2025-05-10",
    readTime: "8 min read",
    tags: ["RAG", "LangChain", "Python", "Production"],
    content: `Building a RAG system for a demo is straightforward. Building one that handles real queries from real users — that's a different problem entirely.

At Emulxion.ai, I was tasked with building a production RAG system that could handle complex, multi-part queries in real time. Here's what I learned.

## The problem with naive RAG

A basic RAG pipeline — embed the query, retrieve top-k chunks, pass to LLM — works surprisingly well in demos. But in production, users don't ask clean single-intent questions. They ask things like: "What are the side effects of X and how does it compare to Y when combined with Z?"

A single embedding can't capture all of that.

## Multi-query expansion

The first fix: don't just embed the original query. Use an LLM to generate 3-5 alternative phrasings of the same question, retrieve for each, then merge the results.

\`\`\`python
def expand_query(query: str, llm) -> list[str]:
    prompt = f"""Generate 4 alternative phrasings of this query for document retrieval.
Query: {query}
Return as a JSON array of strings."""
    result = llm.invoke(prompt)
    return json.loads(result.content)
\`\`\`

## RAG Fusion with Reciprocal Rank Fusion

Once you have multiple result sets, you need to merge them intelligently. Reciprocal Rank Fusion (RRF) works well — it rewards documents that rank highly across multiple queries.

\`\`\`python
def reciprocal_rank_fusion(results: list[list], k=60):
    scores = {}
    for result_list in results:
        for rank, doc in enumerate(result_list):
            doc_id = doc.metadata["id"]
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (rank + k)
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)
\`\`\`

## Re-ranking

After fusion, you still have 20-30 candidate chunks. A cross-encoder re-ranker (Cohere Rerank or a local model) scores each chunk against the original query and picks the top 5.

This was the single biggest quality improvement in the system.

## Results

After implementing all three layers, retrieval accuracy improved significantly on our internal benchmark. The system now handles ambiguous and multi-part queries that completely stumped the naive version.

The key insight: retrieval is not a solved problem. The more effort you put into the retrieval layer, the better your LLM responses — regardless of which LLM you use.`,
  },
  {
    slug: "langgraph-human-in-the-loop",
    title: "Building Human-in-the-Loop Workflows with LangGraph",
    excerpt:
      "Fully autonomous AI pipelines sound great until they make an expensive mistake at 2am. Here's how I built WREXT — a content automation platform with approval checkpoints using LangGraph's interrupt mechanism.",
    date: "2025-06-01",
    readTime: "6 min read",
    tags: ["LangGraph", "Python", "AI Agents", "MLOps"],
    content: `Fully autonomous AI pipelines are a liability until you trust them completely. For WREXT, a blog automation platform I'm building at Revnix, I needed a way to automate 90% of the work while keeping humans in the loop for the decisions that matter.

LangGraph's interrupt mechanism is built exactly for this.

## The pipeline

WREXT has four stages:

1. **Topic discovery** — crawls trends, competitor content, and keyword data to surface 20-30 potential topics
2. **Relevance scoring** — LLM scores each topic against the client's niche and audience
3. **Outline generation** — creates a detailed outline with H2/H3 structure, key points, and target word count
4. **Final generation** — writes the full SEO-optimized post

Stages 1, 2, and 4 are fully automated. Stage 3 is where humans should review.

## LangGraph interrupt

\`\`\`python
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.postgres import PostgresSaver

def outline_review_node(state: BlogState):
    # This node pauses and waits for human approval
    return interrupt({
        "outline": state["outline"],
        "topic": state["topic"],
        "message": "Review outline and approve or edit before generation"
    })

builder = StateGraph(BlogState)
builder.add_node("discover_topics", discover_topics)
builder.add_node("score_topics", score_topics)
builder.add_node("generate_outline", generate_outline)
builder.add_node("outline_review", outline_review_node)  # Human checkpoint
builder.add_node("generate_post", generate_post)
\`\`\`

## The Streamlit dashboard

The review UI is a Streamlit app that polls the database for pending approvals. Editors see the outline, can edit it inline, then approve. The LangGraph graph resumes from the checkpoint.

\`\`\`python
# Resume after human edit
thread_config = {"configurable": {"thread_id": thread_id}}
graph.invoke(
    Command(resume={"approved_outline": edited_outline}),
    config=thread_config
)
\`\`\`

## What I learned

Human-in-the-loop isn't just about catching errors — it's about building trust. The content team at Revnix didn't trust the AI at first. After two weeks of reviewing outlines and seeing consistent quality, they started approving without edits. That's the goal: automate until the human is bored of reviewing.

The interrupt pattern in LangGraph makes this trivial to implement. The harder problem is UX — making the review interface fast and frictionless enough that people actually use it.`,
  },
  {
    slug: "yolo-acne-detection",
    title: "90%+ Accuracy Acne Detection with YOLO: What Actually Worked",
    excerpt:
      "Training a medical image segmentation model sounds daunting. Here's the practical breakdown of how I built the acne detection system at Emulxion.ai — data, augmentation strategy, YOLO config, and the mistakes I made.",
    date: "2025-04-15",
    readTime: "7 min read",
    tags: ["Computer Vision", "YOLO", "PyTorch", "Medical AI"],
    content: `Medical image AI gets a lot of hype. Here's the unglamorous version: how I actually got a YOLO-based acne segmentation model to 90%+ accuracy.

## The dataset problem

The first problem with any medical imaging project is data. We had ~2,000 annotated images — enough to train, not enough to generalize without careful augmentation.

Key augmentations that helped:
- Horizontal flip (skin is symmetric)
- Color jitter (lighting varies massively across phone cameras)
- Random crop with padding (faces appear at different scales)
- Gaussian blur (simulates out-of-focus shots)

Augmentations that hurt:
- Vertical flip (faces always have a fixed orientation — this confused the model)
- Extreme rotation (same reason)

## YOLO configuration

We used YOLOv8 for segmentation. Key config decisions:

\`\`\`yaml
model: yolov8m-seg.pt  # Medium, not large — overfits on 2k images
epochs: 150
patience: 20
imgsz: 640
batch: 16
lr0: 0.01
lrf: 0.01
mosaic: 0.5  # Reduced from default 1.0
\`\`\`

The mosaic augmentation at full strength was creating unrealistic compositions that hurt validation performance. Halving it helped.

## The 90% number

"90% accuracy" is a lazy metric for segmentation. What we actually measured:
- **mAP50**: 0.91 (good)
- **mAP50-95**: 0.74 (acceptable)
- **Mask IoU**: 0.82 (the metric that actually matters for segmentation quality)

For the clinical use case — helping dermatologists assess severity, not replacing diagnosis — these numbers were sufficient.

## Deployment

FastAPI served the model with a simple REST endpoint. React frontend handled webcam capture and image upload. Docker Compose tied it together.

The biggest deployment challenge wasn't the model — it was GPU memory. YOLOv8m needs ~4GB VRAM for inference. On the target deployment environment (shared GPU), we had to batch requests and queue them. Solved with a simple Redis queue and a worker process.

## Lessons

1. Start with the smallest model that achieves your target metric
2. Measure the right thing (IoU, not accuracy)
3. Deployment constraints should inform model choice from day one`,
  },
];
