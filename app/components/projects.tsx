"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Neo-ride: A Travel Booking Platform",
    description: "A modern travel booking platform with real-time inventory management and seamless checkout experience.",
    tags: ["Vite", "TypeScript", "Stripe", "Tailwind"],
    link: "https://ride-swift-woad.vercel.app/", // Replace with your actual project link
    previewImage: "/videos/neoride.png",
    videoPreview: "/videos/neoride-demo.mp4", // Add your video file here
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace for teams to plan, track, and manage projects efficiently.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "https://projectmgmt.example.com", // Replace with your actual project link
    previewImage: "/videos/project-placeholder.png", // Add your image here
    videoPreview: "/videos/project-demo.mp4", // Add your video file here
  },
  {
    title: "TraceBrew : A BlockChain Based Coffee E-commerce Platform",
    description: "A WebPage for a Coffee E-commerce Platform built using BlockChain Technology.",
    tags: ["Next.js", "OpenAI", "Supabase", "Vercel"],
    link: "https://tracebrew.vercel.app/", // Replace with your actual project link
    previewImage: "/videos/ai-placeholder.png", // Add your image here
    videoPreview: "/videos/ai-demo.mp4", // Add your video file here
  },
  {
    title: "AgroWatch: Smart Agriculture Monitoring",
    description: "Web-based platform for monitoring and managing agricultural activities using IoT devices.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://agro-watch-demo.vercel.app/", // Replace with your actual project link
    previewImage: "/videos/agriclututural.png",
    videoPreview: "/videos/agro-demo.mp4", // Add your video file here
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
    <section ref={sectionRef} id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background neon beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neon-beam-vertical opacity-30" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-glow">Featured Projects</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-pretty">
            A selection of my recent work showcasing various technologies and design approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  isVisible: boolean
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((error) => {
          console.log("Video autoplay failed:", error)
        })
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovered])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-gradient-to-br from-black via-gray-900/50 to-black border-0 overflow-hidden group relative neon-rim hover:scale-[1.02] transition-all duration-500 cursor-pointer h-full flex flex-col">
        {/* Gradient background that shifts on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

        {/* Video/Image Preview Section */}
        <div className="relative aspect-video overflow-hidden bg-black/50">
          {/* Preview Image - Always visible as background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `url(${project.previewImage})`,
              opacity: isHovered ? 0 : 1,
            }}
          />

          {/* Video - Plays on hover */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <source src={project.videoPreview} type="video/mp4" />
          </video>

          {/* Neon overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Play indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400/50 flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-cyan-400 border-b-8 border-b-transparent ml-1" />
            </div>
          </div>
        </div>

        <div className="p-8 relative z-10 flex-1 flex flex-col">
          {/* Project Title with neon accent */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-glow transition-all duration-300">
              {project.title}
            </h3>
            <div className="ml-4 p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 transition-all duration-300">
              <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-cyan-400 transition-colors" />
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 mb-6 text-pretty leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-1">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* View Project Button */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] group/btn">
              View Project
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>
      </Card>
    </motion.div>
  )
}
