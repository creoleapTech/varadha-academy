"use client"

import { useState, useEffect, useRef } from "react"

export default function LazyImage({ src, alt, className = "", placeholder = true }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState(placeholder ? "/placeholder.svg" : src)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [src])

  return (
    <img
      ref={ref}
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-75"}`}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  )
}
