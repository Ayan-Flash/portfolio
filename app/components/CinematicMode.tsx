"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, Zap, Terminal, Code, Cpu, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

interface CinematicModeProps {
  isOpen: boolean
  onClose: () => void
}

// Neural Network Node Interface
interface NetworkNode {
  id: number
  x: number
  y: number
  size: number
  color: string
  connections: number[]
  pulseDelay: number
}

// Particle Pool for efficient memory management
class ParticlePool {
  private pool: any[] = []
  private active: Set<number> = new Set()
  
  constructor(private maxSize: number) {
    this.pool = Array.from({ length: maxSize }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      active: false,
    }))
  }
  
  acquire(count: number) {
    const particles = []
    for (let i = 0; i < Math.min(count, this.maxSize); i++) {
      if (!this.active.has(i)) {
        this.active.add(i)
        particles.push({ ...this.pool[i], active: true })
      }
    }
    return particles
  }
  
  release(ids: number[]) {
    ids.forEach(id => this.active.delete(id))
  }
  
  cleanup() {
    this.active.clear()
  }
}

export function CinematicMode({ isOpen, onClose }: CinematicModeProps) {
  const [showContent, setShowContent] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [networkActive, setNetworkActive] = useState(false)
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high')
  const [loadingProgress, setLoadingProgress] = useState(0)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const particlePoolRef = useRef<ParticlePool | null>(null)
  const prefersReducedMotion = useReducedMotion()
  
  // Projects data with expandable details
  const projects = [
    {
      icon: <Terminal className="h-10 w-10" />,
      title: "Full-Stack Mastery",
      description: "Building end-to-end solutions with cutting-edge technologies.",
      details: "Expert in React, Next.js, Node.js, and TypeScript. Building scalable applications with modern architecture patterns, microservices, and serverless solutions. Proficient in database design, API development, and cloud deployment.",
      color: "cyan",
      progress: 95,
      stats: { projects: 50, years: 3, rating: "4.9" }
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code that stands the test of time.",
      details: "Passionate about software craftsmanship. Applying SOLID principles, design patterns, and best practices. Code that's not just functional but elegant, readable, and maintainable for years to come.",
      color: "pink",
      progress: 90,
      stats: { projects: 45, years: 3, rating: "4.8" }
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Performance Optimizer",
      description: "Crafting lightning-fast applications with optimized architecture.",
      details: "Specializing in performance optimization, from bundle size reduction to runtime optimization. Profiling, analyzing, and eliminating bottlenecks. Achieving 95+ Lighthouse scores consistently.",
      color: "green",
      progress: 88,
      stats: { projects: 40, years: 2, rating: "4.9" }
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "UX Perfectionist",
      description: "Designing immersive experiences that captivate users.",
      details: "Creating interfaces that feel magical. Mastering animations, micro-interactions, and accessibility. Every pixel matters, every transition tells a story, every interaction delights.",
      color: "purple",
      progress: 92,
      stats: { projects: 35, years: 3, rating: "5.0" }
    },
  ]
  
  // Neural network nodes
  const networkNodes: NetworkNode[] = [
    { id: 0, x: 20, y: 30, size: 8, color: "#00ffff", connections: [1, 2, 3], pulseDelay: 0 },
    { id: 1, x: 40, y: 15, size: 6, color: "#ff00ff", connections: [4, 5], pulseDelay: 0.5 },
    { id: 2, x: 40, y: 45, size: 6, color: "#39ff14", connections: [4, 6], pulseDelay: 1 },
    { id: 3, x: 40, y: 75, size: 6, color: "#8a2be2", connections: [5, 6], pulseDelay: 1.5 },
    { id: 4, x: 60, y: 25, size: 6, color: "#00ffff", connections: [7], pulseDelay: 2 },
    { id: 5, x: 60, y: 50, size: 6, color: "#ff00ff", connections: [7], pulseDelay: 2.5 },
    { id: 6, x: 60, y: 75, size: 6, color: "#39ff14", connections: [7], pulseDelay: 3 },
    { id: 7, x: 80, y: 50, size: 8, color: "#8a2be2", connections: [], pulseDelay: 3.5 },
  ]
  
  // Detect device and set quality
  useEffect(() => {
    const detectQuality = () => {
      const isMobile = window.innerWidth < 768
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
      
      if (isMobile || isLowEnd) {
        setQuality('low')
      } else if (window.innerWidth < 1024) {
        setQuality('medium')
      } else {
        setQuality('high')
      }
    }
    
    detectQuality()
    window.addEventListener('resize', detectQuality)
    return () => window.removeEventListener('resize', detectQuality)
  }, [])
  
  // Initialize particle pool
  useEffect(() => {
    const particleCount = quality === 'high' ? 40 : quality === 'medium' ? 20 : 10
    particlePoolRef.current = new ParticlePool(particleCount)
    
    return () => {
      particlePoolRef.current?.cleanup()
    }
  }, [quality])
  
  // Progressive loading with delays
  useEffect(() => {
    if (isOpen) {
      setShowContent(false)
      setLoadingProgress(0)
      setNetworkActive(false)
      
      // Simulate progressive loading
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 30)
      
      // Activate network after loading
      const networkTimeout = setTimeout(() => {
        setNetworkActive(true)
      }, 2000)
      
      // Show content after loading completes
      const contentTimeout = setTimeout(() => {
        setShowContent(true)
      }, 3500)
      
      return () => {
        clearInterval(progressInterval)
        clearTimeout(networkTimeout)
        clearTimeout(contentTimeout)
      }
    }
  }, [isOpen])
  
  // Smart pause when not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isOpen) {
        // Pause animations when tab is not visible
        setNetworkActive(false)
      } else if (!document.hidden && isOpen && loadingProgress >= 100) {
        setNetworkActive(true)
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isOpen, loadingProgress])
  
  const handleClose = () => {
    setShowContent(false)
    setTimeout(onClose, 300)
  }
  
  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index)
  }
  
  // Get adaptive particle count
  const particleCount = quality === 'high' ? 40 : quality === 'medium' ? 20 : 10
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: quality !== 'low' ? 'thin' : undefined,
            scrollbarColor: quality !== 'low' ? 'rgba(0, 255, 255, 0.5) rgba(0, 0, 0, 0.3)' : undefined,
          }}
        >
          {/* Neural Network Background SVG */}
          {networkActive && quality !== 'low' && !prefersReducedMotion && (
            <div className="fixed inset-0 pointer-events-none opacity-30">
              <svg className="w-full h-full" style={{ minHeight: '100vh' }}>
                {/* Draw connections between nodes */}
                {networkNodes.map(node =>
                  node.connections.map(targetId => {
                    const target = networkNodes.find(n => n.id === targetId)
                    if (!target) return null
                    
                    return (
                      <g key={`${node.id}-${targetId}`}>
                        {/* Connection line */}
                        <motion.line
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${target.x}%`}
                          y2={`${target.y}%`}
                          stroke={node.color}
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: node.pulseDelay }}
                        />
                        {/* Animated data pulse */}
                        <motion.circle
                          r="3"
                          fill={node.color}
                          initial={{ 
                            cx: `${node.x}%`, 
                            cy: `${node.y}%`,
                            opacity: 0 
                          }}
                          animate={{
                            cx: [`${node.x}%`, `${target.x}%`],
                            cy: [`${node.y}%`, `${target.y}%`],
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: node.pulseDelay + 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </g>
                    )
                  })
                )}
                
                {/* Draw nodes */}
                {networkNodes.map(node => (
                  <motion.g key={node.id}>
                    {/* Glow effect */}
                    <motion.circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r={node.size + 4}
                      fill={node.color}
                      opacity="0.2"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: node.pulseDelay,
                      }}
                    />
                    {/* Node */}
                    <motion.circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r={node.size}
                      fill={node.color}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: node.pulseDelay }}
                    />
                  </motion.g>
                ))}
              </svg>
            </div>
          )}
          
          {/* Animated particles */}
          {quality !== 'low' && !prefersReducedMotion && (
            <div className="fixed inset-0 pointer-events-none">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-cyan-400/30"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Loading Progress Bar */}
          {loadingProgress < 100 && (
            <motion.div
              className="fixed top-0 left-0 right-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="h-1 bg-black/50 backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="text-center py-4">
                <motion.p
                  className="text-white/80 text-sm font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing Neural Network... {loadingProgress}%
                </motion.p>
              </div>
            </motion.div>
          )}
          
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className="fixed top-4 right-4 md:top-8 md:right-8 z-50 p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-500 transition-all duration-300 group"
          >
            <X className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:text-cyan-400 transition-colors" />
          </motion.button>
          
          {/* Main Content */}
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24">
            {/* Cinematic Title */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -50, scale: showContent ? 1 : 0.8 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center mb-8 md:mb-16"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
                style={{
                  background: "linear-gradient(to right, #00ffff, #ff00ff, #39ff14)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={quality !== 'low' ? {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                } : undefined}
                transition={quality !== 'low' ? { duration: 5, repeat: Infinity } : undefined}
              >
                THE DEVELOPER WITHIN
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 0.8 : 0 }}
                transition={{ delay: 0.6 }}
                className="text-base md:text-xl text-white/80 font-light tracking-wide"
              >
                Where Code Meets Creativity
              </motion.p>
            </motion.div>
            
            {/* Interactive Feature cards with expandable modals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                  layout
                >
                  {/* Card */}
                  <motion.div
                    className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 border-2 border-white/10 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
                    whileHover={{ scale: quality === 'high' ? 1.03 : 1.01, rotateY: quality === 'high' ? 5 : 0 }}
                    onClick={() => handleProjectClick(index)}
                    style={{
                      transformStyle: quality === 'high' ? "preserve-3d" : undefined,
                      perspective: quality === 'high' ? "1000px" : undefined,
                    }}
                  >
                    {/* Hover gradient */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                          project.color === "cyan" ? "rgba(0, 255, 255, 0.1)" :
                          project.color === "pink" ? "rgba(255, 0, 255, 0.1)" :
                          project.color === "green" ? "rgba(57, 255, 20, 0.1)" :
                          "rgba(138, 43, 226, 0.1)"
                        }, transparent 70%)`,
                      }}
                    />

                    {/* Icon with animated ring */}
                    <div className="relative mb-4 inline-block">
                      <motion.div
                        className={`text-${project.color}-400 relative z-10`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {project.icon}
                      </motion.div>
                      {/* Animated progress ring */}
                      <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)]" style={{ transform: 'rotate(-90deg)' }}>
                        <circle
                          cx="50%"
                          cy="50%"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-white/10"
                        />
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          strokeDashoffset={`${2 * Math.PI * 20 * (1 - project.progress / 100)}`}
                          className={`text-${project.color}-400`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 20 * (1 - project.progress / 100) }}
                          transition={{ duration: 2, delay: 1 + index * 0.2 }}
                        />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-glow transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-4">
                      {project.description}
                    </p>

                    {/* Expand indicator */}
                    <motion.div
                      className="flex items-center gap-2 text-cyan-400 text-sm font-medium"
                      animate={{ x: selectedProject === index ? 5 : 0 }}
                    >
                      <span>{selectedProject === index ? 'Show less' : 'Learn more'}</span>
                      <motion.div
                        animate={{ rotate: selectedProject === index ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </motion.div>

                    {/* Corner accent */}
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute top-2 right-2"
                    >
                      <Zap className={`h-4 w-4 text-${project.color}-400`} />
                    </motion.div>
                  </motion.div>

                  {/* Expandable details modal */}
                  <AnimatePresence>
                    {selectedProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 rounded-2xl bg-black/90 border-2 border-cyan-500/30 backdrop-blur-sm">
                          {/* Detailed description */}
                          <p className="text-white/80 mb-6 leading-relaxed">
                            {project.details}
                          </p>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-3 rounded-lg bg-white/5">
                              <div className="text-2xl font-bold text-cyan-400">{project.stats.projects}+</div>
                              <div className="text-xs text-white/60">Projects</div>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5">
                              <div className="text-2xl font-bold text-pink-400">{project.stats.years}+</div>
                              <div className="text-xs text-white/60">Years</div>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5">
                              <div className="text-2xl font-bold text-green-400">{project.stats.rating}</div>
                              <div className="text-xs text-white/60">Rating</div>
                            </div>
                          </div>

                          {/* Animated progress bar */}
                          <div className="mb-2">
                            <div className="flex justify-between text-xs text-white/60 mb-1">
                              <span>Mastery Level</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${
                                  project.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                                  project.color === 'pink' ? 'from-pink-500 to-purple-500' :
                                  project.color === 'green' ? 'from-green-500 to-emerald-500' :
                                  'from-purple-500 to-indigo-500'
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Cinematic quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4"
            >
              <motion.blockquote
                className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 italic leading-relaxed"
                animate={quality !== 'low' ? {
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.3)",
                    "0 0 20px rgba(255, 255, 255, 0.5)",
                    "0 0 10px rgba(255, 255, 255, 0.3)",
                  ],
                } : undefined}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "The future belongs to those who believe in the beauty of their code."
              </motion.blockquote>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-4 text-cyan-400 font-semibold"
              >
                — A Developer's Manifesto
              </motion.p>
            </motion.div>

            {/* Back to normal button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleClose}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 hover:from-cyan-400 hover:via-pink-400 hover:to-cyan-400 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] relative overflow-hidden group"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative z-10">Back to Normal Mode</span>
                </Button>
              </motion.div>
              
              {/* Performance info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="mt-4 text-white/40 text-xs"
              >
                Quality: {quality.toUpperCase()} | Neural Network: {networkActive ? 'ACTIVE' : 'INACTIVE'}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
