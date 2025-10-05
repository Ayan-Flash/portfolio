import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/contact";
import { Navigation } from "@/app/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
