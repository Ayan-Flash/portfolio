import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket, Zap } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and performant user interfaces with modern frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications with scalable architecture.",
    skills: ["Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user experiences with attention to detail.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    icon: Rocket,
    title: "DevOps & Tools",
    description: "Deploying and maintaining applications with modern development workflows.",
    skills: ["Git", "Docker", "Vercel"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white text-black">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-black/70 max-w-2xl text-pretty">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-8 border-black/10 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-black/70 text-pretty leading-relaxed">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
