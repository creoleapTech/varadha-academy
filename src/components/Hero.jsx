"use client"

import { ChevronDown, Sparkles, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "@tanstack/react-router"
import ParallaxSection from "./ParallaxSection"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <ParallaxSection
        bgImage="/assets/images/hero-bg.png"
        speed={0.6}
        className="min-h-[90vh] flex items-center justify-center"
        overlay={false}
      >
        {/* Background Gradient Overlay for Readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-transparent z-0"></div> */}

        {/* Floating Elements for extra depth */}
        <div className="relative overflow-hidden w-full">
          {/* Background Glow Orbs */}
          <div
            className="absolute top-1/4 right-1/10 w-64 h-64 rounded-full blur-3xl animate-float"
            style={{
              backgroundColor: 'rgba(11, 28, 45, 0.2)', // dark blue glow
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          ></div>

          <div
            className="absolute bottom-1/4 left-1/10 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{
              backgroundColor: 'rgba(212, 175, 55, 0.15)', // dark gold glow
              animationDelay: '2s',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          ></div>

          {/* Content */}
          <div className="container mx-auto px-10 relative z-10 py-12">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex bg-goldDark/20 cursor-pointer !hover:-translate-y-3 transition-all duration-300 items-center gap-3 px-6 py-2.5 rounded-full glass-panel mb-8 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.2s forwards' }}>
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm  font-bold tracking-widest uppercase text-[#0B1C2D]/80">
                  Defining the Future of Learning
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-display !leading-snug tracking-normal font-black text-5xl md:text-6xl lg:text-8xl text-primary mb-8 opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.4s forwards' }}>
                Shape
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-glow">
                  The Future
                </span>
                <br />
                Of Education.
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-light mx-auto opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.6s forwards' }}>
                Sri Varada Academy: A sanctuary for visionary minds, blending
                cutting-edge technology with timeless educational wisdom.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.8s forwards' }}>
                <Link
                  to="/about"
                  className="group relative border border-white py-3 rounded-2xl font-bold overflow-hidden transition-all duration-300 active:scale-95  flex items-center justify-center gap-3 h-16 px-10 text-lg bg-gradient-to-r from-primary via-primary to-accent text-white"
                >
                  Start Your Journey
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>

                <Link
                  to="/services/robotics"
                  className="flex items-center justify-center h-16 px-10 text-lg font-bold rounded-xl
                border backdrop-blur-md transition-all"
                  style={{
                    color: '#D4AF37',
                    borderColor: '#D4AF37',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Stats */}
        {/* <div className="absolute bottom-12 right-12 hidden lg:flex gap-16 animate-fade-in translate-y-[-20px]">
          {[
            { label: "Innovators", value: "500+" },
            { label: "Tech Programs", value: "12" },
            { label: "Success Rate", value: "99%" }
          ].map((stat, i) => (
            <div key={i} className="text-right">
              <div className="text-4xl font-black text-foreground">{stat.value}</div>
              <div className="text-sm font-bold text-primary/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </ParallaxSection>
    </>
  )
}