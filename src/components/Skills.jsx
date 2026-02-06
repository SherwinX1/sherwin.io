import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Terminal, Code2 } from 'lucide-react';

export default function Skills({ isDarkMode }) {
  const skills = [
    { name: "Frontend", icon: <Layout className="w-6 h-6" />, techs: ["HTML","CSS","Bootstrap","React", "Next.js", "Tailwind"] },
    { name: "Backend", icon: <Server className="w-6 h-6" />, techs: ["Node.js", "Xampp", "MySQL"] },
    { name: "Tools", icon: <Terminal className="w-6 h-6" />, techs: ["Git", "Github", "VS Code", "Figma", "Android Studio", "Adobe Premiere Pro"] },
    { name: "Core", icon: <Code2 className="w-6 h-6" />, techs: ["JavaScript", "Python"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          viewport={{ once: true }}
          className="h-1.5 w-16 bg-blue-500 mb-6 rounded-full"
        />
        <h2 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h2>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4`}>The tools and technologies I use to build applications.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }} 
            className={`p-8 border rounded-3xl transition-all group ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500 shadow-sm'}`}
          >
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.techs.map((tech) => (
                <span key={tech} className={`text-xs font-semibold px-3 py-1 rounded-full border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}