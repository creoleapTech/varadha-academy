"use client"

import {
  Stethoscope, Globe, CheckCircle, FileText,
  MapPin, GraduationCap, Award, Heart,
  ShieldCheck, ArrowRight, BookOpen,
  Briefcase, Users, PhoneCall, Sparkles, ChevronDown
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ParallaxSection from "../../components/ParallaxSection"

export default function MedicalPage() {
  const [selectedCountry, setSelectedCountry] = useState(0)

  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "MCI/NMC Approved",
      description: "We only partner with universities recognized by the National Medical Commission (India) and WHO.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Award,
      title: "98% Success Rate",
      description: "Highest track record of successful student placements and visa approvals in the last decade.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Briefcase,
      title: "End-to-End Support",
      description: "From NEET counseling to post-arrival settlement, we handle every detail of your journey.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ]

  const destinations = [
    {
      country: "Georgia",
      features: ["European curriculum", "No entrance exam", "High FMGE passing rate", "Affordable living"],
      universities: ["Tbilisi State Medical University", "Batumi Shota Rustaveli State University"],
      color: "emerald"
    },
    {
      country: "Philippines",
      features: ["English medium", "US-based curriculum", "Excellent clinical exposure", "tropical climate"],
      universities: ["University of Perpetual Help", "AMA School of Medicine"],
      color: "blue"
    },
    {
      country: "Kazakhstan",
      features: ["Very low tuition", "English medium", "Modern infrastructure", "Short flight distance"],
      universities: ["Astana Medical University", "Kazakh National Medical University"],
      color: "indigo"
    },
    {
      country: "USA / UK",
      features: ["Global recognition", "Top-tier training", "High salary potential", "Advanced research"],
      universities: ["Pathway programs for USMLE/PLAB", "St. George's University"],
      color: "purple"
    }
  ]

  const steps = [
    { title: "Personal Counseling", desc: "Expert assessment of your profile and NEET score." },
    { title: "University Selection", desc: "Choosing the right country and university for your budget." },
    { title: "Documentation", desc: "Handling admission letters, apostille, and ministry approvals." },
    { title: "Visa Processing", desc: "Expert guidance for 100% visa success rate." },
    { title: "Travel & Settlement", desc: "Airport pickup, hostel registration, and local support." }
  ]

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="/assets/images/medical-hero.png"
        speed={0.3}
        className="min-h-[100vh] flex items-center justify-center pt-20"
        overlay={true}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 mb-6 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                <Heart className="w-4 h-4 fill-emerald-500/20" />
                Global Medical Pathways
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">
                Your Global <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  MBBS Journey
                </span>
                Starts Here.
              </h1>
              <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl">
                Sri Varada Academy bridges the gap between your aspirations and world-class medical universities. Expert guidance for a secure and prestigious medical career abroad.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center gap-3 group"
                >
                  Get Free Counseling
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Trust Pillars */}
      <section className="py-24 relative -mt-20 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200/50"
              >
                <div className={`w-16 h-16 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Destinations - Interactive */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Choose Your Destination</h2>
            <p className="text-lg text-slate-600">Multiple routes to your medical degree. Each offering unique benefits and world-class training.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 flex flex-col gap-4">
              {destinations.map((dest, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCountry(idx)}
                  className={`group flex items-center justify-between p-6 rounded-3xl border-2 transition-all duration-300 ${selectedCountry === idx
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-lg"
                    : "border-slate-100 hover:border-slate-200 bg-slate-50 text-slate-600"
                    }`}
                >
                  <span className="text-xl font-black">{dest.country}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${selectedCountry === idx ? "bg-emerald-500 text-white" : "bg-white text-slate-400 group-hover:bg-slate-200"
                    }`}>
                    <Globe className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCountry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                        Destination Factsheet
                      </div>
                      <div className="h-px flex-grow bg-slate-800" />
                    </div>

                    <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                      Why Study in {destinations[selectedCountry].country}?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest">Key Advantages</h4>
                        {destinations[selectedCountry].features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-6">
                        <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest">Top Universities</h4>
                        <div className="space-y-4">
                          {destinations[selectedCountry].universities.map((uni, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center gap-3">
                              <GraduationCap className="text-emerald-500 w-5 h-5" />
                              <span className="text-sm font-bold text-slate-200">{uni}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-12 w-full py-5 rounded-2xl bg-emerald-500 text-white font-black hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3"
                    >
                      Download {destinations[selectedCountry].country} Booklet
                      <FileText className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process - Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Admission Process</h2>
            <p className="text-slate-600 text-lg">A systematic approach to ensuring your enrollment at your dream university.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />

            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-100 shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:border-emerald-200 transition-all duration-500">
                    <span className="font-black text-2xl text-slate-900 group-hover:text-white transition-colors">{i + 1}</span>
                  </div>
                  <h4 className="font-black text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { n: "1000+", l: "Students Guided" },
                { n: "12+", l: "Global Destinations" },
                { n: "50+", l: "Partner Universities" },
                { n: "100%", l: "Admission Guarantee" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl font-black mb-2">{stat.n}</div>
                  <div className="text-emerald-100 font-bold uppercase tracking-widest text-xs">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team - NEW SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expert Counseling Team</h2>
            <p className="text-lg text-slate-600">Guidance from industry veterans who have helped thousands of students achieve their medical dreams.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sanjay Kumar", role: "Chief Counselor", exp: "15+ Yrs Exp", icon: Users },
              { name: "Meera Reddy", role: "Admissions Head", exp: "10+ Yrs Exp", icon: Award },
              { name: "Arjun Sharma", role: "Visa Expert", exp: "8+ Yrs Exp", icon: ShieldCheck },
              { name: "Dr. Anjali Singh", role: "Academic Advisor", exp: "12+ Yrs Exp", icon: BookOpen }
            ].map(({ icon: Icon, ...member }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 group"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-emerald-600 w-10 h-10" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2">{member.name}</h4>
                <div className="text-emerald-600 font-bold text-sm mb-1">{member.role}</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{member.exp}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW SECTION */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Common <br /><span className="text-emerald-500">Inquiries</span></h2>
              <p className="text-slate-400 text-lg mb-10">We transparency is key to building trust. Here are some of the most frequently asked questions about MBBS abroad.</p>

              <div className="space-y-4">
                {[
                  { q: "Is NEET mandatory for MBBS abroad?", a: "Yes, for Indian students intending to practice in India, qualifying NEET is mandatory as per NMC guidelines." },
                  { q: "Are foreign medical degrees valid in India?", a: "Degrees from NMC-recognized universities are valid, provided the student clears the NEXT/FMGE exam upon return." },
                  { q: "What is the medium of instruction?", a: "We exclusively recommend universities that offer the complete course in English medium." },
                  { q: "Can I get education loans?", a: "Yes, we assist in providing the necessary documentation required by banks for education loan processes." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-slate-900 rounded-2xl border border-slate-800 open:border-emerald-500/50 transition-all">
                    <summary className="list-none p-6 cursor-pointer flex items-center justify-between font-bold text-lg">
                      {faq.q}
                      <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-open:rotate-180 transition-transform">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="sticky top-24 aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                  alt="Doctor with patient"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Final Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Ready to start your <br />medical career?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Don't let admissions confusion hold you back. Schedule a free counseling session with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl flex items-center justify-center gap-3">
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </button>
                <button className="px-8 py-4 bg-emerald-100 text-emerald-700 font-black rounded-2xl flex items-center justify-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  Schedule Visit
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                  alt="Medical Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-2xl border border-slate-50 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Sparkles className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 leading-tight">NEET Counseling</div>
                    <div className="text-xs text-slate-500">Live Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
