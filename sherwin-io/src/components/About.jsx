import React from 'react';
import { motion } from 'framer-motion';
import { User2, MapPinned, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function About({ isDarkMode }) {
  const socials = [
    { icon: <Github />, url: "https://github.com/SherwinX1" },
    { icon: <Linkedin />, url: "https://linkedin.com" },
    { icon: <Facebook />, url: "https://facebook.com" },
    { icon: <Instagram />, url: "https://instagram.com" }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white border-slate-200 shadow-sm'} border rounded-3xl p-8 md:p-12`}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <User2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} space-y-4 text-lg leading-relaxed`}>
              <p>
                Full Stack Developer specializing in building web and app applications, inspired by a childhood fascination with technology. A fast learner and collaborative team player, passionate about creating modern, user-friendly solutions, and eager to join a company where I can contribute, gain hands-on experience, and expand my knowledge while tackling real-world challenges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <h4 className="text-blue-500 font-bold mb-3 text-sm uppercase tracking-widest">Location</h4>
                  <div className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    <MapPinned className="w-5 h-5 text-blue-500" />
                    <p>Pangasinan, Philippines</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <h4 className="text-blue-500 font-bold mb-3 text-sm uppercase tracking-widest">Socials</h4>
                  <div className="flex gap-4">
                    {socials.map((social, i) => (
                      <a 
                        key={i} 
                        href={social.url} 
                        className={`p-2 border rounded-lg transition-all ${isDarkMode ? 'bg-slate-900 border-slate-700 hover:border-blue-500 text-slate-300' : 'bg-slate-100 border-slate-200 hover:border-blue-500 text-slate-700'} hover:text-blue-500`}
                      >
                        {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}