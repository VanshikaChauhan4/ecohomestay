import { createContext, useContext, useEffect, useState } from 'react';

/**
 * @typedef {'light'|'dark'} Theme
 */

const ThemeContext = createContext(null);

const STORAGE_KEY = 'vanamitra-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

/**
 * ThemeProvider — wraps the app to provide dark/light theme state.
 * Applies `data-theme="dark"|"light"` to the document root so CSS
 * custom properties cascade automatically. Persists choice to localStorage
 * and falls back to the user's OS preference on first load.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — access the current theme and toggle function.
 *
 * @returns {{ theme: Theme, setTheme: (t: Theme) => void, toggleTheme: () => void }}
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 * <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}
