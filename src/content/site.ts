export const person = {
  name: "Samiullah",
  role: "Senior AI Engineer",
  email: "sami606713@gmail.com",
  phone: "+92 324 5346964",
  phoneHref: "tel:+923245346964",
  location: "Haripur, Pakistan",
  github: "https://github.com/Sami606713",
  linkedin: "https://www.linkedin.com/in/sami-ullah-6326b9265/",
  resume: "/Samiullah_SeniorAIEngineer.pdf",
  site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sami-devfolio.vercel.app",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/experience", label: "Experience" },
] as const;

export type ProjectGroup = "Production" | "Open source" | "Research";

export type Project = {
  id: string;
  title: string;
  place: string;
  summary: string;
  stack: string;
  group: ProjectGroup;
  href?: string;
  linkLabel?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "rext",
    title: "rext.ai",
    place: "Revnix",
    summary:
      "A keyword is scored, a title is chosen, an outline is approved, and the article publishes to WordPress or Shopify.",
    stack: "LangChain, LangGraph, OpenAI, PostgreSQL, Nomic embeddings",
    group: "Production",
    href: "https://rext.ai",
    linkLabel: "rext.ai",
  },
  {
    id: "thebotlab",
    title: "TheBotLab",
    place: "TheBotLab",
    summary:
      "A Shopify merchant connects a store to an AI agent that runs it end to end: product listings, orders, inventory, refunds, and customer replies.",
    stack: "FastAPI, LangGraph, Next.js, PostgreSQL, pgvector, WhatsApp Cloud API, Docker",
    group: "Production",
    href: "https://github.com/Sami606713/TheBotLab",
    linkLabel: "GitHub",
  },
  {
    id: "emulxion-rag",
    title: "Production retrieval",
    place: "N6 Solution",
    summary:
      "RAG with multi-query expansion, decomposition, fusion, and reranking. The team kept the pattern.",
    stack: "Python, FastAPI, PyTorch",
    group: "Production",
  },
  {
    id: "emulxion-api",
    title: "Live inference API",
    place: "N6 Solution",
    summary: "FastAPI and React service for live traffic, with sub-second responses.",
    stack: "FastAPI, React, Docker, PyTorch",
    group: "Production",
  },
  {
    id: "acne",
    title: "Acne segmentation",
    place: "N6 Solution",
    summary: "YOLO segmentation with a React capture screen and a FastAPI service in Docker.",
    stack: "YOLO, PyTorch, FastAPI, React, Docker",
    group: "Production",
  },
  {
    id: "langctl",
    title: "langctl",
    place: "Open source",
    summary:
      "CLI to scaffold, run, and deploy LangChain and LangGraph agents. On PyPI, Apache-2.0, 14+ releases.",
    stack: "Python, LangGraph, Next.js, Docker, GitHub Actions",
    group: "Open source",
    href: "https://github.com/Sami606713/agent_cli",
    linkLabel: "GitHub",
  },
  {
    id: "agentgenesis",
    title: "AgentGenesis",
    place: "Open source",
    summary:
      "In build: agents that configure and spawn other agents, with plugins for reusable patterns.",
    stack: "Python, agent orchestration",
    group: "Open source",
  },
  {
    id: "fake-job",
    title: "Fake job classifier",
    place: "Open source",
    summary: "An NLP classifier that flags fraudulent job listings.",
    stack: "Python, BERT, scikit-learn, pandas",
    group: "Open source",
    href: "https://github.com/Sami606713/fake_job_classification",
    linkLabel: "GitHub",
  },
  {
    id: "churn-mlops",
    title: "Customer churn pipeline",
    place: "Open source",
    summary: "Churn scoring with retraining, run tracking, and a REST API.",
    stack: "Python, scikit-learn, MLflow, DVC, FastAPI, Docker",
    group: "Open source",
    href: "https://github.com/Sami606713/customer_churn_MLOPs",
    linkLabel: "GitHub",
  },
  {
    id: "smart-agent",
    title: "Smart agent",
    place: "Open source",
    summary: "A LangGraph agent with tools, memory, and multi-step tasks.",
    stack: "Python, LangGraph, LangChain, FastAPI",
    group: "Open source",
    href: "https://github.com/Sami606713/smart_agent",
    linkLabel: "GitHub",
  },
  {
    id: "captions",
    title: "Image captions",
    place: "Open source",
    summary: "A fine-tuned caption model for domain-specific images.",
    stack: "Python, PyTorch, Hugging Face",
    group: "Open source",
    href: "https://github.com/Sami606713/Image_caption_generator-Fine-Tunnung-Transformer-",
    linkLabel: "GitHub",
  },
  {
    id: "speech",
    title: "Speech translation",
    place: "Open source",
    summary: "Speech-to-speech translation built with Whisper for live conversation.",
    stack: "Python, Whisper, PyTorch, FastAPI",
    group: "Open source",
    href: "https://github.com/Sami606713/real_time_speach_translation",
    linkLabel: "GitHub",
  },
  {
    id: "ods-m",
    title: "ODS-M",
    place: "Research",
    summary:
      "Published search agents that route tools through middleware. Beat the baseline on multi-hop tasks.",
    stack: "Python, LangGraph, FastAPI",
    group: "Research",
    href: "https://github.com/Sami606713/Multi-Model-Open-Deep-Search",
    linkLabel: "GitHub",
    image: "/visuals/ods-m.png",
  },
];

