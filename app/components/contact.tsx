"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neon-beam-vertical opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-glow">Let's work together</h2>
            <p className="text-lg text-white/70 text-pretty">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:ghoshayan371@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm md:text-base">ghoshayan371@gmail.com</span>
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Follow Me</h4>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Ayan-Flash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-all border border-white/10 hover:border-cyan-500/50"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/ayan-ghosh-50ab97311/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 transition-all border border-white/10 hover:border-pink-500/50"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-all border border-white/10 hover:border-cyan-500/50"
                  >
                    <Twitter className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-all hover:border-white/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-all hover:border-white/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none focus:border-cyan-500/50 transition-all hover:border-white/20"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white hover:scale-[1.02] transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-32 pt-8 border-t border-white/10 text-center text-white/40 text-sm"
        >
          <p>© Made By Ayan Ghosh. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
