'use client'

import { useTheme } from 'next-themes'
import { FaRegMoon } from 'react-icons/fa'
import { MdOutlineWbSunny } from 'react-icons/md'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaRegMoon /> : <MdOutlineWbSunny />}
    </button>
  )
}