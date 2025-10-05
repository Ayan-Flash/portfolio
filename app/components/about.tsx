"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section ref={sectionRef} id="about" className="py-32 px-6 bg-white text-black">
      <div className="container mx-auto">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Building digital products that matter</h2>

          <div className="space-y-6 text-lg text-black/70 leading-relaxed">
            <p className="text-pretty">
              I'm a full-stack developer and designer with a passion for creating exceptional digital experiences. With
              expertise in modern web technologies, I help businesses and individuals bring their ideas to life.
            </p>

            <p className="text-pretty">
              My approach combines technical excellence with thoughtful design, ensuring every project is not only
              functional but also beautiful and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
