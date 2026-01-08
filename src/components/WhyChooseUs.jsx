import { CheckCircle2, Award, Users, Globe } from "lucide-react"

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: Award,
      title: "Heritage",
      description: "Rooted in legacy."
    },
    {
      icon: Users,
      title: "Adaptive",
      description: "Personalized journeys."
    },
    {
      icon: Globe,
      title: "Global",
      description: "World-class standards."
    }
  ]

  return (
    <section className="py-20 bg-black bg-mesh overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-[40px] flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-black text-4xl md:text-5xl text-white leading-tight tracking-tighter">
              Why Choose <br />
              <span className="text-primary text-glow-blue">Varada?</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              We merge tradition with high-speed innovation to create an environment where brilliance thrives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (Compact) */}
          <div className="lg:w-1/2 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/C:/Users/HP/.gemini/antigravity/brain/c016702d-5fae-4ef9-844e-e11311de040e/why_choose_us_team_1767592147772.png"
                alt="Our Team"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-4 -right-4 glass-panel p-4 rounded-2xl border-white/20 animate-float">
              <div className="text-center">
                <div className="text-2xl font-black text-white">15+</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Years Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
