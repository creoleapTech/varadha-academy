"use client"

import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Robotics", to: "/services/robotics" },
    { label: "English Lab", to: "/services/english" },
    { label: "Medical Admissions", to: "/services/medical" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
<img src="/sva 3.png" alt="Logo" className="h-20 p-2" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#1e3a5f] hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#10b981] to-emerald-600 text-white font-medium text-sm hover:shadow-lg transition-shadow">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#1e3a5f] hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#10b981] to-emerald-600 text-white font-medium text-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
