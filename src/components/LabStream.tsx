"use client";

import React, { useState } from "react";
import { LAB_LOGS } from "@/data";

export default function LabStream() {
  const [expandedId, setExpandedId] = useState<string | null>("log-3");

  return (
    <section className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-xl font-bold text-white tracking-tight">Active Lab Notes</h3>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Real-time engineering experiments, optimizations, and technical logs</p>
        </div>
      </div>

      <div className="space-y-3">
        {LAB_LOGS.map((log) => {
          const isExpanded = expandedId === log.id;
          return (
            <div
              key={log.id}
              className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition"
            >
              <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : log.id)}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">{log.date}</span>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-zinc-800 text-blue-400 border border-zinc-700">
                      {log.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-100 mt-1">{log.title}</h4>
                </div>
                <span className="text-xs text-zinc-400">{isExpanded ? "Collapse ▲" : "Expand ▼"}</span>
              </div>

              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{log.summary}</p>

              {isExpanded && (
                <div className="mt-3 space-y-3 pt-3 border-t border-zinc-800">
                  {log.metrics && (
                    <div className="flex gap-3">
                      {log.metrics.map((m, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
                          <span className="text-zinc-500 block text-[10px] uppercase">{m.label}</span>
                          <span className="text-white font-mono font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {log.codeSnippet && (
                    <pre className="p-3 rounded-lg bg-black border border-zinc-800 text-[11px] font-mono text-emerald-400 overflow-x-auto">
                      <code>{log.codeSnippet}</code>
                    </pre>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}