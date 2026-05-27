"use client";

import { World, WorldKey, worlds } from "@/app/data";

interface HeroSectionProps {
  activeWorld: World;
  onWorldChange: (world: WorldKey) => void;
}

const U = "'Urbanist', sans-serif";

const scenarioChips = [
  { key: "society" as WorldKey,       label: "SCENARIO 1", sublabel: "SOCIETY",       chipColor: "#2563eb", dotColor: "#3b82f6" },
  { key: "organisations" as WorldKey, label: "SCENARIO 2", sublabel: "ORGANISATIONS", chipColor: "#059669", dotColor: "#34d399" },
  { key: "economy" as WorldKey,       label: "SCENARIO 3", sublabel: "ECONOMY",        chipColor: "#9333ea", dotColor: "#e879f9" },
  { key: "consumers" as WorldKey,     label: "SCENARIO 4", sublabel: "CONSUMERS",      chipColor: "#e11d48", dotColor: "#fb7185" },
];

export default function HeroSection({ activeWorld, onWorldChange }: HeroSectionProps) {
  const activeChip = scenarioChips.find((c) => c.key === activeWorld.key)!;

  return (
    <section className="relative flex items-stretch pt-14" style={{ minHeight: "100vh" }}>
      <div className="flex w-full">

        {/* ── Left column — WHITE background ── */}
        <div
          className="flex flex-col justify-center px-12 py-16"
          style={{ width: "45%", background: "#ffffff", minHeight: "100vh" }}
        >
          {/* Headline */}
          <h1
            className="leading-[1.05] mb-5"
            style={{ fontFamily: U, fontSize: "clamp(40px, 4.2vw, 68px)", color: "#000" }}
          >
            <span style={{ fontWeight: 400 }}>Four worlds are </span>
            <span style={{ fontWeight: 800, fontStyle: "italic" }}>coming.</span>
          </h1>

          {/* Sub-headline */}
          <h2
            className="leading-snug mb-5"
            style={{ fontFamily: U, fontSize: "clamp(18px, 1.8vw, 28px)", fontWeight: 300, color: "rgba(0,0,0,0.65)" }}
          >
            The thinkers can&apos;t agree which one.
          </h2>

          {/* Body */}
          <p
            className="leading-relaxed mb-9"
            style={{ fontFamily: U, fontSize: "14px", fontWeight: 400, color: "rgba(0,0,0,0.45)", maxWidth: 420 }}
          >
            Dive into any of the 4 worlds. Debate what others have to say.
          </p>

          {/* Scenario chips */}
          <div className="flex flex-col gap-2.5">
            {scenarioChips.map((chip) => {
              const isActive = chip.key === activeWorld.key;
              return (
                <button
                  key={chip.key}
                  onClick={() => onWorldChange(chip.key)}
                  className="flex items-center gap-3 transition-all duration-200 text-left"
                  style={{
                    fontFamily: U,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    border: isActive
                      ? `1.5px solid ${chip.chipColor}`
                      : "1.5px solid rgba(0,0,0,0.12)",
                    background: isActive ? chip.chipColor : "transparent",
                    color: isActive ? "#fff" : "rgba(0,0,0,0.45)",
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                >
                  <span>{chip.label}</span>
                  <span style={{ opacity: 0.6 }}>•</span>
                  <span>{chip.sublabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Right column — Dark world card ── */}
        <div
          className="flex-1 relative flex flex-col p-10 xl:p-14"
          style={{
            background: `radial-gradient(ellipse at 60% 20%, ${activeWorld.bgVia} 0%, ${activeWorld.bgFrom} 55%, ${activeWorld.bgTo} 100%)`,
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% -10%, ${activeWorld.accentColorHex}28 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10 flex flex-col h-full">
            {/* Top row: "ACCELERATING NOW" tag + label badge */}
            <div className="flex items-start justify-between mb-auto">
              {/* Left: dot + status tag */}
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full flex-shrink-0"
                  style={{ width: "7px", height: "7px", background: activeChip.dotColor }}
                />
                <span
                  style={{
                    fontFamily: U,
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {activeWorld.tag}
                </span>
              </div>

              {/* Right: large dark rectangular label badge */}
              <div
                style={{
                  fontFamily: U,
                  fontWeight: 800,
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(0,0,0,0.45)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "7px 16px",
                  borderRadius: "6px",
                }}
              >
                {activeWorld.label}
              </div>
            </div>

            {/* World title */}
            <div className="flex flex-col justify-center py-10">
              <h2
                style={{
                  fontFamily: U,
                  fontSize: "clamp(38px, 4vw, 70px)",
                  fontWeight: 300,
                  color: "#fff",
                  whiteSpace: "pre-line",
                  lineHeight: 1.0,
                  letterSpacing: "-0.01em",
                  marginBottom: "20px",
                }}
              >
                {activeWorld.title}
              </h2>

              {/* Quote */}
              <p
                style={{
                  fontFamily: U,
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 460,
                  lineHeight: 1.5,
                }}
              >
                {activeWorld.quote}
              </p>
            </div>

            {/* Stats row */}
            <div
              className="flex items-center gap-0 flex-wrap mb-8"
              style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: "16px" }}
            >
              {[
                activeWorld.scenario,
                activeWorld.label,
                activeWorld.dateRange,
                activeWorld.thinkerCount,
              ].map((item, i, arr) => (
                <span key={i} className="flex items-center">
                  <span
                    style={{
                      fontFamily: U,
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      style={{
                        color: "rgba(255,255,255,0.2)",
                        margin: "0 8px",
                        fontSize: "10px",
                      }}
                    >
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>

            {/* Two thinkers + V/S */}
            <div className="flex items-start gap-4">
              {/* Left thinker */}
              <div className="flex-1">
                <div
                  className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded mb-3"
                  style={{
                    fontFamily: U,
                    color: activeWorld.left.stanceColor,
                    background: `${activeWorld.left.stanceColor}18`,
                    border: `1px solid ${activeWorld.left.stanceColor}30`,
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {activeWorld.left.stance}
                </div>
                <p style={{ fontFamily: U, fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "2px" }}>
                  {activeWorld.left.name}
                </p>
                <p style={{ fontFamily: U, fontWeight: 400, fontSize: "11px", color: "rgba(255,255,255,0.38)", marginBottom: "8px" }}>
                  {activeWorld.left.role} · {activeWorld.left.org}
                </p>
                <p style={{ fontFamily: U, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, maxWidth: 200 }}>
                  {activeWorld.left.description.slice(0, 90)}…
                </p>
              </div>

              {/* V/S separator */}
              <div
                className="flex-shrink-0 flex flex-col items-center gap-1 pt-8"
              >
                <div
                  style={{
                    fontFamily: U,
                    fontWeight: 900,
                    fontSize: "13px",
                    color: activeWorld.accentColorHex,
                    letterSpacing: "0.05em",
                    border: `1.5px solid ${activeWorld.accentColorHex}`,
                    borderRadius: "50%",
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${activeWorld.accentColorHex}15`,
                  }}
                >
                  V/S
                </div>
              </div>

              {/* Right thinker */}
              <div className="flex-1 text-right">
                <div className="flex justify-end mb-3">
                  <div
                    className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded"
                    style={{
                      fontFamily: U,
                      color: activeWorld.right.stanceColor,
                      background: `${activeWorld.right.stanceColor}18`,
                      border: `1px solid ${activeWorld.right.stanceColor}30`,
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {activeWorld.right.stance}
                  </div>
                </div>
                <p style={{ fontFamily: U, fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "2px" }}>
                  {activeWorld.right.name}
                </p>
                <p style={{ fontFamily: U, fontWeight: 400, fontSize: "11px", color: "rgba(255,255,255,0.38)", marginBottom: "8px" }}>
                  {activeWorld.right.role} · {activeWorld.right.org}
                </p>
                <p style={{ fontFamily: U, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, maxWidth: 200, marginLeft: "auto" }}>
                  {activeWorld.right.description.slice(0, 90)}…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
