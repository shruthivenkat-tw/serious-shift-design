"use client";

import { useState } from "react";
import { worlds } from "./data";
import type { WorldKey } from "./data";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThinkerSection from "@/components/ThinkerSection";
import WorldsSection from "@/components/WorldsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeWorldKey, setActiveWorldKey] = useState<WorldKey>("society");
  const activeWorld = worlds.find((w) => w.key === activeWorldKey)!;

  return (
    <main>
      <Navbar />
      <HeroSection activeWorld={activeWorld} onWorldChange={setActiveWorldKey} />
      <ThinkerSection />
      <WorldsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
