import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, isDarkMode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`group rounded-3xl overflow-hidden border transition-all duration-300 ${
        isDarkMode ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-lg hover:shadow-2xl'
      }`}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay with direct link */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold shadow-xl hover:scale-110 transition"
          >
            <Github className="w-5 h-5" /> Github
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        
        <p className={`text-sm mb-5 line-clamp-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
              isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}