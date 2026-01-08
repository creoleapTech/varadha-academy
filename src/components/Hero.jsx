"use client"

import { ChevronDown, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "@tanstack/react-router"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.4

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-mesh-light">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
      >
        <img 
          src="/C:/Users/HP/.gemini/antigravity/brain/c016702d-5fae-4ef9-844e-e11311de040e/light_futuristic_education_parallax_bg_1767593332100.png" 
          alt="Futuristic Education" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-100 bg-white/60 backdrop-blur-xl animate-pulse-glow shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/80">
              Future-Ready Educational Hub
            </span>
          </div>

          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tighter text-glow-primary">
            Elevating the Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Intelligence
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Sri Varada Academy bridges traditional excellence with futuristic innovation, 
            empowering students to lead in an evolving digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              to="/about"
              className="btn-futuristic flex items-center gap-3 h-14"
            >
              Start Discovery
              <ChevronDown className="rotate-[-90deg]" size={18} />
            </Link>
            
            <Link 
              to="/services/robotics"
              className="btn-outline-futuristic flex items-center h-14"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 1 - Math.min(scrollY / 300, 1) }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary/50 to-transparent"></div>
        <ChevronDown size={14} className="text-primary animate-bounce" />
      </div>

      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
    </section>
  )
}
