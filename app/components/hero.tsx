"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

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
      </div>

      <div className="relative z-20 container mx-auto">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-balance">
            Creative Developer
            <br />
            <span className="text-white/60">
              &nbsp;
              <span aria-label="and Designer" className="typewriter inline-block align-baseline">& Designer</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl text-pretty animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            I craft beautiful digital experiences with a focus on clean design, smooth interactions, and modern web
            technologies.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all group">
              See My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 bg-transparent hover:scale-105 transition-all"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Removed dial per request */}
      </div>
    </section>
  )
}
