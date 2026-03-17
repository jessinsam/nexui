'use client'

import * as React from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'dark' | 'light'
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'nexui-theme',
  attribute = 'class',
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    } catch {
      return defaultTheme
    }
  })

  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light'>('dark')

  React.useEffect(() => {
    const root = document.documentElement

    function applyTheme(t: Theme) {
      const isDark =
        t === 'dark' ||
        (t === 'system' &&
          enableSystem &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)

      const resolved: 'dark' | 'light' = isDark ? 'dark' : 'light'
      setResolvedTheme(resolved)

      if (disableTransitionOnChange) {
        root.style.setProperty('transition', 'none')
        requestAnimationFrame(() => root.style.removeProperty('transition'))
      }

      if (attribute === 'class') {
        root.classList.remove('dark', 'light')
        root.classList.add(resolved)
      } else {
        root.setAttribute(attribute, resolved)
      }
    }

    applyTheme(theme)

    if (theme === 'system' && enableSystem) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => applyTheme('system')
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [theme, attribute, enableSystem, disableTransitionOnChange])

  const setTheme = React.useCallback(
    (t: Theme) => {
      try {
        localStorage.setItem(storageKey, t)
      } catch {}
      setThemeState(t)
    },
    [storageKey]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
