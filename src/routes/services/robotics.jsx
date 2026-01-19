"use client"

import {
  Zap, Lightbulb, Users, Award,
  Cpu, Rocket, Brain, Bot,
  CheckCircle,
  ChevronRight, ArrowRight, Shield,
  Target, Cog, Globe, Sparkles
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ParallaxSection from "../../components/ParallaxSection"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function RoboticsPage() {
  const [activeLevel, setActiveLevel] = useState(0)

  const features = [
    {
      icon: Cpu,
      title: "State-of-the-Art Hardware",
      description: "Access to world-class robotics kits including LEGO Education, VEX, and industry-standard Arduinos.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "We don't just build machines; we teach students to integrate Artificial Intelligence and Machine Learning.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Globe,
      title: "Global Competitions",
      description: "Preparation for prestigious events like FIRST Robotics, World Robot Olympiad (WRO), and more.",
      color: "from-orange-500 to-amber-400"
    },
    {
      icon: Shield,
      title: "Future-Ready Skills",
      description: "Developing 21st-century skills: critical thinking, complex problem solving, and adaptive leadership.",
      color: "from-emerald-500 to-teal-400"
    }
  ]

  const curriculum = [
    {
      id: "junior",
      title: "Junior Innovators",
      grade: "Grades K-5",
      description: "Igniting curiosity through visual learning and creative problem solving.",
      topics: [
        "Visual Block-Based Coding (Scratch/Blockly)",
        "Basic Mechanics & Simple Machines",
        "Sensory Perception in Robots",
        "Intro to Creative Design Thinking",
        "Lego Spike Essential Projects"
      ],
      icon: Sparkles,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      stats: "Foundational Logic"
    },
    {
      id: "middle",
      title: "Future Engineers",
      grade: "Grades 6-8",
      description: "Bridging the gap between theory and real-world application with microcontrollers.",
      topics: [
        "Text-Based Programming (Python/C++)",
        "Microcontroller Architecture (Arduino)",
        "Advanced Sensor Integration",
        "Internet of Things (IoT) Basics",
        "3D Design & Prototyping (Tinkercad)"
      ],
      icon: Cog,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      stats: "Intermediate Systems"
    },
    {
      id: "senior",
      title: "Tech Visionaries",
      grade: "Grades 9-12",
      description: "Advanced mastery focused on industry-standard technologies and innovation.",
      topics: [
        "AI & Neural Networks Integration",
        "Industrial Automation Standards",
        "Advanced CAD/CAM Design (Fusion 360)",
        "Autonomous Systems Programming",
        "Competitive Robotics Strategy"
      ],
      icon: Rocket,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      stats: "Professional Mastery"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-mesh-light selection:bg-blue-200">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="/assets/images/robotics-hero.png"
        speed={0.3}
        className="min-h-[100vh] flex items-center justify-center pt-20"
        overlay={true}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 mb-6 text-blue-600 font-semibold tracking-wide uppercase text-sm">
                <Bot className="w-4 h-4" />
                Next-Gen STEM Education
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-tight">
                Robotics <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                  Lab Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
                Empowering the next generation of innovators with world-class robotics infrastructure and a K-12 curriculum designed for the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-futuristic flex items-center gap-2 group"
                >
                  Book Free Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" relative"
            >
              <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
                <DotLottieReact
                  className="lg:w-[150%] scale-150 md:scale-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-1/2 lg:translate-x-1/2"
                  src="https://lottie.host/embed/524c1cf6-24ad-46de-b126-c58b6c35e689/LWdudmcogB.lottie"
                  loop
                  autoplay
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 glass-panel p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Cpu className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold">150+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-black">Modules</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us / Features */}
      <section className=" relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Our Lab?</h2>
            <p className="text-lg text-slate-600">
              We provide more than just kits; we provide a complete ecosystem for technological exploration and excellence.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map(({ icon: Icon, ...feature }, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl relative group overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section - The Heart of the Page */}
      <ParallaxSection
        bgImage="/assets/images/robotics-hero.png"
        speed={0.3}
        className="min-h-[100vh] flex items-center justify-center pt-20"
        overlay={false}
      >
        <section className="py-10 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-200/10 border border-blue-500/30 text-goldDark font-bold text-xs uppercase tracking-widest mb-6">
                  K-12 Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent pr-2 to-secondary">
                  A Roadmap for the <span className="text-goldDark">Future</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Our curriculum follows a progressive pedagogical path, ensuring students build a strong foundation before mastering complex autonomous systems.
                </p>


              </div>


            </div>
            <div className="lg:space-x-10 lg:space-y-0 space-y-5 flex flex-col lg:flex-row   ">
              {curriculum.map(({ icon: Icon, ...item }, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLevel(idx)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 ${activeLevel === idx
                    ? "border-blue-500 bg-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    : "border-blue-200 hover:border-blue-500 bg-blue-200/50"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeLevel === idx ? "bg-blue-500 text-primary" : "bg-blue-300 text-primary/50"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className={`text-sm font-black ${activeLevel === idx ? "text-primary" : "text-primary/60"}`}>{item.title}</div>
                    <div className="text-xs text-primary">{item.grade}</div>
                  </div>
                  {activeLevel === idx && <motion.div layoutId="dot" className="ml-auto w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />}
                </button>
              ))}
            </div>
            <div className=" py-5 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 backdrop-blur-xl border border-blue-800 rounded-[3rem] p-8 md:p-12 shadow-2xl"
                >

                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    {(() => {
                      const Icon = curriculum[activeLevel].icon
                      return (
                        <div className={`w-20 h-20 rounded-3xl ${curriculum[activeLevel].bgColor} flex items-center justify-center shadow-inner`}>
                          <Icon className={`w-10 h-10 ${curriculum[activeLevel].color}`} />
                        </div>
                      )
                    })()}
                    <div>
                      <h3 className="text-3xl text-white mb-3">{curriculum[activeLevel].title}</h3>
                      <p className="text-slate-200 text-lg leading-relaxed max-w-2xl">
                        {curriculum[activeLevel].description}
                      </p>
                    </div>
                    <div className="md:ml-auto text-right">
                      <div className="text-goldDark text-3xl font-black tracking-tight">{curriculum[activeLevel].stats}</div>
                      <div className="text-slate-200 text-xs font-bold uppercase tracking-widest mt-1">Focus Area</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {curriculum[activeLevel].topics.map((topic, i) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" />
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{topic}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* <div className="mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                              <img src={`https://i.pravatar.cc/100?u=${i + activeLevel}`} alt="Avatar" />
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-slate-500 font-bold">500+ Students Already Enrolled</div>
                      </div>
                      <button className="flex items-center gap-2 text-blue-500 font-black hover:gap-4 transition-all uppercase tracking-widest text-sm">
                        View full curriculum details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* STEM Kits Portfolio - NEW SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end pb-5 gap-8">
            <div className="lg:max-w-2xl">
              <div className="text-goldDark font-bold uppercase tracking-widest text-sm mb-4">The Hardware</div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                An Ecosystem of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent pr-2 to-secondary">World-Class Kits</span>
              </h2>
            </div>

          </div>
          <p className="text-slate-600 pb-5 text-lg">
            We partner with global leaders to provide the most advanced educational robotics components.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brand: "LEGO Education",
                lines: ["Spike Prime", "Mindstorms EV3", "BricQ Motion"],
                description: "The gold standard for playful, creative learning and foundational engineering concepts.",
                image: "https://images.unsplash.com/photo-1585338002631-031e84992569?q=80&w=2070&auto=format&fit=crop"
              },
              {
                brand: "VEX Robotics",
                lines: ["V5 Series", "IQ Generation", "EXP Kits"],
                description: "Industry-aligned metal construction systems for serious competitive engineering and design.",
                image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2070&auto=format&fit=crop"
              },
              {
                brand: "Open Source / AI",
                lines: ["Arduino Uno/Mega", "Raspberry Pi 4", "Jetson Nano"],
                description: "Deep-dive into professional programming, electronics, and Edge AI integration for seniors.",
                image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((kit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={kit.image} alt={kit.brand} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4">{kit.brand}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {kit.lines.map((line, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{line}</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{kit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Readiness - NEW SECTION */}
      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "WRO", full: "World Robot Olympiad", logo: "🏆" },
                  { name: "FIRST", full: "Robotics Competition", logo: "🚀" },
                  { name: "VEX", full: "Worlds Championship", logo: "⚙️" },
                  { name: "IRC", full: "International Robotics", logo: "🌍" }
                ].map((comp, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100 text-center"
                  >
                    <div className="text-3xl mb-3">{comp.logo}</div>
                    <div className="font-black text-primary">{comp.name}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{comp.full}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-1 bg-blue-600 mb-8" />
              <h2 className="text-4xl text-goldDark md:text-5xl font-black mb-6 ">Beyond the Classroom: <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent  to-secondary">Global Competition Track</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We prepare our students to shine on the world stage. Our training program specifically targets national and international robotics olympiads, fostering a spirit of healthy competition and global exposure.
              </p>
              <div className="space-y-4">
                {[
                  "Specialized Competition Bootcamp",
                  "National-Level Scrimmages & Mentorship",
                  "Project Documentation & Portfolio Building",
                  "Strategy & Mission Optimization Workshops"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Infrastructure Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Lab"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block"
              >
                <div className="text-4xl font-black text-primary mb-2">30+</div>
                <div className="text-slate-800 font-bold leading-tight">Institutional Partnerships in the last year</div>
                <div className="mt-4 h-1.5 w-20 bg-primary rounded-full" />
              </motion.div>
            </div>

            <div>
              <div className="w-16 h-1 bg-primary mb-8" />
              <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent  to-secondary md:text-5xl font-black mb-8 leading-tight">World-Class <span className="text-goldDark">Infrastructure</span> in Your Institution</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We don't just supply equipment; we transform spaces into hubs of innovation. Our lab setup includes architectural planning, equipment sourcing, and teacher training.
              </p>

              <ul className="space-y-6">
                {[
                  { title: "Custom Lab Layouts", desc: "Tailored to your available space and student capacity." },
                  { title: "Teacher Training Modules", desc: "Ensuring your faculty is equipped to lead." },
                  { title: "Ongoing Tech Support", desc: "24/7 assistance for hardware and software issues." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-black text-slate-900">{item.title}</div>
                      <div className="text-slate-600 text-sm mt-1">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Horizons - NEW SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Future Career Horizons</h2>
            <p className="text-lg text-slate-600">Our lab graduates don't just learn to build robots; they prepare for the most impactful careers of the 21st century.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                desc: "Designing the brains behind autonomous machines and predictive systems.",
                icon: Brain,
                skills: ["Neural Networks", "Python", "Data Science"]
              },
              {
                title: "Mechatronics Engineering",
                desc: "Blending mechanical, electrical, and computer engineering for industry 4.0.",
                icon: Cog,
                skills: ["Control Systems", "CAD", "Electronics"]
              },
              {
                title: "Autonomous Systems",
                desc: "Developing self-driving vehicles, drones, and warehouse automation.",
                icon: Rocket,
                skills: ["Sensor Fusion", "ROS", "Navigation"]
              }
            ].map(({ icon: Icon, ...career }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Icon className="text-goldDark w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent  to-secondary mb-4">{career.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{career.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2 py-1 rounded-md">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="1">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-[3rem] p-8 md:p-10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Build the Future, <br />
                <span className="text-blue-300">One Robot at a Time.</span>
              </h2>
              <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-12">
                Join the revolution in STEM education. Let's discuss how we can bring a world-class robotics lab to your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:bg-blue-50 transition-colors shadow-2xl flex items-center justify-center gap-3">
                  <Target className="w-5 h-5" />
                  Request Demo Lab
                </button>
                <button className="px-10 py-5 bg-blue-500/20 backdrop-blur-md border border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                  <Users className="w-5 h-5" />
                  Talk to an Expert
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
