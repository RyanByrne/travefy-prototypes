import { useState, useEffect } from 'react'

/**
 * Like useState, but persists to localStorage.
 * Useful for keeping prototype state across page refreshes during testing.
 */
export function useLocalState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
