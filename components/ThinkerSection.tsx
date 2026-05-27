"use client";

import { thinkers } from "@/app/data";

const columnHeaders = [
  { label: "5 column", count: null },
  { label: "207 others", count: 207 },
  { label: "32 others", count: 32 },
  { label: "10 others", count: 10 },
  { label: "43 others", count: 43 },
  { label: "61 others", count: 61 },
];

export default function ThinkerSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fef9c3 0%, #fde68a 30%, #fcd34d 60%, #f59e0b 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-10 py-14">
        {/* Section heading */}
        <h2
          className="text-black font-bold mb-8"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontSize: "clamp(22px, 2.2vw, 32px)",
          }}
        >
          Who&apos;s arguing about the future?
        </h2>

        {/* Table */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ background: "rgba(0,0,0,0.06)", backdropFilter: "blur(8px)" }}
        >
          {/* Column headers */}
          <div
            className="grid items-center px-4 py-3 text-xs font-bold tracking-widest uppercase text-black/40"
            style={{ gridTemplateColumns: "2fr repeat(6, 1fr) 80px" }}
          >
            <span></span>
            {columnHeaders.map((h) => (
              <span key={h.label}>{h.label}</span>
            ))}
            <span className="text-right"></span>
          </div>

          {/* Thinker rows */}
          {thinkers.map((thinker, idx) => (
            <div
              key={thinker.name}
              className="grid items-center px-4 py-3 hover:bg-black/5 transition-colors cursor-pointer"
              style={{
                gridTemplateColumns: "2fr repeat(6, 1fr) 80px",
                borderTop: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {/* Name + stance */}
              <div className="flex flex-col">
                <span className="font-bold text-sm text-black">{thinker.name}</span>
                <span
                  className="text-xs font-bold tracking-widest uppercase mt-0.5"
                  style={{ color: thinker.labelColor, letterSpacing: "0.08em" }}
                >
                  {thinker.label}
                </span>
              </div>

              {/* Count dots / bars */}
              {columnHeaders.map((h, colIdx) => (
                <div key={colIdx} className="flex items-center">
                  {colIdx === idx ? (
                    <div
                      className="w-8 h-1.5 rounded-full"
                      style={{ background: thinker.labelColor }}
                    />
                  ) : (
                    <div className="w-6 h-1 rounded-full bg-black/10" />
                  )}
                </div>
              ))}

              {/* "See more" on last */}
              {idx === thinkers.length - 1 ? (
                <span className="text-right text-xs font-bold text-black/60 hover:text-black transition-colors cursor-pointer tracking-wide">
                  See more →
                </span>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
