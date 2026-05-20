import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  House,
  User,
  Briefcase,
  Wrench,
  Mail,
  Sun,
  Moon,
  FileText,
  FolderKanban,
} from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navigate = useNavigate();
  const location = useLocation();

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

  const navItems = [
    { id: '/', icon: House },
    { id: '/about', icon: User },
    { id: '/experience', icon: Briefcase },
    { id: '/projects', icon: FolderKanban },
    { id: '/skills', icon: Wrench },
    { id: '/contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100,
      }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-3 w-full flex justify-center"
    >
      <div
        className={`flex items-center gap-1 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 max-w-fit
        ${
          isDarkMode
            ? 'bg-slate-900/85 border-slate-700/50'
            : 'bg-white/85 border-slate-200/60'
        }`}
      >
        {/* Nav Icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            const isActive = location.pathname === item.id;

            return (
              <button
                key={index}
                onClick={() => navigate(item.id)}
                className={`p-2 sm:p-3 rounded-xl transition-all duration-200 hover:scale-110
                ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                    ? 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className={`w-px h-6 sm:h-8 mx-1 ${
            isDarkMode ? 'bg-slate-700' : 'bg-slate-300'
          }`}
        />

        {/* Dark Mode */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 sm:p-3 rounded-xl transition-all duration-200 hover:scale-110
          ${
            isDarkMode
              ? 'text-yellow-400 hover:bg-slate-800'
              : 'text-blue-600 hover:bg-slate-100'
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>

        {/* Resume */}
        <a
          href="/Sherwin_Lopez_Resume.pdf"
          download
          className="p-2 sm:p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-110"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </motion.nav>
  );
}