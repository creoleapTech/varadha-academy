import { Stethoscope, Globe, CheckCircle, FileText } from "lucide-react"

export default function MedicalPage() {
  const services = [
    {
      icon: FileText,
      title: "Application Guidance",
      description: "Expert assistance with university selection and application documents",
    },
    {
      icon: Stethoscope,
      title: "Entrance Exam Prep",
      description: "Comprehensive preparation for international medical entrance examinations",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access to partner universities across USA, UK, Australia, and Europe",
    },
    {
      icon: CheckCircle,
      title: "Full Support",
      description: "End-to-end guidance from application to admission and beyond",
    },
  ]

  return (
    <div className="bg-light">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-6xl md:text-7xl mb-6">Medical Admissions</h1>
          <p className="text-2xl text-green-100 max-w-2xl mx-auto mb-8">
            Your pathway to pursuing medicine at world-class international universities
          </p>
          <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:shadow-2xl transition-all">
            Book Consultation
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">Our Success Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Students Admitted" },
              { number: "50+", label: "Partner Universities" },
              { number: "95%", label: "Success Rate" },
              { number: "15+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="bg-blue-900 p-6 rounded-xl">
                <h3 className="font-display font-bold text-4xl text-secondary mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
