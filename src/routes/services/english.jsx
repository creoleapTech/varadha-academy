import { BookOpen, Globe, Mic2, Target } from "lucide-react"

export default function EnglishPage() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Grammar, vocabulary, writing, and reading comprehension in integrated modules",
    },
    {
      icon: Mic2,
      title: "Speaking Confidence",
      description: "Master pronunciation, fluency, and presentation skills for real-world scenarios",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Aligned with international English proficiency standards and certifications",
    },
    {
      icon: Target,
      title: "Targeted Goals",
      description: "Customized learning paths for IELTS, TOEFL, competitive exams, and fluency",
    },
  ]

  return (
    <div className="bg-light">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-6xl md:text-7xl mb-6">English Language Lab</h1>
          <p className="text-2xl text-pink-100 max-w-2xl mx-auto mb-8">
            Empower your students with confident communication skills and global English proficiency
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-2xl transition-all">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">Our English Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-900 p-8 rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-4">General English</h3>
              <p className="text-blue-100 mb-4">
                Build foundational and advanced English skills for everyday communication and academic excellence.
              </p>
              <ul className="space-y-2 text-blue-50">
                <li>✓ Speaking & Listening</li>
                <li>✓ Reading & Writing</li>
                <li>✓ Grammar Mastery</li>
                <li>✓ Vocabulary Enhancement</li>
              </ul>
            </div>
            <div className="bg-blue-900 p-8 rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-4">Exam Preparation</h3>
              <p className="text-blue-100 mb-4">
                Specialized coaching for IELTS, TOEFL, and other competitive English examinations.
              </p>
              <ul className="space-y-2 text-blue-50">
                <li>✓ IELTS Training</li>
                <li>✓ TOEFL Preparation</li>
                <li>✓ Competitive Exams</li>
                <li>✓ Mock Tests & Feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
