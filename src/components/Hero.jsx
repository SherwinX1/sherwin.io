import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Layers, Server, Sparkles, Figma } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ isDarkMode }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center justify-center gap-12 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        {/* Spacer */}
        <div className="mb-10" aria-hidden="true" />

        {/* Heading */}
        <h1 className="text-blue-500 text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          I'm Sherwin Lopez
        </h1>

        <h2
          className={`text-3xl md:text-4xl font-extrabold mb-4 ${
            isDarkMode ? 'text-slate-100' : 'text-slate-900'
          }`}
        >
          Full Stack Developer
        </h2>

        {/* Tech badges */}
        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-3"
          animate={{ x: [0, -12, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 6,
            ease: 'easeInOut',
          }}
        >
          <Badge isDarkMode={isDarkMode} icon={<Atom className="w-4 h-4" />} text="React" />
          <Badge isDarkMode={isDarkMode} icon={<Sparkles className="w-4 h-4" />} text="Tailwind CSS" />
          <Badge isDarkMode={isDarkMode} icon={<Layers className="w-4 h-4" />} text="Full Stack" />
          <Badge isDarkMode={isDarkMode} icon={<Server className="w-4 h-4" />} text="Node.js" />
          <Badge isDarkMode={isDarkMode} icon={<Figma className="w-4 h-4" />} text="Figma" />
        </motion.div>

        {/* Subheading */}
        <h2
          className={`text-xl md:text-2xl font-semibold mb-6 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Building fast, scalable & beautiful web experiences
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/projects">
            <button
              className={`px-8 py-4 rounded-full font-bold transition-all shadow-xl w-full sm:w-auto ${
                isDarkMode
                  ? 'bg-slate-100 text-slate-900 hover:bg-blue-500 hover:text-white'
                  : 'bg-slate-900 text-white hover:bg-blue-500'
              }`}
            >
              View Projects
            </button>
          </Link>

          <Link to="/contact">
            <button
              className={`px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto border ${
                isDarkMode
                  ? 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-500'
                  : 'border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-500'
              }`}
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

/* Small reusable badge component */
function Badge({ isDarkMode, icon, text }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
        isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'
      }`}
    >
      {icon}
      {text}
    </div>
  );
}