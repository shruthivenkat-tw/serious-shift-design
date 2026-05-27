export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#f8f8f6", minHeight: "220px" }}
    >
      <div className="max-w-[1400px] mx-auto px-10 py-16 flex items-center justify-between gap-10">
        {/* Left: label + headline */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase text-black/30"
              style={{ letterSpacing: "0.12em" }}
            >
              THE SHIFT
            </span>
            <span className="text-black/20 text-xs">•</span>
            <span
              className="text-xs font-bold tracking-widest uppercase text-black/30"
              style={{ letterSpacing: "0.12em" }}
            >
              STREAMING
            </span>
          </div>
          <h2
            className="text-black font-black leading-tight mb-4"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontSize: "clamp(26px, 3vw, 48px)",
              letterSpacing: "-0.02em",
            }}
          >
            ONE TRANSFORMATION,
            <br />
            TOLD FOUR WAYS.
          </h2>
          <p className="text-black/50 text-sm leading-relaxed" style={{ maxWidth: 480 }}>
            Every conference surface wants to make it their focus — about the thinkers and
            what&apos;s literally happening with each faction in the worlds.
          </p>
        </div>

        {/* Right: Arrow indicator */}
        <div className="flex-shrink-0 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="text-black/20 text-4xl font-black leading-none select-none"
              style={{ fontFamily: "monospace", opacity: 0.15 + i * 0.2 }}
            >
              ›
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
