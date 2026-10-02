"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  TrendingDown, 
  Zap 
} from "lucide-react";

interface RoleDetails {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  headlineMetric: string;
  highlights: string[];
  techStack: string[];
  timelineEvents: {
    phase: string;
    focus: string;
    details: string;
  }[];
}

const EXPERIENCES: RoleDetails[] = [
  {
    id: "here",
    company: "HERE Technologies",
    role: "Lead Software Engineer / Architect",
    period: "Jun 2023 - Present",
    location: "Bengaluru, India",
    headlineMetric: "1M RPS • 80% → 10% Cache Miss",
    summary:
      "Led backend architecture and AI harness engineering. Built high-scale API gateway resilience and distributed caching infrastructure handling 1M RPS.",
    highlights: [
      "Redesigned the distributed cache layer, reducing backend call volume and achieving call reduction from 80% to 10%.",
      "Enhanced low-level design (LLD) to support cost-effective multi-tenancy at 1M RPS throughput.",
      "Shipped features with AI spec-driven workflows (Claude, Copilot) with safety harnesses and guardrails.",
      "Enhanced rate limiting library for Agent Core Gateway to throttle tool-call invocations.",
      "Implemented circuit breaker patterns to throttle auth queries during downstream gateway outages.",
      "Automated friction points and developer toils using generative AI pipelines.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Kubernetes",
      "Helm",
      "AWS",
      "Nginx",
      "Claude AI",
      "Docker",
    ],
    timelineEvents: [
      {
        phase: "Platform Scale & Multi-Tenancy",
        focus: "1M RPS Architecture",
        details:
          "Enhanced gateway multi-tenancy LLD and rate-limiting core library for automated agentic tool-calls.",
      },
      {
        phase: "Latency & Resilience",
        focus: "Cache & Circuit Breaking",
        details:
          "Overhauled cache invalidation topologies (80% → 10% call reduction) and added circuit breakers to shield auth services.",
      },
      {
        phase: "AI Systems & Dev-Toil",
        focus: "LLM Spec Harnesses",
        details:
          "Built AI spec-driven harnesses with automated guardrails and improved automated performance testing pipelines.",
      },
    ],
  },
  {
    id: "thoughtworks",
    company: "ThoughtWorks",
    role: "Senior Consultant",
    period: "Apr 2021 - Jun 2023",
    location: "Bengaluru, India",
    headlineMetric: "100k+ Records Streaming",
    summary:
      "Designed enterprise data pipelines and analytics marts on GCP for executive demand-supply forecasting.",
    highlights: [
      "Built data-driven pipelines and data marts on GCP BigQuery and Airflow for critical demand-supply forecasting.",
      "Redesigned leave reporting API to stream 100k+ records from DB with minimal memory footprint and zero discrepancies.",
    ],
    techStack: [
      "Python",
      "GCP",
      "BigQuery",
      "Airflow",
      "Java",
      "Kubernetes",
      "Docker",
      "Shell Scripting",
    ],
    timelineEvents: [
      {
        phase: "Data Platform Engineering",
        focus: "BigQuery & Airflow DAGs",
        details:
          "Constructed ETL pipelines aggregating enterprise datasets to empower stakeholder demand-supply decisions.",
      },
      {
        phase: "API Performance & Streaming",
        focus: "High-Volume Extraction",
        details:
          "Re-architected memory-bound reporting endpoints to stream 100,000+ records reliably.",
      },
    ],
  },
  {
    id: "dell",
    company: "Dell Technologies",
    role: "Backend Engineer",
    period: "Apr 2017 - Mar 2021",
    location: "Bengaluru, India",
    headlineMetric: "SLA: 2 Months → 15 Mins",
    summary:
      "Engineered an enterprise XaaS self-service marketplace, shrinking provisioning SLA from 2 months to 15 minutes.",
    highlights: [
      "Engineered microservices for self-service XaaS marketplace, reducing service provisioning SLA from 2 months to 15 minutes.",
      "Built end-to-end self-service portal web app for unified user access management across Dell infra (JFrog, SVN, PaaS).",
      "Implemented compliance auditing API using Spring Cloud Data Flow, batch schedules, and event-driven notifications.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "PCF",
      "Angular 8",
      "React JS",
    ],
    timelineEvents: [
      {
        phase: "Service Provisioning Platform",
        focus: "Months → Minutes SLA",
        details:
          "Developed core marketplace services automating manual multi-month infrastructure access requests.",
      },
      {
        phase: "Event-Driven Compliance",
        focus: "Spring Cloud Data Flow",
        details:
          "Engineered batch reporting and RabbitMQ notification queues to track and audit non-compliant entities across the org.",
      },
    ],
  },
  {
    id: "infosys",
    company: "Infosys",
    role: "Software Development Engineer (Backend)",
    period: "Feb 2014 - Mar 2017",
    location: "Bengaluru, India",
    headlineMetric: "+400% Runtime Speedup",
    summary:
      "Modernized core monolith banking systems (Bank of America), optimizing rule execution engines and customer profiling pipelines.",
    highlights: [
      "Migrated business logic engine from Drools to dynamic Groovy scripts, improving system runtime performance by 400%.",
      "Engineered enterprise web services applying customer profiling strategies in Bank of America core banking monolith.",
    ],
    techStack: [
      "Java",
      "Oracle DB",
      "Spring",
      "Groovy",
      "Drools",
      "SOAP/REST",
      "Design Patterns",
    ],
    timelineEvents: [
      {
        phase: "Engine Modernization",
        focus: "Drools → Groovy Migration",
        details:
          "Refactored brittle business rule configurations into performant Groovy scripts, boosting transaction execution speed by 400%.",
      },
      {
        phase: "Core Banking Integrations",
        focus: "Profile Scoring Services",
        details:
          "Implemented facade and strategy patterns across SOAP/REST services for client strategy application.",
      },
    ],
  },
];

