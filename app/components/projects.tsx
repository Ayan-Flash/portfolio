"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace for teams to plan, track, and manage projects efficiently.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    image: "/project-management-kanban-board.png",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform that helps creators generate high-quality content in seconds.",
    tags: ["Next.js", "OpenAI", "Supabase", "Vercel"],
    image: "/ai-content-writing-interface.png",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first application for tracking workouts, nutrition, and fitness goals.",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "/fitness-tracking-app.png",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-lg text-white/70 max-w-2xl text-pretty">
            A selection of my recent work showcasing various technologies and design approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white/5 border-white/10 overflow-hidden group hover:bg-white/10 hover:scale-[1.02] transition-all duration-500 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-white/5">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-white/70 mb-4 text-pretty leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
