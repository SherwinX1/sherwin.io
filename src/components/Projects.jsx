import React from 'react';
import ProjectCard from './ProjectCard';

// 1. Import your local images here
// Make sure the path matches your actual folder structure
import denturaImg from '../assets/dentura1.png';
import mediImg from '../assets/meditrack.png';
import sherwinImg from '../assets/sherwin.png';


export default function Projects({ isDarkMode }) {
  const projectData = [
    {
      id: 1,
      title: "Dentura",
      description: "Dentura is a modern dental clinic website template with an integrated booking system designed to streamline appointment scheduling and improve patient experience.",
      tags: ["PHP", "HTML", "MySQL", "Bootstrap"],
      github: "https://github.com/SherwinX1/Dentura",
      image: denturaImg, // Use the imported variable
    },

    {
      id: 2,
      title: "Meditrack",
      description: "MediTrack is an innovative e-commerce application designed to make medicine management simple and reliable. It helps users track the exact times they need to take their medications, ensuring they never miss a dose. Designed with convenience in mind, it is especially helpful for those who struggle to manage their medication schedules, including the elderly. MediTrack also features fast delivery, bringing medicines straight to your doorstep within a day, so users can focus on their health without worrying about running out of essential medications. ",
      tags: ["Flutter", "Javascript", "Android Studio"],
      github: "https://github.com/SherwinX1",
      image: mediImg, // Use the imported variable
    },

    {
      id: 3,
      title: "sherwin.io",
      description: "sherwin.io is a personal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and experience in a modern, responsive design.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/SherwinX1/sherwin.io",
      image: sherwinImg, // Use the imported variable
    },

  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="h-1.5 w-16 bg-blue-500 mb-6 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4 max-w-2xl`}>
          A collection of applications I've built using modern web technologies. Each project represents a specific challenge I've solved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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