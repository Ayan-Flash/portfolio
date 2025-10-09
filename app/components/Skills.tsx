"use client"

import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and performant user interfaces with modern frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications with scalable architecture.",
    skills: ["Node.js", "PostgreSQL", "MongoDB"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user experiences with attention to detail.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "DevOps & Tools",
    description: "Deploying and maintaining applications with modern development workflows.",
    skills: ["Git", "Docker", "Vercel"],
    color: "from-green-500 to-teal-500",
  },
]

export function Skills() {
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
    <section ref={sectionRef} id="skills" className="py-32 px-6 bg-white text-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-black/70 max-w-2xl text-pretty">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-6 md:p-8 border-black/10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group h-full">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-black/70 text-pretty leading-relaxed text-sm md:text-base">{category.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-black/5 hover:bg-black/10 rounded-full text-xs md:text-sm transition-colors duration-300 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
