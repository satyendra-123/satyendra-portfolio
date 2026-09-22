export interface LabLog {
  id: string;
  date: string;
  title: string;
  tag: "Experiment" | "Architecture" | "Debugging" | "Shipped";
  summary: string;
  codeSnippet?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: "Distributed Systems" | "Data & Vector" | "AI & RAG" | "Cloud & Platform";
  highlight: string;
}

export const PROFILE = {
  name: "Satyendra Singh Kotiya",
  role: "Lead Software Engineer & Systems Architect",
  tagline: "12+ years designing resilient distributed systems, high-throughput data platforms, and cost-governed AI infrastructure.",
  location: "Bengaluru, India",
  links: {
    github: "https://github.com/satyendra-123",
    linkedin: "https://www.linkedin.com/in/satyendra-kotiya/",
    leetcode: "https://leetcode.com/u/satyendra-123/",
    email: "s.satyendra70@gmail.com",
  },
};

export const PROJECTS = [
  {
    company: "HERE Technologies",
    role: "Lead Software Engineer",
    title: "Multi-Tenant Gateway & Cache Architecture",
    description: "Redesigned distributed caching layers slashing backend call volume from 80% to 10%. Enhanced API gateway for multi-tenancy and automated certificate rotation.",
    tech: ["Java", "Spring", "Nginx", "Kubernetes", "AWS", "Claude"],
    highlight: "80% -> 10% traffic reduction",
  },
  {
    company: "Dell Technologies",
    role: "Backend Engineer",
    title: "XaaS Infrastructure Self-Service Platform",
    description: "Built self-service marketplace microservices reducing provisioning SLA from months to minutes. Implemented compliance batch pipelines via Spring Cloud Data Flow and RabbitMQ.",
    tech: ["Java", "Spring Boot", "RabbitMQ", "Redis", "PostgreSQL", "PCF"],
    highlight: "SLA: Months to Minutes",
  },
  {
    company: "ThoughtWorks",
    role: "Senior Consultant",
    title: "Demand-Supply Forecasting Data Mart",
    description: "Engineered analytical pipelines on BigQuery and Airflow. Redesigned reporting APIs to stream 100k+ database records with minimal memory overhead.",
    tech: ["Python", "GCP", "BigQuery", "Airflow", "Docker"],
    highlight: "100k+ records stream",
  },
];

export const SKILLS: SkillItem[] = [
  { name: "Java / Spring Boot", category: "Distributed Systems", highlight: "Core backend services, multi-tenant APIs, microservices architecture" },
  { name: "Go (Golang)", category: "Distributed Systems", highlight: "High-concurrency daemons, lightweight background services" },
  { name: "RabbitMQ / Event-Driven", category: "Distributed Systems", highlight: "Transactional outbox pattern, dead-letter exchanges, async decoupling" },
  { name: "Redis Caching Topologies", category: "Distributed Systems", highlight: "Multi-tier cache invalidation, stampede mitigation, rate limiters" },
  { name: "PostgreSQL & pgvector", category: "Data & Vector", highlight: "HNSW/IVF vector indexing, cosine similarity lookups, relational partitioning" },
  { name: "BigQuery & Airflow", category: "Data & Vector", highlight: "Data mart modeling, DAG orchestration, large-scale extraction pipelines" },
  { name: "Hybrid Search (Dense + BM25)", category: "AI & RAG", highlight: "Reciprocal Rank Fusion (RRF) combining keyword precision with vector semantics" },
  { name: "Semantic Caching", category: "AI & RAG", highlight: "Embedding distance thresholding to throttle external LLM API costs" },
  { name: "Kubernetes & Helm", category: "Cloud & Platform", highlight: "Ingress routing, Pod networking, auto cert rotation, zero-downtime rollouts" },
  { name: "Podman & Colima / Docker", category: "Cloud & Platform", highlight: "Daemonless containers, local pgvector clusters, macOS virtualization" },
];

export const LAB_LOGS: LabLog[] = [
  {
    id: "log-3",
    date: "Sep 2026",
    title: "Benchmarking HNSW Index Hyperparameters in pgvector",
    tag: "Experiment",
    summary: "Tested m=16 vs m=32 on 768-dimensional embeddings. Found m=32 increases index build time by 1.8x but improves top-5 recall by 14% on dense queries.",
    codeSnippet: `CREATE INDEX ON document_chunks \nUSING hnsw (embedding vector_cosine_ops) \nWITH (m = 32, ef_construction = 128);`,
    metrics: [
      { label: "p99 Recall", value: "98.2%" },
      { label: "Latency", value: "4.1ms" },
    ],
  },
  {
    id: "log-2",
    date: "Sep 2026",
    title: "Docker Context & macOS Socket Isolation",
    tag: "Debugging",
    summary: "Resolved DOCKER_HOST path conflict between Podman machine sockets and Colima VM by switching contexts directly via docker context use colima.",
    codeSnippet: `unset DOCKER_HOST\ndocker context use colima\ncolima start --vm-type=vz`,
  },
];