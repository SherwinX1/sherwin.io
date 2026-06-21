import React from 'react';
import { motion } from 'framer-motion';

export default function Experience({ isDarkMode }) {
  const experiences = [
{
  company: 'Essential Hub Company Inc.',
  role: 'Full Stack Developer Intern',
  date: 'May 2025 – Sept 2025 · Remote',

  description:
    'Worked as a Full Stack Developer Intern contributing to the development of an e-commerce web application while collaborating closely with the development team on frontend functionality, backend integration, and overall user experience.',

  skills: [
    {
      title: 'Team Leadership',
      text: 'guided the team through technical challenges and assisted with project architecture decisions',
    },

    {
      title: 'Full Stack Development',
      text: 'collaborated on the end-to-end development of the Essential e-commerce platform',
    },

    {
      title: 'React.js',
      text: 'translated UI/UX wireframes into responsive and high-performance frontend interfaces',
    },

    {
      title: 'Debugging & Optimization',
      text: 'identified frontend bottlenecks and improved application performance and stability',
    },
  ],

  footer:
    'Strengthened practical experience in collaborative software development, problem-solving, frontend engineering, and scalable web application development.',
}
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      {/* Heading */}
      <div className="mb-16">
        <h2
          className={`text-4xl md:text-5xl font-black ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Experience
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl border p-8 md:p-10 transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-900/40 border-slate-800'
                : 'bg-white border-slate-200 shadow-lg'
            }`}
          >
            {/* Company */}
            <div className="mb-8">
              <h3 className={`text-2xl md:text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {exp.company}
              </h3>
            </div>

            {/* Description */}
            <p
              className={`text-lg leading-relaxed mb-10 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {exp.description}
            </p>

            {/* Skills */}
            <div className="mb-10">
              <h4
                className={`font-semibold mb-5 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Actively learning and applying:
              </h4>

              <ul className="space-y-4">
                {exp.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-4 ${
                      isDarkMode
                        ? 'text-slate-400'
                        : 'text-slate-700'
                    }`}
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-500" />

                    <p className="leading-relaxed">
                      <span className="font-bold text-blue-500">
                        {skill.title}
                      </span>{' '}
                      — {skill.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <p
              className={`leading-relaxed mb-8 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {exp.footer}
            </p>

            {/* Role */}
            <div>
              <h4
                className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {exp.role}
              </h4>

              <p
                className={`${
                  isDarkMode ? 'text-slate-500' : 'text-slate-500'
                }`}
              >
                {exp.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}