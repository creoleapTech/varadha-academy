"use client"

import { useEffect, useRef, useState } from "react"

export default function ParallaxSection({ children, speed = 0.5, className = "" }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollY = window.scrollY
        const elementTop = rect.top + scrollY

        if (scrollY > elementTop - window.innerHeight && scrollY < elementTop + rect.height) {
          setOffset((scrollY - elementTop) * speed)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
      className={`transition-transform duration-100 ${className}`}
    >
      {children}
    </div>
  )
}
