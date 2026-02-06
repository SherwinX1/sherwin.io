import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
      >
        Sherwin.io
      </motion.h1>
      <div className="flex items-center space-x-4 md:space-x-8 text-sm font-medium">
        <div className="hidden sm:flex space-x-8">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
        </div>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-yellow-400' : 'border-slate-200 hover:bg-slate-100 text-blue-600'}`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition shadow-lg shadow-blue-900/20">
          Resume
        </button>
      </div>
    </nav>
  );
}