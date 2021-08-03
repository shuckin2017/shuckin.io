import { useState, useEffect } from 'react'

export default function useBrowserTheme() {
  const getMql = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

  const getBrowserTheme = () => {
    const mql = getMql()
    return mql && mql.matches ? 'dark' : 'light'
  }
  
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (theme === null) {
      setTheme(getBrowserTheme())
    }
  }, [theme, setTheme])

  return theme
}