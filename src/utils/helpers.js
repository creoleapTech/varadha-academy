// Utility function to debounce callbacks
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Utility to check if device is mobile
export function isMobile() {
  if (typeof window === "undefined") return false
  return window.innerWidth < 768
}

// Utility to format phone numbers
export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`
  }
  return phone
}

// Utility to scroll to section
export function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Utility to validate email
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
