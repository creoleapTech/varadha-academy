"use client"

import { motion } from "framer-motion"
import {
  Award,
  Sparkles,
  Globe2,
  HeartHandshake,
  Telescope,
  UsersRound
} from "lucide-react"
import ParallaxSection from "./ParallaxSection"

const features = [
  {
    icon: Sparkles,
    title: "Timeless Wisdom meets Future Fluency",
    description: "Where ancient insight and exponential technologies become one coherent worldview.",
    accent: "from-amber-400 to-amber-600",
  },
  {
    icon: Telescope,
    title: "Individual Constellation Learning",
    description: "Every student receives a completely personalized learning architecture — not just a curriculum.",
    accent: "from-blue-400 to-indigo-600",
  },
  {
    icon: Globe2,
    title: "World-class without compromise",
    description: "Benchmarked against the very best global institutions while deeply rooted in Indian intellectual heritage.",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    icon: HeartHandshake,
    title: "Character before Competence",
    description: "We develop moral imagination and ethical courage alongside intellectual sharpness.",
    accent: "from-purple-400 to-violet-600",
  },
  {
    icon: UsersRound,
    title: "Mentorship Tribe",
    description: "Real relationships with exceptional mentors, not just occasional guest lectures.",
    accent: "from-rose-400 to-pink-600",
  },
  {
    icon: Award,
    title: "Results that Echo",
    description: "Consistently producing thoughtful leaders who create disproportionate positive impact.",
    accent: "from-cyan-400 to-sky-600",
  },
]

export default function VaradaEdge() {
  return (
    <ParallaxSection bgImage="/assets/images/whyus.png" speed={0.2} className="relative overflow-hidden">
      <section className="relative py-10 md:py-10 overflow-hidden ">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container relative mx-auto px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-5 md:mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-primary font-medium tracking-widest uppercase mb-5"
            >
              The Varada Difference
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.92] text-goldDark"
            >
              Education that
              <span className="block mt-2 md:mt-4 bg-clip-text italic bg-gradient-to-r text-transparent from-primary via-accent to-secondary">
                Shapes Epochs
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              transition={{ duration: 1.1, delay: 0.4 }}
              className="mt-8 text-xl md:text-2xl text-slate-900 font-light leading-relaxed max-w-3xl mx-auto"
            >
              We are not preparing students for the future.<br className="hidden sm:inline" />
              We are teaching them how to <span className="font-bold text-slate-900">beautifully create it</span>.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 + 0.3 }}
                className="group relative"
              >
                <div className={`
                absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.accent} opacity-0 
                group-hover:opacity-8 transition-opacity duration-700 blur-xl -z-10
              `} />

                <div className="
                h-full p-9 md:p-10 rounded-3xl border border-slate-200/70 bg-white/70 
                backdrop-blur-xl shadow-lg shadow-slate-200/30 
                group-hover:shadow-2xl group-hover:shadow-slate-300/40 
                group-hover:border-slate-300/70 transition-all duration-500
              ">
                  <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} 
                  flex items-center justify-center text-white mb-7
                  group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500
                `}>
                    <feature.icon size={28} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </ParallaxSection>
  )
}