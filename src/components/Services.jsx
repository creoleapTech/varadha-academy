"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, Activity, Sparkles, ArrowUpRight } from "lucide-react"
import { Link } from "@tanstack/react-router"
import ParallaxSection from "./ParallaxSection"

// === Animation Variants ===
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  },
  hover: {
    y: -12,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

const slideFromRight = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  },
  hover: {
    y: -12,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
}

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "Robotics & AI",
      description: "Hands-on mastery of future-tech and intelligent systems.",
      to: "/services/robotics",
      gradient: "from-blue-500 via-cyan-400 to-teal-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
      tag: "Deep Tech",
      features: ["Advanced Robotics", "AI & Machine Learning", "IoT Integration"],
      variant: slideFromLeft // ← First card from LEFT
    },
    {
      icon: Activity,
      title: "Bio-Med Entry",
      description: "Strategic guidance for elite medical university admissions.",
      to: "/services/medical",
      gradient: "from-purple-500 via-pink-500 to-rose-400",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      tag: "Elite Academics",
      features: ["NEET Preparation", "Strategic Mentorship", "Mock Testing"],
      variant: slideFromRight // ← Second card from RIGHT
    }
  ]

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .shimmer-border {
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <ParallaxSection bgImage="" speed={-0.1} className="py-20 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-end lg:mb-16 mb-10"
          >
            <motion.div className="lg:w-2/3" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-goldDark/20 backdrop-blur-sm border border-goldDark mb-6">
                <Sparkles className="w-4 h-4 text-goldDark" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1C2D]/80">Our Programs</span>
              </div>
              <h2 className="font-display font-black text-5xl md:text-7xl text-goldDark mb-6 tracking-tighter leading-[0.95]">
                Strategic <br />
                <span className="text-transparent pr-5 italic bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Learning Pathways
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
                We provide the frameworks, tools, and mentorship required to excel in the most challenging and rewarding sectors of the modern economy.
              </p>
            </motion.div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={service.variant}           // ← This is the key change!
                  whileHover="hover"
                  className="group relative"
                >
                  <Link
                    to={service.to}
                    className="group relative rounded-3xl overflow-hidden transition-all duration-500"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="
                      relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl lg:p-10 p-5 h-full flex flex-col
                      shadow-lg shadow-slate-200/30
                      group-hover:shadow-2xl group-hover:shadow-slate-300/40
                      group-hover:border-slate-300/70 transition-all duration-500
                    ">
                      {/* Top section, content, CTA... remains the same */}
                      <div className="flex items-start justify-between md:mb-4 lg:mb-8 mb-2">
                        <motion.div
                          className={`relative lg:w-20 lg:h-20 h-14 w-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-xl`}
                          whileHover={{ scale: 1.12, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          <Icon size={36} strokeWidth={2} />
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                        </motion.div>

                        <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200">
                          <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.15em]">
                            {service.tag}
                          </span>
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="font-black text-3xl text-[#0B1C2D] md:mb-4 mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0B1C2D] group-hover:to-[#D4AF37] transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed md:mb-8 mb-2">{service.description}</p>

                        <div className="lg:space-y-3 space-y-2 md:mb-8 mb-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                              <span className="text-sm text-gray-500 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:pt-6 pt-3 border-t border-gray-200/50">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors">
                          Learn More
                        </span>
                        <motion.div
                          className={`md:w-12 md:h-12 w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}
                          whileHover={{ scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <ArrowUpRight size={20} strokeWidth={2.5} />
                        </motion.div>
                      </div>

                      <div className="absolute inset-x-0 top-0 h-px shimmer-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Stats bar */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200/50"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-[#0B1C2D] mb-2">500+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#0B1C2D] mb-2">95%</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#0B1C2D] mb-2">100%</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </motion.div> */}
        </div>
      </ParallaxSection>
    </>
  )
}