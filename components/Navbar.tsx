"use client";

import { WorldKey } from "@/app/data";

interface NavbarProps {
  activeWorld: WorldKey;
  onWorldChange: (world: WorldKey) => void;
}

const navLinks = ["Fellows", "Debates", "Groups", "Signals"];

const worldTabs: { key: WorldKey; label: string; color: string; bg: string }[] = [
  { key: "society", label: "SOCIETY", color: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  { key: "economy", label: "ECONOMY", color: "#e879f9", bg: "rgba(232,121,249,0.12)" },
  { key: "climate", label: "CLIMATE", color: "#fb7185", bg: "rgba(251,113,133,0.12)" },
  {
    key: "organisations",
    label: "ORGANISATIONS",
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
  },
];

export default function Navbar({ activeWorld, onWorldChange }: NavbarProps) {
  const activeTab = worldTabs.find((t) => t.key === activeWorld)!;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3"
      style={{
        background: "rgba(12,12,12,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex flex-col">
          <span
            className="font-bold text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", letterSpacing: "-0.02em" }}
          >
            Serious Shift
          </span>
          <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontSize: "9px" }}>
            Seriously TrendWatching
          </span>
        </div>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            {link}
          </a>
        ))}
      </div>

      {/* World tabs */}
      <div className="flex items-center gap-2">
        {worldTabs.map((tab) => {
          const isActive = tab.key === activeWorld;
          return (
            <button
              key={tab.key}
              onClick={() => onWorldChange(tab.key)}
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                color: isActive ? tab.color : "rgba(255,255,255,0.4)",
                background: isActive ? tab.bg : "transparent",
                border: `1px solid ${isActive ? tab.color : "rgba(255,255,255,0.1)"}`,
                letterSpacing: "0.08em",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
