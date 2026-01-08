"use client"

import { useState, useEffect } from "react"

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)

  // Get from local storage then parse stored json or return initialValue
  const readValue = () => {
    if (typeof window === "undefined") {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(error)
      return initialValue
    }
  }

  const [isLoaded, setIsLoaded] = useState(false)

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    }
  }

  useEffect(() => {
    setStoredValue(readValue())
    setIsLoaded(true)
  }, [])

  return [storedValue, setValue, isLoaded]
}
