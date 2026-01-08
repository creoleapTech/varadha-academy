import { Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "Founded",
      title: "In Honor of Shri K.S. Varadarajan",
      description: "Established with a vision to transform education through innovation",
    },
    {
      year: "Expanded",
      title: "Robotics & English Labs",
      description: "Launched comprehensive STEM and language programs across South India",
    },
    {
      year: "Launched",
      title: "Medical Admissions Consultancy",
      description: "Began guiding brilliant minds toward international medical education",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Commitment to the highest standards in education and service",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision driven by the needs and growth of our learners",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuous evolution blending heritage with modern solutions",
    },
  ]

  return (
    <div className="bg-light">
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">About Sri Varada Academy</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Rooted in heritage and driven by innovation, we empower schools and students to nurture confident,
            future-ready learners.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl border-2 border-primary">
              <h3 className="font-display font-bold text-3xl text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To transform classrooms with innovative educational solutions that inspire curiosity, creativity, and
                confidence in every learner. We blend timeless values with cutting-edge technology to deliver impactful
                academic excellence.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border-2 border-secondary">
              <h3 className="font-display font-bold text-3xl text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the catalyst for educational transformation across South India, empowering schools with
                world-class robotics, language, and counseling services that prepare students for global opportunities
                and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
                Founded in Honor of
                <br /> Shri K.S. Varadarajan
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Shri K.S. Varadarajan, the founder of Alpha Systems Coaching Centre, was a visionary educator who
                believed in the transformative power of quality education.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We carry forward his legacy by combining traditional educational values with modern innovation, ensuring
                that every student receives an education that inspires them to reach their fullest potential.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/respected-educator-with-students.jpg"
                alt="Founder's Legacy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-white mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < milestones.length - 1 && <div className="w-1 h-20 bg-gray-200 mt-4"></div>}
                </div>
                <div className="pb-8">
                  <p className="text-secondary font-semibold text-sm">{milestone.year}</p>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
