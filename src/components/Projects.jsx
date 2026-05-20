import React from 'react';
import ProjectCard from './ProjectCard';

// Images
import denturaImg from '../assets/dentura1.png';
import mediImg from '../assets/meditrack.png';
import sherwinImg from '../assets/sherwin.png';
import essentialImg from '../assets/essential.png';

export default function Projects({ isDarkMode }) {
  const projectData = [
    {
      id: 1,
      title: 'Dentura',
      subtitle: 'Dental Clinic Booking Platform',
      description:
        'Dentura is a modern dental clinic website template with an integrated booking system designed to streamline appointment scheduling and improve patient experience.',
      tags: ['PHP', 'HTML', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/SherwinX1/Dentura',
      live: 'https://github.com/SherwinX1/Dentura',
      image: denturaImg,
    },

    {
      id: 2,
      title: 'Meditrack',
      subtitle: 'Medicine Tracking & Delivery App',
      description:
        'MediTrack is an innovative e-commerce application designed to make medicine management simple and reliable. It helps users track medication schedules and provides fast medicine delivery services.',
      tags: ['Flutter', 'JavaScript', 'Android Studio'],
      github: 'https://github.com/SherwinX1',
      live: 'https://github.com/SherwinX1',
      image: mediImg,
    },

    {
      id: 4,
      title: 'Essential Hub Cafe',
      subtitle: 'Client Coffee Shop Website',
      description:
        'Essential Hub Cafe is a modern coffee shop website template designed to provide an engaging online experience for coffee enthusiasts.',
      tags: ['React', 'Tailwind CSS'],
      github: 'https://github.com/SherwinX1',
      live: 'https://essential-cafe.vercel.app/',
      image: essentialImg,
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="h-1.5 w-16 bg-blue-500 mb-6 rounded-full" />

        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Featured Projects
        </h2>

        <p
          className={`max-w-2xl text-lg ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          A collection of applications I’ve built using modern technologies,
          focused on performance, clean UI, and user experience.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-10">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
}