import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function Hero({ isDarkMode }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h1 className="text-blue-500 text-3xl md:text-6xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Full-Stack Developer
        </h1>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed mb-10`}>
          Hi I'm <span className="text-blue-500 font-semibold">Sherwin Lopez</span>. An Aspiring Full Stack Developer based in Philippines.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#projects" className="contents">
          <button className={`${isDarkMode ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-white'} px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl text-center w-full sm:w-auto`}>
            View Projects
          </button>
          </a>
          <a 
            href="https://www.linkedin.com/in/sherwin-lopez-473092388/" 
            className="contents"
          >
            <button className={`border ${isDarkMode ? 'border-slate-700' : 'border-slate-300'} px-8 py-4 rounded-full font-bold hover:border-blue-500 transition-all`}>
              Get In Touch
            </button>
          </a>
          
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-start"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className={`relative w-72 h-72 md:w-96 md:h-96 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-2xl overflow-hidden border shadow-2xl`}>
            <img 
              src={profileImg} 
              alt="Sherwin Lopez" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
}