import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinned,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from 'lucide-react';

export default function About({ isDarkMode }) {
  const socials = [
    { icon: <Github />, url: 'https://github.com/SherwinX1' },
    { icon: <Linkedin />, url: 'https://www.linkedin.com/in/sherwin-lopez-473092388/' },
    { icon: <Facebook />, url: 'https://www.facebook.com/weyn68/' },
    { icon: <Instagram />, url: 'https://www.instagram.com/serweynn/' },
  ];

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-28 text-center">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <div className="w-12 h-[2px] bg-blue-500" />
        <span className="uppercase tracking-[0.3em] text-sm text-blue-500 font-semibold">
          About
        </span>
        <div className="w-12 h-[2px] bg-blue-500" />
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`space-y-6 text-lg leading-relaxed ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}
      >
        <p>
          Passionate Full Stack Developer focused on building modern,
          responsive, and scalable web applications using React.js and
          contemporary backend technologies. Experienced in developing
          e-commerce platforms and web-based systems with strong attention
          to clean code, performance, and seamless user experience.
        </p>

        <p>
          A collaborative and fast-learning developer who enjoys solving
          real-world problems through efficient and high-quality web solutions.
        </p>
      </motion.div>

      {/* LOCATION + SOCIALS (SAME LINE) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-col md:flex-row items-center justify-between gap-10"
      >

        {/* LOCATION */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-3">
            Location
          </h4>

          <div className={`flex items-center gap-3 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <MapPinned className="w-5 h-5 text-blue-500" />
            <p className="text-lg font-medium">
              Pangasinan, Philippines
            </p>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">
            Socials
          </h4>

          <div className="flex gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition ${
                  isDarkMode
                    ? 'text-slate-400 hover:text-blue-400'
                    : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                {React.cloneElement(social.icon, {
                  className: 'w-7 h-7',
                })}
              </motion.a>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}