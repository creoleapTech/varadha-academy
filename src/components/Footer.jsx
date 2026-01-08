import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Terminal } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function Footer() {
  return (
    <footer className="bg-white text-foreground pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-pulse-glow">
                <Terminal size={24} className="text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter">VARADA <span className="text-primary italic">PRO</span></span>
            </div>
            <p className="text-gray-500 font-light leading-relaxed text-base italic border-l-2 border-primary/10 pl-4">
              "Architecting the next generation of leaders through cutting-edge robotics and academic intelligence."
            </p>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary mb-8 opacity-60">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-all text-sm font-bold flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary mb-8 opacity-60">Systems</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services/robotics" className="text-gray-500 hover:text-primary transition-all text-sm font-bold flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Robotics & AI
                </Link>
              </li>
              <li>
                <Link to="/services/medical" className="text-gray-500 hover:text-primary transition-all text-sm font-bold flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Bio-Med Entry
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary mb-8 opacity-60">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 text-gray-500 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold">ops@srivarada.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Footer */}
        <div className="border-t border-blue-50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-xs font-mono tracking-widest">
            &copy; 2025 VARADA_SYSTEMS // v1.2.0_LIGHT_STABLE
          </p>
          <div className="flex space-x-8">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-primary transition-all transform hover:scale-125 hover:rotate-6">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
