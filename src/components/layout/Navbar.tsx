import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

interface NavbarProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ darkMode, onThemeToggle }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/news"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              News
            </Link>
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}