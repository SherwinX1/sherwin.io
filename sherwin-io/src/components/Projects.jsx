import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ isDarkMode }) {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack online store with payment integration and admin dashboard. Managed real-time inventory and user authentication.",
      tags: ["React", "Node.js", "MySQL", "Tailwind"],
      github: "https://github.com/SherwinX1",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    },
    {
      id: 2,
      title: "Management System",
      description: "Inventory and sales tracking system built for local businesses to automate bookkeeping and generate monthly reports.",
      tags: ["PHP", "Xampp", "Bootstrap"],
      github: "https://github.com/SherwinX1",
      image: "https://images.unsplash.com/photo-1454165833267-028cc21e7867?q=80&w=1000",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio with dark mode support and smooth Framer Motion animations.",
      tags: ["React", "Framer Motion", "Lucide React"],
      github: "https://github.com/SherwinX1",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    }
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