export default function ExperienceTimeline() {
  const [selectedOrgId, setSelectedOrgId] = useState<string>("here");

  const currentOrg = EXPERIENCES.find((exp) => exp.id === selectedOrgId) || EXPERIENCES[0];

  return (
    <section className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-400" />
          <h2 className="text-xl font-bold tracking-tight text-white">
            Career Journey & Impact Timeline
          </h2>
        </div>
        <p className="text-xs text-zinc-400 mt-1">
          Select an organization to inspect its chronological milestones, scale metrics, and tech stack
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: ORG SELECTOR TABS */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          {EXPERIENCES.map((exp) => {
            const isSelected = exp.id === selectedOrgId;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedOrgId(exp.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-zinc-900 border-blue-500/80 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/30"
                    : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={`text-sm font-bold tracking-tight ${isSelected ? "text-white" : "text-zinc-300"}`}>
                      {exp.company}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{exp.role}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-0.5 transition-transform ${
                      isSelected ? "text-blue-400 translate-x-1" : "text-zinc-600"
                    }`}
                  />
                </div>

                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-zinc-800/60 text-[11px] font-mono">
                  <span className="text-zinc-500">{exp.period}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    isSelected ? "bg-blue-500/10 text-blue-300 border border-blue-500/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                  }`}>
                    {exp.headlineMetric}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: ACTIVE TIMELINE & DETAILED WORK DEEP-DIVE */}
        <div className="lg:col-span-8 p-6 md:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm space-y-6">
          
          {/* ORG HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-zinc-800/80 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {currentOrg.company}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-semibold">
                  {currentOrg.headlineMetric}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-300 mt-1">{currentOrg.role}</p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-zinc-400 font-mono gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {currentOrg.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {currentOrg.location}
              </span>
            </div>
          </div>

          {/* CHRONOLOGICAL WORK TIMELINE */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Work Timeline & Key Phases
            </h4>

            <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
              {currentOrg.timelineEvents.map((event, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:scale-125 transition-transform" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-zinc-100">{event.phase}</span>
                      <span className="text-[10px] font-mono text-blue-400">[{event.focus}]</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {event.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KEY DELIVERABLES & RESPONSIBILITIES */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Core Architecture & Shipped Responsibilities
            </h4>
            <div className="space-y-2">
              {currentOrg.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECH STACK BADGES */}
          <div className="pt-4 border-t border-zinc-800/80">
            <h4 className="text-[11px] uppercase font-mono tracking-wider text-zinc-500 mb-2.5">
              Production Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {currentOrg.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}