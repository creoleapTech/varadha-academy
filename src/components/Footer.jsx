"use client"

import { Mail, Phone, Linkedin, XIcon, Instagram, MessageCircle, Facebook } from "lucide-react"
import { Link } from "@tanstack/react-router"


// Option 1: Clean & Minimal (most popular right now)
// const socialLinks = [
//   {
//     name: "X",
//     icon: X,
//     href: "https://x.com/srivaradaacademy",
//     color: "hover:text-black",
//   },
//   {
//     name: "Instagram",
//     icon: Instagram,
//     href: "https://instagram.com/srivaradaacademy",
//     color: "hover:text-pink-600",
//   },
//   {
//     name: "LinkedIn",
//     icon: Linkedin,
//     href: "https://linkedin.com/company/srivaradaacademy",
//     color: "hover:text-blue-700",
//   },
//   {
//     name: "Facebook",
//     icon: Facebook,
//     href: "https://facebook.com/srivaradaacademy",
//     color: "hover:text-blue-800",
//   },
//   {
//     name: "WhatsApp",
//     icon: MessageCircle, // or Send - both commonly used
//     href: "https://wa.me/919876543210",
//     color: "hover:text-green-600",
//   },
// ]
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 text-foreground pt-6 pb-4 relative overflow-hidden border-t border-slate-100">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/sva 3.png"
                alt="Sri Varada Academy"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 font-light leading-relaxed text-sm max-w-xs">
              Rooted in heritage and driven by innovation, Sri Varada Academy empowers schools to nurture confident, future-ready learners through transformative educational solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-6">
            <h4 className="font-black text-xs uppercase tracking-wider text-primary mb-6 opacity-80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-600 hover:text-primary text-sm font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column - now properly grouped */}
          <div className="lg:pt-6">
            <h4 className="font-black text-xs uppercase tracking-wider text-primary mb-6 opacity-80">
              Our Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/robotics"
                  className="text-gray-600 hover:text-primary text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/40 group-hover:bg-blue-500 transition-colors"></span>
                  Robotics & AI
                </Link>
              </li>
              <li>
                <Link
                  to="/services/medical"
                  className="text-gray-600 hover:text-primary text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/40 group-hover:bg-purple-500 transition-colors"></span>
                  Medical Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:pt-6">
            <h4 className="font-black text-xs uppercase tracking-wider text-primary mb-6 opacity-80">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium">+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">info@srivarada.com</span>
              </li>

              {/* Social Icons */}
              <li className="mt-6">
                {/* <div className="flex items-center gap-5 mt-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
        text-gray-500 transition-all duration-300
        hover:scale-110 hover:-rotate-6
        ${social.color}
      `}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon size={26} strokeWidth={1.8} />
                    </a>
                  ))}
                </div> */}

                <div className="px-3 flex space-x-3">
                  <a href="https://www.linkedin.com/company/creoleap/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-goldDark transition-colors"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="22" height="22" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg></a>
                  <a href="https://www.instagram.com/creoleap_technologies?igsh=dG5jOG1iYTFmYXBz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:text-goldDark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></a>
                  <a href="https://www.facebook.com/share/1A4a8Az6fb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-goldDark transition-colors"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path></svg></a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="hover:text-goldDark transition-colors"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path></svg></a>
                  <a href="https://x.com/CreoleapTech" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="hover:text-goldDark transition-colors"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--prime" width="16" height="16" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#iconifyReact12)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g><defs><clipPath id="iconifyReact12"><path fill="#fff" d="M0 0h14v14H0z"></path></clipPath></defs></g></svg></a></div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Sri Varada Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}