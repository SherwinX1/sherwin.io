import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, isDarkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl border p-6 md:p-8 transition-all duration-500 ${
        isDarkMode
          ? 'bg-[#0f172a]/70 border-slate-800 hover:border-blue-500/40'
          : 'bg-white border-slate-200 hover:border-blue-200 shadow-lg hover:shadow-2xl'
      }`}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start justify-between">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </span>{' '}
            –{' '}
            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
              {project.subtitle}
            </span>
          </h3>

          {/* Description */}
          <p
            className={`text-[15px] md:text-[16px] leading-relaxed max-w-3xl ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                  isDarkMode
                    ? 'bg-slate-800 text-blue-400'
                    : 'bg-blue-50 text-blue-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={project.github} target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold transition ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-900 hover:border-blue-500'
                    : 'border-slate-300 bg-white hover:border-blue-500'
                }`}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </motion.button>
            </a>

            <a href={project.live} target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full lg:w-[300px] flex justify-center">
          <motion.div
            whileHover={{
              rotate: -2,
              scale: 1.03,
            }}
            className="mt-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[220px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}