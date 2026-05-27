export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-10 py-6"
      style={{
        background: "#0C0C0C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <div className="flex flex-col">
        <span
          className="font-bold text-white text-base leading-tight"
          style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.02em" }}
        >
          Serious Shift
        </span>
        <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontSize: "9px" }}>
          Seriously TrendWatching
        </span>
      </div>

      {/* Right: year + copyright */}
      <div className="flex items-center gap-6">
        <span className="text-white/20 text-xs tracking-widest uppercase">
          © TrendWatching 2025
        </span>
        <span className="text-white/20 text-xs">
          Seriously TrendWatching
        </span>
      </div>
    </footer>
  );
}
