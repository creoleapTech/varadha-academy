import { ArrowRight, Cpu, Activity } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"

export default function Services() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Cpu,
      title: "Robotics & AI",
      description: "Hands-on mastery of future-tech and intelligent systems.",
      to: "/services/robotics",
      color: "from-blue-500 to-cyan-400",
      tag: "Tech",
      bgImage: "/C:/Users/HP/.gemini/antigravity/brain/c016702d-5fae-4ef9-844e-e11311de040e/robotics_lab_service_1767592094750.png",
    },
    {
      icon: Activity,
      title: "Bio-Med Entry",
      description: "Strategic guidance for elite medical university admissions.",
      to: "/services/medical",
      color: "from-purple-500 to-pink-500",
      tag: "Academic",
      bgImage: "/C:/Users/HP/.gemini/antigravity/brain/c016702d-5fae-4ef9-844e-e11311de040e/medical_admissions_service_1767592126922.png",
    },
  ]

  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[150px] opacity-40"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tighter text-glow-primary">
            Specialized <span className="text-primary italic">Pathways</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light text-lg">
            Architecting success through cutting-edge educational frameworks in an advanced light environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                to={service.to}
                className="glass-card group relative p-1 rounded-[40px] overflow-hidden transition-all duration-500 flex flex-col items-center"
              >
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={service.bgImage} alt="" className="w-full h-full object-cover grayscale" />
                </div>

                <div className="relative z-10 p-10 w-full flex flex-col items-center text-center">
                  {/* Glowing Icon */}
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon size={40} />
                  </div>

                  <div className="px-4 py-1.5 rounded-full bg-white/50 border border-blue-100 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6 shadow-sm">
                    {service.tag}
                  </div>

                  <h3 className="font-black text-3xl text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xs">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                    Initialize Discovery <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
