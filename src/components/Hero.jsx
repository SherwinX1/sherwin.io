import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ isDarkMode }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center justify-center gap-12 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for freelance & full-time roles
        </motion.div>

        {/* Heading */}
        <h1 className="text-blue-500 text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Full-Stack Developer
        </h1>

        {/* Subheading */}
        <h2 className={`text-xl md:text-2xl font-semibold mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          Building fast, scalable & beautiful web experiences
        </h2>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects" className="contents">
            <button className={`${isDarkMode ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-white'} px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl text-center w-full sm:w-auto`}>
              View Projects
            </button>
          </a>
          
          <a href="#contact" className="contents">
            <button className={`border ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'} px-8 py-4 rounded-full font-bold hover:border-blue-500 hover:text-blue-500 transition-all w-full sm:w-auto`}>
              Get In Touch
            </button>
          </a>
        </div>
      </motion.div>
    </main>
  );
}