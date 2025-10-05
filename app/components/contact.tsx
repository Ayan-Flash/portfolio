"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
    <section ref={sectionRef} id="contact" className="py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Let's work together</h2>
            <p className="text-lg text-white/70 text-pretty">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  hello@example.com
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <form
              className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none focus:border-white/30 transition-colors"
                />
              </div>
              <Button className="w-full bg-white text-black hover:bg-white/90 hover:scale-[1.02] transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
