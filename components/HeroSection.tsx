"use client";

import { World, WorldKey } from "@/app/data";

interface HeroSectionProps {
  activeWorld: World;
  onWorldChange: (world: WorldKey) => void;
}

const filterChips = [
  { label: "SUBJECT + SOCIETY", borderColor: "#FF007A" },
  { label: "SUBJECT + ORGANIZATIONS", borderColor: "#8215B5" },
  { label: "SUBJECT + ECONOMY", borderColor: "rgba(255,255,255,0.15)" },
  { label: "CONNECT + OTHERS", borderColor: "rgba(255,255,255,0.15)" },
];

const stats = [
  { value: "6", label: "Scenarios" },
  { value: "16", label: "Points" },
  { value: "72", label: "Thinkers" },
  { value: "490", label: "AI Cues" },
];

export default function HeroSection({ activeWorld }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-stretch pt-14" style={{ background: "#0C0C0C" }}>
      <div className="flex w-full">
        {/* ── Left column ── */}
        <div className="flex flex-col justify-center px-12 py-16 w-1/2 xl:w-5/12" style={{ maxWidth: 700 }}>
          {/* Headline */}
          <h1
            className="text-white leading-[1.05] mb-4"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(40px, 4.5vw, 72px)",
              fontWeight: 700,
            }}
          >
            Four worlds are{" "}
            <em
              className="not-italic font-black"
              style={{
                fontStyle: "italic",
                fontFamily: "'Fraunces', serif",
              }}
            >
              coming.
            </em>
          </h1>
          <h2
            className="text-white/80 leading-snug mb-5"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(22px, 2.2vw, 36px)",
              fontWeight: 400,
            }}
          >
            The thinkers can&apos;t
            <br />
            agree which one.
          </h2>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-8" style={{ maxWidth: 480 }}>
            Over the arc of the next decade, debate about what direction we&apos;re on over an
            unprecedented divergence of visions for collective futures.
          </p>

          {/* Filter chips — row 1 */}
          <div className="flex flex-wrap gap-2 mb-2">
            {filterChips.slice(0, 2).map((chip) => (
              <button
                key={chip.label}
                className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:opacity-90"
                style={{
                  border: `1.5px solid ${chip.borderColor}`,
                  color: chip.borderColor === "rgba(255,255,255,0.15)" ? "rgba(255,255,255,0.5)" : chip.borderColor,
                  background: "transparent",
                  letterSpacing: "0.07em",
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>
          {/* Filter chips — row 2 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterChips.slice(2).map((chip) => (
              <button
                key={chip.label}
                className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:opacity-90"
                style={{
                  border: `1.5px solid ${chip.borderColor}`,
                  color: "rgba(255,255,255,0.35)",
                  background: "transparent",
                  letterSpacing: "0.07em",
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white font-bold text-lg">{s.value}</span>
                  <span className="text-white/40 text-xs font-medium tracking-wide">{s.label}</span>
                </div>
                {i < stats.length - 1 && (
                  <span className="text-white/20 mx-4 text-lg">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Hero world card ── */}
        <div className="flex-1 flex items-stretch relative overflow-hidden">
          {/* Animated gradient card */}
          <div
            key={activeWorld.key}
            className="flex-1 relative flex flex-col justify-between p-10 xl:p-14 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse at 65% 25%, ${activeWorld.bgVia} 0%, ${activeWorld.bgFrom} 55%, ${activeWorld.bgTo} 100%)`,
              borderRadius: "32px 0 0 0",
            }}
          >
            {/* Top row: tags + world badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                {activeWorld.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded"
                    style={{
                      color: activeWorld.accentColorHex,
                      background: `${activeWorld.accentColorHex}18`,
                      border: `1px solid ${activeWorld.accentColorHex}30`,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span
                className="text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full"
                style={{
                  color: activeWorld.accentColorHex,
                  background: `${activeWorld.accentColorHex}20`,
                  border: `1px solid ${activeWorld.accentColorHex}40`,
                }}
              >
                {activeWorld.label}
              </span>
            </div>

            {/* World title */}
            <div className="flex-1 flex flex-col justify-center mb-8">
              <h2
                className="text-white leading-[1.0] mb-6"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(36px, 4vw, 64px)",
                  fontWeight: 800,
                  whiteSpace: "pre-line",
                }}
              >
                {activeWorld.title}
              </h2>
              <p
                className="text-white/60 italic leading-relaxed"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(14px, 1.4vw, 20px)",
                  maxWidth: 460,
                }}
              >
                {activeWorld.quote}
              </p>
            </div>

            {/* Two thinkers */}
            <div
              className="flex items-start justify-between gap-6 pt-6"
              style={{ borderTop: `1px solid ${activeWorld.accentColorHex}20` }}
            >
              <div className="flex-1">
                <p className="text-white font-bold text-sm mb-0.5">{activeWorld.left.name}</p>
                <p className="text-white/40 text-xs mb-2">
                  {activeWorld.left.role} · {activeWorld.left.org}
                </p>
                <p className="text-white/50 text-xs leading-relaxed" style={{ maxWidth: 220 }}>
                  {activeWorld.left.description.slice(0, 100)}...
                </p>
              </div>

              {/* VS circle */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-xs mt-1"
                style={{
                  border: `2px solid ${activeWorld.accentColorHex}`,
                  color: activeWorld.accentColorHex,
                  background: `${activeWorld.accentColorHex}15`,
                }}
              >
                VS
              </div>

              <div className="flex-1 text-right">
                <p className="text-white font-bold text-sm mb-0.5">{activeWorld.right.name}</p>
                <p className="text-white/40 text-xs mb-2">
                  {activeWorld.right.role} · {activeWorld.right.org}
                </p>
                <p
                  className="text-white/50 text-xs leading-relaxed ml-auto"
                  style={{ maxWidth: 220 }}
                >
                  {activeWorld.right.description.slice(0, 100)}...
                </p>
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20"
              style={{
                background: `radial-gradient(circle, ${activeWorld.accentColorHex} 0%, transparent 70%)`,
                transform: "translate(30%, -30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-1/3 w-64 h-64 pointer-events-none opacity-10"
              style={{
                background: `radial-gradient(circle, ${activeWorld.accentColorHex} 0%, transparent 70%)`,
                transform: "translateY(30%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
