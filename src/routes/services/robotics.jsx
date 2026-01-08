import { Zap, Lightbulb, Users, Award } from "lucide-react"

export default function RoboticsPage() {
  const features = [
    {
      icon: Zap,
      title: "Hands-On Learning",
      description: "Students build and program real robots, learning through experimentation",
    },
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      description: "Develop problem-solving skills through STEM challenges and competitions",
    },
    {
      icon: Users,
      title: "Collaborative Teams",
      description: "Work in teams to foster communication and leadership abilities",
    },
    {
      icon: Award,
      title: "Competition Ready",
      description: "Prepare for national and international robotics competitions",
    },
  ]

  return (
    <div className="bg-light">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-6xl md:text-7xl mb-6">Robotics Lab</h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
            Where innovation meets hands-on learning to build tomorrow's engineers and problem-solvers
          </p>
          <button className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:shadow-2xl transition-all">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-lg gradient-accent text-white flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">Our Robotics Curriculum</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Beginner", "Intermediate", "Advanced"].map((level, index) => (
              <div key={index} className="bg-blue-900 p-8 rounded-xl">
                <h3 className="font-display font-bold text-2xl mb-4">{level}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Robotics Fundamentals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Programming Basics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Project-Based Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Team Competitions
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
