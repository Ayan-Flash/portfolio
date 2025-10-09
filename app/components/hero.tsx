"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("[v0] Video autoplay prevented:", error)
      })
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover opacity-70">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        {/* Horizontal smoke overlay (cinematic haze) */}
        <div className="neon-smoke-horizontal z-10" />
        
        {/* Neon accent beams */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] z-10"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] z-10"
        />
      </div>

      <div className="relative z-20 container mx-auto">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-balance"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent">
              Just Me Being Creative
            </span>
            <br />
            <span className="text-white/60">
              &nbsp;
              <span aria-label="and Designer" className="typewriter inline-block align-baseline text-glow-pink">
                & Developer
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl text-pretty"
          >
            I craft beautiful digital experiences with a focus on clean design, smooth interactions, and modern web
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white hover:scale-105 transition-all group hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            >
              See My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-white/20 hover:border-cyan-400 hover:bg-cyan-500/10 bg-black/50 backdrop-blur-sm hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <span className="text-white/60 text-sm">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 text-cyan-400" />
      </motion.div>
    </section>
  )
}
