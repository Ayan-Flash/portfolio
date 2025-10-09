"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ClickToKnowProps {
  onEnterCinematicMode: () => void
}

export function ClickToKnow({ onEnterCinematicMode }: ClickToKnowProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neon-smoke-horizontal opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Mysterious teaser text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Ready for Something Different?
            </h2>
            <p className="text-white/60 text-lg">
              Step into a cinematic experience unlike any other...
            </p>
          </motion.div>

          {/* Main glowing button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative"
          >
            {/* Rotating glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, rgba(0,255,255,0), rgba(0,255,255,0.5), rgba(255,0,255,0.5), rgba(0,255,255,0))",
                filter: "blur(20px)",
                transform: "scale(1.2)",
              }}
            />

            {/* The actual button */}
            <button
              onClick={onEnterCinematicMode}
              className="relative group px-12 py-6 bg-gradient-to-r from-black via-gray-900 to-black rounded-full border-2 border-cyan-500/50 overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:scale-105"
            >
              {/* Button glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated particles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-1 -left-1"
              >
                <Zap className="h-5 w-5 text-pink-400" />
              </motion.div>

              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Click to Know
                </span>
              </div>

              {/* Shine effect */}
              <motion.div
                animate={{
                  x: [-200, 200],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </button>
          </motion.div>

          {/* Hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 text-white/40 text-sm animate-pulse"
          >
            Click to unlock the experience
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
