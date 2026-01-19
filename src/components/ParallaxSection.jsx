"use client"

import { useEffect, useRef, useState } from "react"

export default function ParallaxSection({
  children,
  speed = 0.9,
  bgImage,
  className = "",
  contentClassName = "",
  overlay = true
}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // Only update if visible
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Calculate how far the section is from the center of the viewport
          const centerSection = rect.top + rect.height / 2
          const centerViewport = viewportHeight / 2
          const distanceFromCenter = centerSection - centerViewport

          setOffset(distanceFromCenter * speed)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <section
      ref={ref}
      className={`parallax-container ${className}`}
    >
      {bgImage && (
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: `translateY(${offset}px)`,
          }}
        >
          {overlay && <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />}
        </div>
      )}
      <div className={`parallax-content ${contentClassName}`}>
        {children}
      </div>
    </section>
  )
}
