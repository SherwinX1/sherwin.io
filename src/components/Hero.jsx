import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Layers, Server, Sparkles, Figma } from 'lucide-react';

export default function Hero({ isDarkMode }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center justify-center gap-12 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        {/* Spacer for top margin */}
        <div className="mb-10" aria-hidden="true" />

        {/* Heading */}
        <h1 className="text-blue-500 text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          I'm Sherwin Lopez
        </h1>

        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
          Full Stack Developer
        </h2>

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-3"
          animate={{ x: [0, -12, 0] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' }}
        >
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'}`}>
            <Atom className="w-4 h-4" />
            React
          </div>
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'}`}>
            <Sparkles className="w-4 h-4" />
            Tailwind CSS
          </div>
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'}`}>
            <Layers className="w-4 h-4" />
            Full Stack
          </div>
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'}`}>
            <Server className="w-4 h-4" />
            Node.js
          </div>
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'}`}>
            <Figma className="w-4 h-4" />
            Figma
          </div>
        </motion.div>

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