"use client";

import { useState } from "react";
import { worlds } from "@/app/data";

export default function WorldsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "#0C0C0C" }}>
      {/* Section header */}
      <div
        className="flex items-center justify-between px-10 py-8"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "linear-gradient(180deg, #111111 0%, #0C0C0C 100%)",
        }}
      >
        <h2
          className="text-white font-bold"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(22px, 2vw, 30px)",
          }}
        >
          What is happening right now?
        </h2>
      </div>

      {/* 4 world debate cards */}
      {worlds.map((world, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={world.key}
            className="relative overflow-hidden transition-all duration-500 cursor-pointer group"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${world.bgVia} 0%, ${world.bgFrom} 60%, ${world.bgTo} 100%)`,
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              minHeight: isExpanded ? "420px" : "340px",
            }}
            onClick={() => setExpandedIndex(isExpanded ? null : idx)}
          >
            {/* Subtle top gradient glow */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% -20%, ${world.accentColorHex}30 0%, transparent 60%)`,
              }}
            />

            <div className="relative z-10 max-w-[1400px] mx-auto px-10 py-10">
              {/* Top: tags + title */}
              <div className="flex flex-col items-center text-center mb-8">
                {/* Category tags */}
                <div className="flex items-center gap-2 mb-4">
                  {world.tags.map((tag, ti) => (
                    <span key={tag} className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: world.accentColorHex, letterSpacing: "0.1em" }}
                      >
                        {tag}
                      </span>
                      {ti < world.tags.length - 1 && (
                        <span className="text-white/20 text-xs">+</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* World title */}
                <h3
                  className="text-white font-black leading-tight mb-3"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "clamp(28px, 3vw, 48px)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {world.title}
                </h3>

                {/* Quote */}
                <p
                  className="text-white/55 italic"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "clamp(13px, 1.2vw, 16px)",
                    maxWidth: 520,
                  }}
                >
                  {world.quote}
                </p>
              </div>

              {/* Debate layout: Left thinker | VS | Right thinker */}
              <div className="flex items-start gap-6">
                {/* Left thinker */}
                <div className="flex-1">
                  {/* Stance label */}
                  <div
                    className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded mb-4"
                    style={{
                      color: world.left.stanceColor,
                      background: `${world.left.stanceColor}18`,
                      border: `1px solid ${world.left.stanceColor}30`,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {world.left.stance}
                  </div>

                  <div
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-white font-bold text-sm mb-0.5">{world.left.name}</p>
                    <p className="text-white/40 text-xs mb-3">
                      {world.left.role} · {world.left.org}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">{world.left.description}</p>
                  </div>
                </div>

                {/* VS center */}
                <div className="flex flex-col items-center gap-2 pt-10 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
                    style={{
                      border: `2px solid ${world.accentColorHex}`,
                      color: world.accentColorHex,
                      background: `${world.accentColorHex}15`,
                    }}
                  >
                    VS
                  </div>
                  <div
                    className="w-0.5 flex-1"
                    style={{
                      minHeight: "60px",
                      background: `linear-gradient(to bottom, ${world.accentColorHex}40, transparent)`,
                    }}
                  />
                </div>

                {/* Right thinker */}
                <div className="flex-1">
                  <div className="flex justify-end mb-4">
                    <div
                      className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded"
                      style={{
                        color: world.right.stanceColor,
                        background: `${world.right.stanceColor}18`,
                        border: `1px solid ${world.right.stanceColor}30`,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {world.right.stance}
                    </div>
                  </div>

                  <div
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-white font-bold text-sm mb-0.5">{world.right.name}</p>
                    <p className="text-white/40 text-xs mb-3">
                      {world.right.role} · {world.right.org}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {world.right.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expand cue */}
              <div className="flex justify-center mt-6">
                <span
                  className="text-xs font-semibold tracking-widest uppercase transition-opacity opacity-0 group-hover:opacity-60"
                  style={{ color: world.accentColorHex, letterSpacing: "0.1em" }}
                >
                  {isExpanded ? "↑ COLLAPSE" : "↓ EXPAND DEBATE"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
