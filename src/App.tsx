import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/Home/HomePage';
import { NewsList } from './pages/News/NewsList';
import { NewsPost } from './pages/News/NewsPost';
import { useTheme } from './hooks/useTheme';
import { AuthProvider } from './components/Auth/AuthContext';
import { SEO } from './components/SEO/SEO';

function App() {
  const { darkMode, setDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <AuthProvider>
      <Router>
        <SEO /> {/* This will apply default SEO settings */}
        <div className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
          <Navbar darkMode={darkMode} onThemeToggle={() => setDarkMode(!darkMode)} />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/news/:id" element={<NewsPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;