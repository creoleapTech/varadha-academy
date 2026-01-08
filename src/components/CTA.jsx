import { Link } from "@tanstack/react-router"
import { Phone, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function CTA() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-mesh-light">
      {/* Background Parallax Orbs */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-12 md:p-20 rounded-[60px] text-center relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-black text-4xl md:text-6xl text-foreground mb-8 leading-tight tracking-tighter text-glow-primary">
              Ready to <span className="text-primary italic">Scale Your Future?</span>
            </h2>

            <p className="text-gray-500 mb-12 leading-relaxed text-lg font-light">
              Join the elite league of innovators and scholars today in a bright, modern learning ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="btn-futuristic flex items-center gap-3 group/btn h-16 px-10"
              >
                Initialize Application
                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
              
              <a
                href="tel:+919876543210"
                className="btn-outline-futuristic flex items-center gap-3 h-16 px-10"
              >
                <Phone size={20} className="text-primary" />
                Speak with Lead
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
    </section>
  )
}
