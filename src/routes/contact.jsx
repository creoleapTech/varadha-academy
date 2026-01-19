"use client"

import { useState, useEffect } from "react"
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, Star, Globe, Sparkles,
  Building, Users, Award, MessageSquare, Calendar, ArrowUpRight, Navigation,
  ChevronDown, ChevronUp, Headphones, FileText, Video, Zap, Shield,
  TrendingUp, HelpCircle, ExternalLink, Check
} from "lucide-react"
import ParallaxSection from "../components/ParallaxSection"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: ""
  })

  const [status, setStatus] = useState("idle")
  const [errors, setErrors] = useState({})
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  useEffect(() => {
    setIsMapLoaded(true)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = () => {
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", company: "" })
        setStatus("idle")
      }, 3000)
    }, 1500)
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const locations = [
    {
      city: "Chennai",
      country: "India",
      address: "123 Anna Salai, T. Nagar",
      postal: "Chennai, TN 600017",
      phone: "+91 44 1234 5678",
      email: "chennai@srivarada.com",
      hours: "Mon-Sat: 9AM-6PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.06891495!3d13.0381209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890",
      coordinates: "13.0827°N, 80.2707°E"
    }
  ]

  const faqItems = [
    {
      question: "What is the typical response time for inquiries?",
      answer: "We typically respond to all inquiries within 2-4 business hours during our working days. For urgent matters, please use our emergency contact number for immediate assistance."
    },
    {
      question: "Do you offer customized solutions for different institutions?",
      answer: "Yes, we specialize in creating tailored educational solutions. Our team works closely with each institution to understand their specific needs and design customized programs that align with their curriculum and goals."
    },
    {
      question: "What support services are included with your solutions?",
      answer: "Our solutions include comprehensive support: 24/7 technical assistance, regular software updates, teacher training programs, curriculum integration support, and quarterly progress reviews."
    },
    {
      question: "How long does implementation usually take?",
      answer: "Implementation timelines vary based on the scope. Standard installations take 2-4 weeks, while comprehensive solutions may require 6-8 weeks. We provide a detailed implementation roadmap during our initial consultation."
    },
    {
      question: "Do you provide training for faculty members?",
      answer: "Absolutely. We offer extensive training programs including on-site workshops, online training modules, and ongoing support sessions to ensure faculty members are fully equipped to use our solutions effectively."
    },
    {
      question: "What are the payment options available?",
      answer: "We offer flexible payment options including annual subscriptions, quarterly payments, and customized payment plans. We also have special packages for educational institutions and bulk deployments."
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Support",
      detail: "+91 98765 43210",
      action: "Start Call",
      color: "from-blue-500 to-cyan-500",
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@srivarada.com",
      action: "Send Email",
      color: "from-purple-500 to-pink-500",
      description: "Response within 4 business hours"
    },
    {
      icon: Headphones,
      title: "Live Chat",
      detail: "Instant Support",
      action: "Chat Now",
      color: "from-green-500 to-emerald-500",
      description: "Real-time assistance available"
    }
  ]

  const features = [
    { icon: Shield, text: "Secure & Encrypted Communication", description: "Enterprise-grade security for all your data" },
    { icon: Zap, text: "Quick Response Guarantee", description: "Response within 4 business hours" },
    { icon: TrendingUp, text: "Progressive Solutions", description: "Continuous updates and improvements" },
    { icon: Users, text: "Dedicated Account Manager", description: "Personal support for your institution" }
  ]

  return (
    <div className="">
      {/* Modern Hero Section */}
      <ParallaxSection
      // bgImage=""
      // speed={0.3}
      // className="min-h-[90vh] !h-[100%] backdrop-blur-[10px] flex items-center justify-center"
      // overlay={false}
      >
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-200 to-black/5">
          {/* <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div> */}

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/5 backdrop-blur-lg rounded-full mb-8 border border-white/20">
                  <Sparkles className="w-4 h-4 text-goldDark" />
                  <span className="text-sm font-semibold text-primary">Connect With Our Experts</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6 leading-tight">
                  Transform Education
                  <span className=" text-goldDark block">
                    Together
                  </span>
                </h1>

                <p className="text-xl text-primary mb-10 leading-relaxed max-w-2xl">
                  Partner with us to revolutionize learning experiences. Our team of experts is ready to help you implement cutting-edge educational solutions.
                </p>
              </div>

              {/* left side */}
              <div className="lg:relative">
                <DotLottieReact
                  className="lg:w-[150%] scale-150 md:scale-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-1/2 lg:translate-x-1/2"
                  src="https://lottie.host/9e8659cd-0ae0-4f2e-9365-2005d55ccf6c/TvCUuUy5MI.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </section>

      </ParallaxSection>

      {/* Contact Methods */}
      <section className="py-16 relative bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred channel for seamless communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform transition-transform group-hover:scale-105 group-hover:-translate-y-2" />
                  <div className="relative p-6 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <div className="text-lg font-semibold text-gray-900 mb-4">{method.detail}</div>
                    <button className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {method.action}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-gray-900 mb-3">Send Your Message</h2>
                  <p className="text-gray-600">Complete the form below and our team will contact you within 24 hours</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-indigo-500 focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:border-indigo-500 focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Company/School</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your institution"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="robotics">Robotics Lab Solutions</option>
                      <option value="english">English Language Lab</option>
                      <option value="medical">Medical Admissions</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="demo">Request Product Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your requirements and how we can help..."
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.message ? 'border-red-300' : 'border-gray-200'} focus:border-indigo-500 focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading" || status === "success"}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all ${status === "success"
                      ? "bg-gradient-to-r from-emerald-500 to-green-600"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{feature.text}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column - FAQ & Locations */}
            <div className="space-y-8">
              {/* FAQ Section */}
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-3">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {expandedFaq === index && (
                        <div className="px-5 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations Section */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>
                </div>

                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLocation(index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedLocation === index
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{location.city}</h4>
                        {selectedLocation === index && (
                          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{location.address}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {location.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {location.hours}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Map Preview */}
                <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
                  <div className="aspect-video bg-gray-100 relative">
                    {isMapLoaded ? (
                      <iframe
                        src={locations[selectedLocation].mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="absolute inset-0"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-3 border-gray-300 border-t-indigo-600 rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-gray-900 mb-4">General Inquiries</h4>
                  <div className="space-y-2">
                    <a href="mailto:hello@srivarada.com" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      hello@srivarada.com
                    </a>
                    <a href="tel:+919876543210" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-4">Business Hours</h4>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    Monday - Saturday: 9:00 AM - 6:00 PM IST
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <h4 className="font-bold text-gray-900 mb-4">Emergency Support</h4>
                  <a href="tel:+911800123456" className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700">
                    <Phone className="w-4 h-4" />
                    +91 1800 123 456
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

      </section>



    </div>
  )
}