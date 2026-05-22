export type Project = {
  id: string;
  title: string;
  problem: string;
  result: string;
  tech: string[];
  category: "ML/AI" | "MLOps" | "LLM/Agents" | "SaaS/Product";
  stars?: number;
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  isFeatured?: boolean;
};

export const projects: Project[] = [
  {
    id: "connectxeo",
    title: "ConnectXeo",
    problem:
      "Shopify merchants have 699 chat apps — none can process refunds, update inventory, or deploy on WhatsApp natively.",
    result:
      "Built a full no-code AI agent platform with Shopify native actions, WhatsApp/Telegram/Slack deployment, and flat predictable pricing.",
    tech: ["LangGraph", "TypeScript", "Next.js", "Shopify API", "WhatsApp API"],
    category: "SaaS/Product",
    isPrivate: true,
    isFeatured: true,
  },
  {
    id: "wrext",
    title: "WREXT — Content Automation Platform",
    problem: "Content teams spend days writing blog posts manually — topic research, outlining, drafting, and SEO optimization all done by hand.",
    result: "Full blog automation pipeline with human-in-the-loop review: automated topic discovery, relevance scoring, LLM outlines with approval workflow, and SEO-optimized final generation.",
    tech: ["LangGraph", "OpenAI GPT", "Python", "PostgreSQL", "Redis", "Streamlit", "Docker"],
    category: "SaaS/Product",
    isPrivate: true,
    isFeatured: true,
  },
  {
    id: "acne-detection",
    title: "Acne Detection & Segmentation System",
    problem: "Dermatology diagnosis is manual, slow, and inconsistent — doctors spend significant time on visual assessment that AI can automate.",
    result: "YOLO-based acne segmentation model achieving 90%+ accuracy, with React frontend for image upload and real-time webcam capture, deployed via FastAPI + Docker.",
    tech: ["YOLO", "Python", "PyTorch", "FastAPI", "React", "Docker"],
    category: "ML/AI",
    isPrivate: true,
    isFeatured: true,
  },
  {
    id: "real-time-therapist",
    title: "Real-Time AI Therapist",
    problem:
      "Mental health support is inaccessible and expensive — most people cannot afford or access a therapist.",
    result:
      "Real-time conversational AI therapist with emotional intelligence, session memory, and crisis detection.",
    tech: ["Python", "LangChain", "FastAPI", "WebSockets"],
    category: "SaaS/Product",
    isPrivate: true,
  },
  {
    id: "open-deep-search",
    title: "Multi-Model Open Deep Search",
    problem:
      "Existing search systems use single models — complex queries require multi-model reasoning and retrieval.",
    result:
      "Research-grade multi-model search system with 92.6% retrieval accuracy using LLM orchestration.",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "Vector DB"],
    category: "LLM/Agents",
    isPrivate: true,
    isFeatured: true,
    githubUrl: "https://github.com/Sami606713/OpenDeepSearch",
  },
  {
    id: "rag-chatbot",
    title: "RAG Chatbot System",
    problem:
      "Generic chatbots hallucinate and ignore company-specific knowledge — useless for real business needs.",
    result:
      "Production RAG system that ingests PDFs, URLs, and docs — answers questions grounded in real data.",
    tech: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI"],
    category: "LLM/Agents",
    githubUrl: "https://github.com/Sami606713/Rag-Chatbot",
  },
  {
    id: "smart-agent",
    title: "Smart AI Agent",
    problem:
      "Static chatbots can only answer questions — businesses need agents that take real actions autonomously.",
    result:
      "LangGraph-powered agent with tool use, memory, and multi-step reasoning for autonomous task execution.",
    tech: ["Python", "LangGraph", "LangChain", "Tool Use", "FastAPI"],
    category: "LLM/Agents",
    githubUrl: "https://github.com/Sami606713/smart_agent",
  },
  {
    id: "user-query-chatbot",
    title: "User Query ChatBot",
    problem:
      "Customer support teams are overwhelmed with repetitive queries that drain time and increase costs.",
    result:
      "Deployed chatbot handling user queries with intent classification and dynamic response generation.",
    tech: ["Python", "LangChain", "FastAPI", "Docker"],
    category: "LLM/Agents",
    githubUrl: "https://github.com/Sami606713/User_Query_ChatBot",
  },
  {
    id: "flight-price-mlops",
    title: "Flight Price MLOps Pipeline",
    problem:
      "ML models built in notebooks die on laptops — no versioning, no retraining, no monitoring.",
    result:
      "Full MLOps pipeline with automated retraining, DVC versioning, MLflow tracking, and CI/CD deployment.",
    tech: ["Python", "MLflow", "DVC", "Docker", "Airflow", "Scikit-learn"],
    category: "MLOps",
    stars: 5,
    isFeatured: true,
    githubUrl:
      "https://github.com/Sami606713/MLOPS-flight-price-prediction-",
  },
  {
    id: "mlops-best-practice",
    title: "MLOps Best Practice Pipeline",
    problem:
      "Teams waste weeks rebuilding the same MLOps infrastructure — no standard, no repeatability.",
    result:
      "Reference MLOps implementation covering the full lifecycle: data to train to evaluate to deploy to monitor.",
    tech: ["Python", "MLflow", "DVC", "Docker", "FastAPI"],
    category: "MLOps",
    stars: 3,
    githubUrl:
      "https://github.com/Sami606713/MLOPs_Best_Practice_Approach_poroject",
  },
  {
    id: "customer-churn-mlops",
    title: "Customer Churn MLOps",
    problem:
      "Businesses lose customers without warning — by the time they notice churn, it is too late to act.",
    result:
      "End-to-end churn prediction pipeline with automated retraining and REST API for real-time scoring.",
    tech: ["Python", "Scikit-learn", "MLflow", "DVC", "FastAPI", "Docker"],
    category: "MLOps",
    githubUrl: "https://github.com/Sami606713/customer_churn_MLOPs",
  },
  {
    id: "credit-risk",
    title: "Credit Risk Prediction",
    problem:
      "Financial institutions manually assess loan risk — slow, inconsistent, and prone to human bias.",
    result:
      "ML model predicting credit default with 94%+ accuracy, deployed as a production REST API.",
    tech: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "Docker"],
    category: "ML/AI",
    stars: 6,
    isFeatured: true,
    githubUrl: "https://github.com/Sami606713/CreditRisk",
  },
  {
    id: "fake-job-classification",
    title: "Fake Job Classification",
    problem:
      "Job boards are flooded with fraudulent postings — job seekers waste time and risk being scammed.",
    result:
      "NLP classifier detecting fake job listings with 96% precision using BERT-based feature extraction.",
    tech: ["Python", "BERT", "Scikit-learn", "NLP", "Pandas"],
    category: "ML/AI",
    githubUrl: "https://github.com/Sami606713/fake_job_classification",
  },
  {
    id: "image-caption-generator",
    title: "Image Caption Generator (Fine-tuned)",
    problem:
      "Pre-trained captioning models generate generic captions — domain-specific images need custom fine-tuning.",
    result:
      "Fine-tuned transformer model generating accurate context-aware captions for domain-specific images.",
    tech: ["Python", "PyTorch", "Transformers", "HuggingFace", "BLIP"],
    category: "ML/AI",
    isPrivate: true,
    githubUrl:
      "https://github.com/Sami606713/Image_caption_generator-Fine-Tunnung-Transformer-",
  },
  {
    id: "real-time-speech-translation",
    title: "Real-Time Speech Translation",
    problem:
      "Language barriers block real-time communication — existing tools add 3 to 5 second delays.",
    result:
      "Real-time speech-to-speech translation pipeline with sub-second latency using Whisper and NMT.",
    tech: ["Python", "Whisper", "PyTorch", "FastAPI", "WebSockets"],
    category: "ML/AI",
    isPrivate: true,
    githubUrl:
      "https://github.com/Sami606713/real_time_speach_translation",
  },
  {
    id: "customer-churn",
    title: "Customer Churn Analysis",
    problem:
      "Marketing teams spend budgets on customers who were already leaving — no predictive signal exists.",
    result:
      "Full EDA and churn prediction model identifying at-risk customers 30 days before cancellation.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
    category: "ML/AI",
    stars: 1,
    githubUrl: "https://github.com/Sami606713/customer_churn",
  },
];

export const categories = [
  "All",
  "SaaS/Product",
  "LLM/Agents",
  "MLOps",
  "ML/AI",
] as const;
export type Category = (typeof categories)[number];
