export const personalInfo = {
    name: "Samiullah",
    title: "ML Engineer & Full-Stack AI Developer",
    tagline: "Building intelligent solutions with Machine Learning, MLOps, and Modern AI Technologies",
    bio: "Passionate ML Engineer with 2 years of industry experience specializing in end-to-end machine learning solutions, from model development to production deployment. Founder of TheBotLab, building AI-powered conversational agents. Experienced in building scalable AI applications using Python, PyTorch, and modern MLOps practices. Currently researching Multi-Model Open Deep Search systems for advanced information retrieval.",
    email: "sami606713@gmail.com",
    phone: "03245346965",
    location: "Pakistan",
    github: "https://github.com/Sami606713",
    linkedin: "https://www.linkedin.com/in/sami-ullah-6326b9265/",
    resumeUrl: "/resume.pdf",
    yearsOfExperience: 2,
};

export const skills = [
    {
        category: "Machine Learning & AI",
        items: [
            { name: "Python", icon: "SiPython" },
            { name: "PyTorch", icon: "SiPytorch" },
            { name: "Scikit-learn", icon: "SiScikitlearn" },
            { name: "NumPy", icon: "SiNumpy" },
            { name: "Pandas", icon: "SiPandas" },
            { name: "Matplotlib", icon: "SiPlotly" },
            { name: "Seaborn", icon: "SiPython" },
        ],
    },
    {
        category: "AI Frameworks & Tools",
        items: [
            { name: "LangChain", icon: "SiOpenai" },
            { name: "LangGraph", icon: "SiOpenai" },
            { name: "FastAPI", icon: "SiFastapi" },
        ],
    },
    {
        category: "MLOps & DevOps",
        items: [
            { name: "Docker", icon: "SiDocker" },
            { name: "MLOps", icon: "SiGit" },
            { name: "Git", icon: "SiGit" },
            { name: "DVC", icon: "SiGit" },
        ],
    },
];

export const featuredProjects = [
    "language_translator",
    "youtube_comment_analysis",
    "customer_churn_MLOPs",
    "fake_job_classification",
    "Plant_Disease_Detection",
    "CreditRisk",
];

export const learningRepos = [
    "100_Days_Of_Machine_Learning",
    "Data-Version-Control",
    "docker_foundamentals",
    "Data_science",
    "Git-Foudamental",
    "Pytorch",
];

export const startup = {
    name: "TheBotLab",
    tagline: "Enterprise-Grade AI Agent Platform",
    description: "A comprehensive, production-ready AI agent platform that enables users to build, train, and deploy intelligent agents using their own data. Featuring multi-tenant architecture, multi-workspace isolation, and complex workflow orchestration.",
    logo: "/logos/thebotlab.svg",
    website: "https://the-bot-lab-pearl.vercel.app/",
    founded: "2024",
    status: "Production Ready",

    capabilities: [
        { title: "AI Agent Management", desc: "Build & configure agents with custom LLM settings and stateful memory." },
        { title: "Universal Knowledge", desc: "Ingest data from Web Crawling (Crawl4AI), URLs, PDFs, DOCX, and YouTube." },
        { title: "Vector Intelligence", desc: "Hybrid semantic search using Pinecone and PostgreSQL (pgvector) for enterprise-grade RAG." },
        { title: "Enterprise RBAC", desc: "Advanced two-tier role-based access control for team and agent levels." },
        { title: "Workflow Engine", desc: "Stateful agentic workflows powered by LangGraph for complex task handling." },
        { title: "Developer Playground", desc: "Integrated testing environment for real-time agent debugging and evaluation." }
    ],

    techStack: [
        "FastAPI", "LangChain", "LangGraph", "Pinecone", "PostgreSQL",
        "OpenAI", "Groq", "Cohere", "Docker", "Next.js", "Crawl4AI"
    ],

    metrics: [
        { label: "Multi-Tenant", value: "Ready" },
        { label: "Architecture", value: "Microservices" },
        { label: "Search", value: "Semantic" },
        { label: "Context", value: "RAG-ready" }
    ]
};

export const research = {
    title: "OpenDeepSearch with Tool-Aware Middleware (ODS-M)",
    shortTitle: "ODS-M Search Framework",
    description: "A novel architectural framework that bridges the gap between proprietary search AI (like GPT-4o Search) and open-source models by introducing an observation-driven middleware layer for superior factuality and tool orchestration.",
    model: "GPT-OSS-120B",

    breakthroughs: [
        { title: "Parent-Child Tool Routing", desc: "A hierarchical coordination mechanism that optimizes external API calls by prioritizing local context analysis." },
        { title: "Tool-Aware Middleware", desc: "A controller layer providing real-time observability and preemptive error correction during agent execution." },
        { title: "Hybrid Context Augmentation", desc: "Dual-stage filtering using TF-IDF and Nomic-Embed-Text for 92%+ factual accuracy." },
        { title: "Dynamic Prompting", desc: "Real-time prompt adaptation that strips raw data and integrates refined context on-the-fly." }
    ],

    results: [
        { benchmark: "SimpleQA Accuracy", value: "92.6%", highlight: true },
        { benchmark: "LLM Judge Score", value: "89.0%", highlight: true },
        { benchmark: "vs GPT-4o Search", value: "+2.6%", highlight: false },
        { benchmark: "vs ODS-v2 Baseline", value: "+4.3%", highlight: false }
    ],

    comparisons: [
        { name: "ODS-M (Our Work)", accuracy: "92.6%", score: "89.0" },
        { name: "GPT-4o Search Preview", accuracy: "90.0%", score: "-" },
        { name: "ODS-v2 + DeepSeek-R1", accuracy: "88.3%", score: "-" },
        { name: "Perplexity Sonar Pro", accuracy: "85.8%", score: "-" }
    ],

    technologies: ["GPT-OSS-120B", "LangChain", "RAG", "Python", "FastAPI", "TF-IDF", "Semantic Search"],
    status: "Published / State-of-the-art",
    year: "2025",
};

export const experience = [
    {
        id: 1,
        company: "TheBotLab",
        position: "Founder & Lead ML Engineer",
        period: "2024 - Present",
        description: "Founded and leading TheBotLab, a startup focused on building intelligent conversational AI agents. Developing production-ready chatbot solutions using LangChain, LangGraph, and FastAPI. Managing end-to-end product development from ideation to deployment.",
        logo: "/logos/thebotlab.svg",
        type: "startup",
    },
    {
        id: 2,
        company: "Industry Experience",
        position: "Machine Learning Engineer",
        period: "2023 - Present",
        description: "2 years of hands-on industry experience in developing and deploying machine learning solutions. Specialized in MLOps practices, model optimization, and building scalable AI applications. Worked on projects spanning NLP, computer vision, and predictive analytics.",
        logo: "/logos/ml-engineer.svg",
        type: "industry",
    },
    {
        id: 3,
        company: "Research",
        position: "ML Researcher",
        period: "2025 - Present",
        description: "Conducting research on Multi-Model Open Deep Search (ODS) systems with Tool-Aware Middleware. Achieved 92.6% accuracy on SimpleQA benchmark, surpassing GPT-4o Search Preview. Developing novel architectures for reliable web search agents using open-source LLMs.",
        logo: "/logos/research.svg",
        type: "research",
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        url: personalInfo.github,
        icon: "FaGithub",
    },
    {
        name: "LinkedIn",
        url: personalInfo.linkedin,
        icon: "FaLinkedin",
    },
    {
        name: "Email",
        url: `mailto:${personalInfo.email}`,
        icon: "FaEnvelope",
    },
];
