"use client"

import { motion } from "framer-motion"
import { Phone, Mail, User, MessageSquare, ArrowRight, Send } from "lucide-react"
import { useState } from "react"

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would normally send data to your backend/API
    // For demo we just simulate success after 1.2s
    await new Promise(resolve => setTimeout(resolve, 1200))

    setSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 5 seconds (optional)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 5000)
  }

  return (
    <section className="relative pb-10 md:pb-12 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
            >
              Let's Start Your <span className="text-goldDark">Journey</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light"
            >
              Take the first step toward world-class education and future-ready skills.
              Our team is ready to guide you personally.
            </motion.p>
          </div>

          {/* Main Card with Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="glass-panel rounded-3xl md:rounded-[48px] p-8 md:p-12 lg:p-16 shadow-2xl shadow-slate-200/30 border border-slate-200/60 bg-white/70 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Floating decorative icons */}
            <div className="absolute -top-8 -right-10 animate-float opacity-30 text-goldDark">
              <MessageSquare size={140} />
            </div>
            <div className="absolute -bottom-0 animate-float -left-0 opacity-30 text-goldDark rotate-12">
              <Send size={120} />
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative z-10 grid md:grid-cols-2 gap-7">
                {/* Left column */}
                <div className="space-y-7">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Mail size={16} /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Phone size={16} /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Right column - Message */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                    <MessageSquare size={16} /> Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={9}
                    placeholder="Tell us about your goals, program interest, or any questions..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/60 backdrop-blur-sm outline-none resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl
                      bg-gradient-to-r from-primary to-indigo-600 text-white font-medium text-lg
                      shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                      disabled:opacity-70 disabled:cursor-not-allowed
                    `}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-slate-600 max-w-md mx-auto">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Quick contact info */}
          <div className="mt-12 text-center text-slate-600">
            <p className="text-lg">
              Prefer a quick chat? Call us directly:{" "}
              <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}