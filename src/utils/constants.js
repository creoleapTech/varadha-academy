export const NAVIGATION_LINKS = [
  { label: "Home", to: "/" },
  { label: "Robotics", to: "/services/robotics" },
  { label: "English Lab", to: "/services/english" },
  { label: "Medical Admissions", to: "/services/medical" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

export const COLORS = {
  primary: "#1e3a5f",
  secondary: "#d4a574",
  accent: "#10b981",
  dark: "#0f172a",
  light: "#f8fafc",
}

export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "info@srivarada.com",
  location: "South India",
  businessHours: "9 AM - 6 PM IST, Mon-Fri",
}

export const SERVICES = [
  {
    id: "robotics",
    title: "Robotics Lab",
    description: "Cutting-edge robotics programs that develop critical thinking and hands-on problem-solving skills.",
    path: "/services/robotics",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "english",
    title: "English Language Lab",
    description: "Comprehensive English programs that build confident communicators ready for global opportunities.",
    path: "/services/english",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "medical",
    title: "Medical Admissions",
    description: "Expert consultancy guiding brilliant minds through international medical education pathways.",
    path: "/services/medical",
    color: "from-green-500 to-emerald-500",
  },
]
