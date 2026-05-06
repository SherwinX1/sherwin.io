import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -16 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      {/* 
        The Floating Container:
        - rounded-2xl: Matches the softer rectangular corners in image_2a4919.png
        - shadow-xl: Gives it that "lifted" appearance
        - max-w-7xl: Keeps it aligned with your content width
      */}
      <div 
        className={`w-full max-w-7xl flex justify-between items-center px-8 py-4 transition-all duration-300 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}
          ${isDarkMode 
            ? 'bg-slate-900/80 border border-slate-700/50 shadow-2xl' 
            : 'bg-white/80 border border-slate-200/60 shadow-xl'} 
          backdrop-blur-md rounded-2xl`}
      >
        {/* Your Original Logo - Unchanged */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Sherwin
        </motion.h1>

        <div className="flex items-center space-x-4 md:space-x-8 text-sm font-medium">
          <div className={`hidden sm:flex space-x-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border transition-all ${
                isDarkMode 
                  ? 'border-slate-700 hover:bg-slate-800 text-yellow-400' 
                  : 'border-slate-200 hover:bg-slate-100 text-blue-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume Button: rounded-xl to match the new container style */}
            <a 
              href="/Sherwin_Lopez_Resume.pdf"
              download="Sherwin_Lopez_Resume.pdf"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition shadow-lg shadow-blue-900/20 active:scale-95"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}