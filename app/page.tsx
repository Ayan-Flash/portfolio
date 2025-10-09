"use client"

import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/contact";
import { Navigation } from "@/app/components/Navigation";
import { ClickToKnow } from "@/app/components/ClickToKnow";
import { CinematicMode } from "@/app/components/CinematicMode";
import { useState } from "react";

export default function Home() {
  const [isCinematicMode, setIsCinematicMode] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ClickToKnow onEnterCinematicMode={() => setIsCinematicMode(true)} />
        <Contact />
      </main>
      <CinematicMode isOpen={isCinematicMode} onClose={() => setIsCinematicMode(false)} />
    </div>
  )
}
