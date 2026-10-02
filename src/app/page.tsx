"use client";
import { PROFILE, PROJECTS } from "@/data";
import InteractiveSkills from "@/components/InteractiveSkills";
import LabStream from "@/components/LabStream";
import ExperienceTimeline from "@/components/ExperienceTimeline";

import React, { useState } from "react";
import { 
  Code2, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  Copy, 
  ArrowUpRight,
  Sparkles,
  Activity
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.66 1.67 1.67 0 0 0 1.67-1.66 1.67 1.67 0 0 0-1.67-1.67z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* HERO SECTION */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {PROFILE.location} • Available for Staff / Principal Architecture Roles
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            {PROFILE.name}
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline underline-offset-4"><GithubIcon className="w-4 h-4" />GitHub</a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline underline-offset-4"><LinkedinIcon className="w-4 h-4 text-blue-400" />
  LinkedIn</a>
            <a href={PROFILE.links.leetcode} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline underline-offset-4">LeetCode</a>
            <a href={`mailto:${PROFILE.links.email}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Contact Directly</a>
          </div>
        </header>

        {/* SYSTEM ARCHITECTURE CASE STUDIES */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">Featured System Architectures</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-[11px] font-mono mb-2">
                    <span className="text-blue-400 uppercase font-semibold">{proj.company}</span>
                    <span className="text-zinc-500">{proj.highlight}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{proj.title}</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{proj.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-zinc-800/60">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ExperienceTimeline/>

        {/* INTERACTIVE SKILL STACK */}
        <InteractiveSkills />

        {/* LIVE LAB LOGS */}
    

        {/* FOOTER */}
        <footer className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <p>© 2026 Satyendra Singh Kotiya. Built with Next.js & Tailwind.</p>
          <div className="flex gap-4 font-mono">
            <span>Latency: &lt;50ms</span>
            <span>Vercel Edge</span>
          </div>
        </footer>

      </div>
    </main>
  );
}