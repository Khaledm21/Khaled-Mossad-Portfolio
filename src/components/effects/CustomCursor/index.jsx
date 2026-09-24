import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    document.documentElement.style.cursor = ''
  }, [])

  return null
}
