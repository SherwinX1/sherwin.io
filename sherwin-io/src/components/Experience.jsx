import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Experience({ isDarkMode }) {
  const skillExperience = [
    { name: "HTML / CSS", years: 5, percentage: 95 },
    { name: "JavaScript", years: 2, percentage: 60 },
    { name: "React, Tailwind, Bootstrap", years: 2, percentage: 70 },
    { name: "Xampp, MySQL", years: 4, percentage: 85 },
    { name: "Python", years: 1, percentage: 30 },
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${isDarkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200 shadow-xl'} border rounded-3xl p-8 md:p-12`}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">Skill Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {skillExperience.map((skill, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-lg font-bold">{skill.name}</span>
                  <span className="ml-3 text-sm text-blue-500 font-medium">{skill.years} Years</span>
                </div>
                <span className={`${isDarkMode ? 'text-slate-500' : 'text-slate-400'} text-sm font-mono`}>{skill.percentage}%</span>
              </div>
              <div className={`h-3 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: `${skill.percentage}%` }} 
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "anticipate" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}