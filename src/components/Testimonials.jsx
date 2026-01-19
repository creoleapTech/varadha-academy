"use client"

import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isHovering])

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      school: "DPS, Bangalore",
      content: "The interactive learning platform has completely transformed how my child approaches education. The engaging content makes learning addictive!",
      rating: 5,
      avatarColor: "from-blue-500 to-cyan-400",
    },
    {
      name: "Rajesh Kumar",
      role: "Principal",
      school: "St. Mary's Academy",
      content: "This platform has revolutionized our curriculum delivery. Student engagement has increased by 70% since implementation.",
      rating: 5,
      avatarColor: "from-emerald-500 to-teal-400",
    },
    {
      name: "Ananya Patel",
      role: "Student",
      school: "Modern High School",
      content: "Learning has never been this fun! The gamified lessons and interactive modules keep me motivated every day.",
      rating: 5,
      avatarColor: "from-violet-500 to-purple-400",
    },
    {
      name: "Dr. Samuel Chen",
      role: "Education Director",
      school: "Global Learning Institute",
      content: "An exceptional blend of pedagogy and technology. This is the future of education, available today.",
      rating: 5,
      avatarColor: "from-amber-500 to-orange-400",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="md:py-24 py-10 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-100/20 to-purple-100/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating education icons */}
        <BookOpen className="absolute top-5 left-10 text-blue-100/40 w-16 h-16 animate-float" />
        <GraduationCap className="absolute top-36 md:top-10 right-0 text-cyan-100/40 w-20 h-20 animate-float delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center md:mb-5">
          <div className="inline-flex place-items-start md:items-center md:justify-center md:gap-3 gap-0 md:mb-6">
            <div className="!w-12 h-12  rounded-2xl bg-gradient-to-tr from-primary via-accent to-secondary flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" fill="white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-tr from-goldDark to-goldDark ">Educators</span> & Students
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Join thousands of educational institutions transforming learning experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Statistics */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-gray-100 shadow-lg">
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact in Numbers</h3> */}

              <div className="grid grid-cols-2 gap-6 ">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">95%</div>
                  <div className="text-sm font-semibold text-gray-700">Student Engagement</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-2">4.9/5</div>
                  <div className="text-sm font-semibold text-gray-700">Average Rating</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500 mb-2">500+</div>
                  <div className="text-sm font-semibold text-gray-700">Schools Partnered</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 mb-2">40%</div>
                  <div className="text-sm font-semibold text-gray-700">Learning Improvement</div>
                </div>
              </div>
            </div>

            {/* <div className="glass-card p-8 rounded-3xl border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Educators Love Us</h3>
              <ul className="space-y-4">
                {[
                  "Interactive learning modules",
                  "Real-time progress tracking",
                  "Curriculum-aligned content",
                  "Easy classroom integration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Right side - Testimonials */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="glass-card md:p-10 p-5 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden group">
              {/* Background decorative elements */}
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full"></div>
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-full"></div>

              <Quote className="absolute top-6 right-6 text-blue-100/20 group-hover:text-blue-100/30 transition-colors" size={100} />

              <div className="relative z-10">
                <div className="flex items-center justify-between md:mb-8 mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="text-amber-500 fill-amber-500 drop-shadow-sm animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 flex items-center justify-center hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 flex items-center justify-center hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-900 font-medium md:mb-10 mb-2 leading-relaxed bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
                  "{testimonials[activeIndex].content}"
                </blockquote>

                <div className="flex md:items-center items-start gap-6 md:pt-5 pt-2 border-t border-gray-100">
                  <div className={`md:w-20 md:h-20 h-16 w-16 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].avatarColor} flex items-center justify-center text-white font-black text-3xl shadow-xl`}>
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="md:flex items-center justify-between">
                      <div>
                        <p className="font-bold text-xl text-gray-900">{testimonials[activeIndex].name}</p>
                        <p className="text-gray-600 md:mt-1">{testimonials[activeIndex].role}</p>
                      </div>
                      <div className="md:text-right">
                        <div className="inline-flex items-center gap-2 px-4 md:py-2 py-1 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                          <GraduationCap className="!w-4 !h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-700">{testimonials[activeIndex].school}</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      {/* <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(activeIndex + 1) * (100 / testimonials.length)}%` }}
                        ></div>
                      </div> */}
                      {/* <div className="flex justify-between mt-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`text-xs font-medium transition-all ${index === activeIndex ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner logos */}
            {/* <div className="mt-10 grid grid-cols-4 gap-4">
              {["DPS", "St. Mary's", "Modern High", "GLI"].map((logo, index) => (
                <div
                  key={index}
                  className="h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-lg">{logo}</div>
                    <div className="text-xs text-gray-500 mt-1">Partner School</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="lg:mt-20 md:mt-16 mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center md:gap-12 gap-2 md:p-8 p-4 bg-gradient-to-r from-purple-100/50 to-violet-200/50 rounded-3xl border border-blue-100 shadow-lg">
            <div className="md:text-left text-center">
              <h3 className="text-2xl font-bold text-gray-900">Ready to transform your institution?</h3>
              <p className="text-gray-600 md:mt-2">Join thousands of schools already enhancing their learning experience</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-primary  to-accent text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Book a Demo
              </button>
              {/* <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                View Case Studies
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}