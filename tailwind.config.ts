import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
      },
      colors: {
        "ss-black": "#0C0C0C",
        "ss-navy": "#0C0E1D",
        "ss-pink": "#FF007A",
        "ss-purple": "#8215B5",
      },
      backgroundImage: {
        "governance-gradient":
          "radial-gradient(ellipse at 70% 30%, #1e3a5f 0%, #0a1628 50%, #0c0e1d 100%)",
        "postcapital-gradient":
          "radial-gradient(ellipse at 50% 30%, #4c1d95 0%, #1e1b4b 50%, #0f0a1e 100%)",
        "agentic-gradient":
          "radial-gradient(ellipse at 50% 30%, #7f1d1d 0%, #3b0764 50%, #0f0a14 100%)",
        "liquidfirm-gradient":
          "radial-gradient(ellipse at 50% 30%, #134e4a 0%, #0f3c38 50%, #061a1a 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #0a1628 0%, #0c1f3f 40%, #0e2952 60%, #0a1832 100%)",
        "yellow-gradient":
          "linear-gradient(135deg, #fef08a 0%, #fde047 30%, #f59e0b 70%, #fbbf24 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