export const featuredIds = ["rext", "thebotlab", "langctl"] as const;

export function projectById(id: string) {
  return projects.find((item) => item.id === id);
}

export type Role = {
  id: string;
  role: string;
  company: string;
  period: string;
  href?: string;
  summary: string;
  points: string[];
  stack?: string;
  projectIds: string[];
};

export const roles: Role[] = [
  {
    id: "revnix",
    role: "Lead AI Engineer",
    company: "Revnix",
    period: "Mar 2025 - Sep 30, 2026",
    href: "https://rext.ai",
    summary: "Sole backend architect for rext.ai. The role ends on Sep 30, 2026.",
    points: [
      "A keyword is checked for difficulty, search volume, backlinks, and intent, then turned into title options.",
      "After the user selects a title and approves the outline, OpenAI writes the SEO article.",
      "Semantic search uses Nomic embeddings in PostgreSQL. LangChain and LangGraph run the steps.",
      "One click publishes the article to WordPress or Shopify.",
    ],
    stack: "LangChain, LangGraph, OpenAI, PostgreSQL, Nomic embeddings",
    projectIds: ["rext"],
  },
  {
    id: "thebotlab",
    role: "Lead AI Architect",
    company: "TheBotLab",
    period: "2025 - Present",
    href: "https://github.com/Sami606713/TheBotLab",
    summary:
      "Lead architect for the platform where an AI agent runs a Shopify store end to end.",
    points: [
      "Set a coordinator and seven subagents, each with isolated tools, error boundaries, and retries.",
      "Covered product listings, orders, refunds, inventory, and draft orders across 40+ Shopify integrations.",
      "Shipped multi-tenant isolation on WhatsApp, web chat, and a REST API.",
    ],
    stack: "FastAPI, LangGraph, Next.js, PostgreSQL, pgvector, WhatsApp Cloud API, Docker",
    projectIds: ["thebotlab"],
  },
  {
    id: "n6",
    role: "AI Engineer",
    company: "N6 Solution",
    period: "Jan 2024 - Present",
    summary: "Production retrieval, live inference, and a vision model.",
    points: [
      "Designed RAG with multi-query expansion, query decomposition, fusion, and reranking.",
      "Shipped a live inference service on FastAPI and React, with sub-second responses.",
      "Built acne segmentation with YOLO, a React capture screen, and FastAPI.",
    ],
    stack: "PyTorch, YOLO, FastAPI, React, Docker",
    projectIds: ["emulxion-rag", "emulxion-api", "acne"],
  },
];

export const toolGroups = [
  {
    label: "Agents",
    items: "LangGraph, LangChain, multi-agent orchestration, tool routing, human review",
  },
  {
    label: "Learning",
    items: "PyTorch, Hugging Face, LoRA, YOLO, classical ML",
  },
  {
    label: "Data",
    items: "PostgreSQL, Redis, MongoDB, pgvector, SQL, Alembic",
  },
  {
    label: "Delivery",
    items: "Python, FastAPI, Docker, AWS, MLflow, DVC, GitHub Actions",
  },
  {
    label: "Interface",
    items: "Next.js, React, TypeScript",
  },
];

export const awards = [
  { title: "ZABIST AI Cup", year: "2024" },
  { title: "Thrive Pakistan", year: "" },
];
