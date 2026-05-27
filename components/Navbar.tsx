export default function Navbar() {
  const navItems = ["Thinkers", "Predictions", "Keynote", "Community"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Asterisk / star icon */}
        <span
          style={{
            fontSize: "22px",
            color: "#000",
            fontWeight: 900,
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}
        >
          ✳
        </span>
        <div className="flex flex-col leading-tight">
          <span
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              color: "#000",
              letterSpacing: "-0.01em",
            }}
          >
            Serious Shift
          </span>
          <span
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 400,
              fontSize: "9px",
              color: "rgba(0,0,0,0.35)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            powered by TrendWatching
          </span>
        </div>
      </div>

      {/* Nav links in a pill container */}
      <div
        className="hidden md:flex items-center gap-1"
        style={{
          background: "rgba(0,0,0,0.04)",
          borderRadius: "999px",
          padding: "4px 6px",
          border: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {navItems.map((item, idx) => (
          <a
            key={item}
            href="#"
            className="transition-colors"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: idx === 0 ? "#000" : "rgba(0,0,0,0.45)",
              padding: "5px 14px",
              borderRadius: "999px",
              background: idx === 0 ? "#fff" : "transparent",
              boxShadow: idx === 0 ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              textDecoration: "none",
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right CTA */}
      <button
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          color: "#fff",
          background: "#000",
          padding: "8px 20px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          letterSpacing: "0.01em",
        }}
      >
        Get Access
      </button>
    </nav>
  );
}
