'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaRegMoon } from 'react-icons/fa'
import { MdOutlineWbSunny } from 'react-icons/md'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className="w-8 h-8" aria-hidden="true" disabled />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaRegMoon /> : <MdOutlineWbSunny />}
    </button>
  )
}