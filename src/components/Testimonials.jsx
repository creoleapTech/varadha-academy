"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useState } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      school: "DPS, Bangalore",
      content: "Transformative experience. The tech lab is phenomenal.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Principal",
      school: "St. Mary's",
      content: "A revolution in science curriculum. Pure excellence.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden">
      {/* Background Decor */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"
        style={{ transform: `translateX(${scrollY * 0.05}px)` }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl md:text-5xl text-foreground tracking-tighter text-glow-primary">
            Community <span className="text-accent">Voices</span>
          </h2>
        </div>

        <div className="glass-card p-10 md:p-16 rounded-[48px] relative overflow-hidden group">
          <Quote className="absolute top-10 right-10 text-primary/5 group-hover:text-primary/10 transition-colors" size={120} />
          
          <div className="relative z-10">
            <div className="flex gap-2 mb-8">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={22} className="text-primary fill-primary shadow-sm" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl text-foreground font-medium mb-10 leading-relaxed italic border-l-8 border-primary/10 pl-8">
              "{testimonials[activeIndex].content}"
            </blockquote>

            <div className="flex items-center gap-6 pt-10 border-t border-blue-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-2xl shadow-lg">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-black text-xl text-foreground leading-none">{testimonials[activeIndex].name}</p>
                <p className="text-xs text-primary font-black uppercase tracking-[0.2em] mt-2 opacity-60">
                  {testimonials[activeIndex].role} <span className="mx-2">/</span> {testimonials[activeIndex].school}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex ? "bg-primary w-12" : "bg-blue-100 w-3 hover:bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
    </section>
  )
}
