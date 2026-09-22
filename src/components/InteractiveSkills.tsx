"use client";

import React, { useState } from "react";
import { SKILLS, SkillItem } from "@/data";

const CATEGORIES = [
  "All",
  "Distributed Systems",
  "Data & Vector",
  "AI & RAG",
  "Cloud & Platform",
] as const;

export default function InteractiveSkills() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]);

  const filtered = activeTab === "All" 
    ? SKILLS 
    : SKILLS.filter((s) => s.category === activeTab);

  return (
    <section className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">System Tooling & Competencies</h3>
          <p className="text-xs text-zinc-400 mt-1">Select a category or click a skill to inspect hands-on production scope</p>
        </div>

        <div className="flex flex-wrap gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition ${
                activeTab === cat
                  ? "bg-blue-600 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filtered.map((skill) => {
          const isSelected = selectedSkill.name === skill.name;
          return (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
                isSelected
                  ? "bg-blue-500/10 border-blue-500 text-blue-400 ring-1 ring-blue-500/40"
                  : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600"
              }`}
            >
              {skill.name}
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono uppercase">
          Production Scope
        </span>
        <div>
          <div className="text-sm font-semibold text-white">{selectedSkill.name}</div>
          <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{selectedSkill.highlight}</p>
        </div>
      </div>
    </section>
  );
}