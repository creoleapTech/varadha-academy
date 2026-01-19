"use client"

import { useNavigate } from "@tanstack/react-router"
import { Target, Rocket, Award, Accessibility, Group, Users, Sparkles, BookOpen, GraduationCap, Globe, Lightbulb, HeartHandshake, ArrowRight, ChevronRight, Quote, Zap, Shield, Users as UsersIcon, TrendingUp, Globe as GlobeIcon, Award as AwardIcon, Brain, BarChart } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "@tanstack/react-router"
import ParallaxSection from "../components/ParallaxSection"

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  let navigate = useNavigate()
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const founder = {
    name: "Shri K.S. Varadarajan",
    title: "Educational Pioneer",
    description: "One of the earliest members of ICWAI (Membership No. 161), Fellow of British Teaching Institute, London",
    achievements: [
      "Founded Alpha Systems Coaching Centre",
      "Pioneered cost accounting education in India",
      "International teaching recognition",
      "Legacy of educational excellence"
    ],
    image: "/assets/images/founder_Varadha academy.png" // Replace with actual image path
  }

  const milestones = [
    {
      year: "2008",
      title: "Foundation & Legacy",
      description: "Established Sri Varada Academy honoring Shri K.S. Varadarajan's educational vision",
      icon: Sparkles,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      metrics: ["Legacy established", "Vision defined", "First partnerships"],
      color: "from-purple-500 to-violet-600"
    },
    {
      year: "2012",
      title: "STEM Innovation Launch",
      description: "Pioneered Robotics & English Labs across South Indian schools",
      icon: Zap,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      metrics: ["50+ Labs established", "STEM curriculum developed", "10,000+ Students"],
      color: "from-pink-500 to-rose-600"
    },
    {
      year: "2016",
      title: "Global Expansion",
      description: "Launched international medical admissions consultancy program",
      icon: Globe,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      metrics: ["Global partnerships", "Premium consultancy", "Career placement"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Integrated advanced EdTech solutions and virtual learning platforms",
      icon: Brain,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      metrics: ["Digital integration", "Hybrid learning", "AI-powered tools"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      year: "2024",
      title: "Future-Ready Education",
      description: "Leading innovation in education with AI, VR, and global collaborations",
      icon: TrendingUp,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      metrics: ["AI integration", "Global network", "Future-focused"],
      color: "from-amber-500 to-orange-600"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Building lasting relationships through transparency, ethics, and unwavering commitment to our promises.",
      features: ["Ethical practices", "Transparent operations", "Trust-based partnerships"],
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      icon: Rocket,
      title: "Innovation Forward",
      description: "Continuously evolving with cutting-edge educational technologies and pedagogical approaches.",
      features: ["EdTech integration", "Future-ready curriculum", "Continuous improvement"],
      color: "bg-gradient-to-br from-purple-600 to-pink-700",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "Delivering exceptional quality in every program, partnership, and learning experience.",
      features: ["Quality assurance", "Best practices", "Benchmark standards"],
      color: "bg-gradient-to-br from-amber-600 to-orange-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      icon: Accessibility,
      title: "Inclusive Access",
      description: "Making world-class education accessible to learners across diverse backgrounds and geographies.",
      features: ["Affordable programs", "Regional outreach", "Special needs support"],
      color: "bg-gradient-to-br from-emerald-600 to-teal-700",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      icon: Group,
      title: "Collaborative Growth",
      description: "Thriving through strategic partnerships that amplify impact and drive collective success.",
      features: ["School partnerships", "Industry alliances", "Community engagement"],
      color: "bg-gradient-to-br from-rose-600 to-red-700",
      bgColor: "bg-gradient-to-br from-rose-50 to-red-50"
    },
    {
      icon: HeartHandshake,
      title: "Student-Centric Focus",
      description: "Every decision, program, and innovation centers on student success and holistic development.",
      features: ["Personalized learning", "Mentorship programs", "Career guidance"],
      color: "bg-gradient-to-br from-violet-600 to-purple-700",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50"
    }
  ]

  const impactMetrics = [
    { number: "150+", label: "Partner Schools", icon: UsersIcon, change: "+25%", color: "text-blue-600" },
    { number: "75,000+", label: "Students Impacted", icon: GraduationCap, change: "+40%", color: "text-purple-600" },
    { number: "98%", label: "Satisfaction Rate", icon: AwardIcon, change: "+3%", color: "text-emerald-600" },
    { number: "20+", label: "Countries Served", icon: GlobeIcon, change: "+5", color: "text-amber-600" },
    { number: "85%", label: "Academic Improvement", icon: TrendingUp, change: "+15%", color: "text-cyan-600" },
    { number: "50+", label: "Educational Programs", icon: BookOpen, change: "+12", color: "text-pink-600" }
  ]

  const leadershipTeam = [
    { name: "Dr. Anjali Sharma", role: "Chief Academic Officer", expertise: "Curriculum Development", experience: "15+ years" },
    { name: "Rajesh Verma", role: "Technology Director", expertise: "EdTech Integration", experience: "12+ years" },
    { name: "Priya Menon", role: "International Relations", expertise: "Global Partnerships", experience: "10+ years" },
    { name: "Dr. Arjun Patel", role: "STEM Head", expertise: "Robotics & AI Education", experience: "8+ years" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Dynamic Background Effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      />

      {/* Hero Section */}
      <ParallaxSection
        bgImage="/assets/images/about.png"
        speed={0.3}
        className="min-h-[90vh]  flex items-center justify-center"
        overlay={false}
      >
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-pink-50/40"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Honoring Legacy Since 1924</span>
                </div>

                <h1 className="font-bold !text-primary text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                  <span className="text-goldDark">
                    Redefining
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Educational</span>
                  <br />
                  <span className="">Excellence</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                  Sri Varada Academy carries forward the visionary legacy of <span className="font-bold text-blue-700">Shri K.S. Varadarajan</span>,
                  blending traditional educational values with cutting-edge innovation to create transformative learning experiences.
                </p>

                {/* <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <span>Explore Our Impact</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  View Our Programs
                </button>
              </div> */}
              </div>

              {/* Founder Card */}
              <div className="relative group">
                <div className="absolute -inset-4  rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-1 shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={founder.image} alt="" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                        <p className="text-blue-600 font-medium">{founder.title}</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{founder.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {founder.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Impact Metrics */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl ${metric.color.replace('text', 'bg')}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <metric.icon className={`w-7 h-7 ${metric.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.number}</div>
                  <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                  <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {metric.change} growth
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-10  relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-10 border border-gray-100 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-goldDark uppercase tracking-widest mb-1">Our Purpose</div>
                      <h3 className="text-3xl font-bold text-primary">Mission</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
                    To be the most trusted partner for educational institutions worldwide, delivering <span className="font-bold">innovative academic solutions</span> through strategic global collaborations that ensure <span className="font-bold">unparalleled quality, accessibility, and measurable impact</span> in every learning journey.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {["Global Partnerships", "Academic Excellence", "Tech Integration", "Student Success"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-10 border border-gray-100 shadow-xl overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-goldDark uppercase tracking-widest mb-1">Our Aspiration</div>
                      <h3 className="text-3xl font-bold text-primary">Vision</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
                    To lead the global transformation of education by seamlessly bridging <span className="font-bold">cutting-edge technology</span> with <span className="font-bold">pedagogical excellence</span>, nurturing a generation of future-ready learners who are equipped to thrive in an ever-evolving world.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {["Tech-Education Fusion", "Global Leadership", "Future Readiness", "Continuous Innovation"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Core Principles</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational values that guide every decision, partnership, and innovation at Sri Varada Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
                  <div className="space-y-3">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="pt-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Evolution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous innovation and educational excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Connector */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setActiveMilestone(index)}
                    className={`group w-full text-left transition-all duration-500 ${activeMilestone === index ? 'scale-105' : 'hover:scale-105'}`}
                  >
                    <div className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 -top-4 transform -translate-x-1/2">
                        <div className={`w-8 h-8 rounded-full ${activeMilestone === index ? 'ring-4 ring-offset-2' : 'ring-2'} ${milestone.color.replace('from-', 'ring-')} border-4 border-white bg-gradient-to-br ${milestone.color} shadow-lg`}></div>
                      </div>

                      <div className={`bg-white rounded-2xl p-8 border-2 ${activeMilestone === index ? 'border-blue-300 shadow-2xl' : 'border-gray-100 shadow-lg group-hover:shadow-xl'} transition-all duration-300 overflow-hidden`}>
                        <div className="text-center mb-6">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                            <milestone.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 text-sm mb-6">{milestone.description}</p>
                        </div>
                        <div className="space-y-2">
                          {milestone.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                              <span className="text-xs font-medium text-gray-700">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of passionate educators and innovators driving educational transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium text-center mb-4">{member.role}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Expertise:</span>
                    <span className="font-semibold text-gray-900">{member.expertise}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold text-emerald-600">{member.experience}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <div className="lg:py-20 md:py-16 py-10 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center md:gap-12 gap-2 md:p-8 p-4 bg-gradient-to-r from-purple-100/50 to-violet-200/50 rounded-3xl border border-blue-100 shadow-lg">
          <div className="md:text-left text-center">
            <h3 className="text-2xl font-bold text-gray-900">Ready to transform your institution?</h3>
            <p className="text-gray-600 md:mt-2">Join thousands of schools already enhancing their learning experience</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { navigate('/contact') }} className="px-8 py-3 bg-gradient-to-r from-primary  to-accent text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Link
                to="/contact"
              >
                Book a Demo
              </Link>
            </button>
            {/* <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                View Case Studies
              </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}