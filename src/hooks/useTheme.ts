import { useState, useEffect } from 'react';

export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for system preference first
    if (typeof window !== 'undefined') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme ? JSON.parse(savedTheme) : systemPrefersDark;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Add transition class to body for smooth color changes
    document.body.classList.add('transition-colors', 'duration-300');
    
    // Update theme
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#111827'; // gray-900
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { darkMode, setDarkMode };
}