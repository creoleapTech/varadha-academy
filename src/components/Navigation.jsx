"use client"

import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const mainLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "#", isDropdown: true },
    { label: "Contact", to: "/contact" },
  ]

  const serviceItems = [
    { label: "Robotics & AI", to: "/services/robotics" },
    { label: "Medical Admissions", to: "/services/medical" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/sva 3.png"
              alt="Varada Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.isDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.isDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={link.to}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium text-gray-700
                    hover:text-indigo-700 hover:bg-indigo-50/70 transition-colors flex items-center gap-1
                    ${link.isDropdown ? "cursor-default" : ""}
                  `}
                  onClick={(e) => link.isDropdown && e.preventDefault()}
                >
                  {link.label}
                  {link.isDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.isDropdown && isServicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-5">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Get Started Button */}
            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top">
          <div className="px-4 py-6 space-y-4">
            {mainLinks.map((link) => (
              <div key={link.label}>
                {link.isDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left px-4 py-3 text-base font-medium text-gray-800 hover:text-indigo-700 flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isServicesOpen && (
                      <div className="ml-4 mt-1 space-y-2 border-l-2 border-indigo-100 pl-4">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block py-2.5 text-base text-gray-700 hover:text-indigo-700 transition-colors"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-indigo-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="block mt-6 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium text-center shadow-md hover:shadow-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}