import React from 'react';

import { 
  Code2, Database, Globe, Layout, Server, Cpu, Layers, Terminal, 
  User2, MapPinned, Github, Linkedin, Facebook, Instagram 
} from 'lucide-react';

export default function App() {
  const skills = [
    { name: "Frontend", icon: <Layout className="w-6 h-6" />, techs: ["HTML","CSS","Bootstrap","React", "Next.js", "Tailwind"] },
    { name: "Backend", icon: <Server className="w-6 h-6" />, techs: ["Node.js", "Xampp", "MySQL"] },
    { name: "Tools", icon: <Terminal className="w-6 h-6" />, techs: ["Git", "Github", "VS Code", "Figma" ] },
    { name: "Core", icon: <Code2 className="w-6 h-6" />, techs: [ "JavaScript", "Python"] },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Sherwin.io
        </h1>
        <div className="hidden sm:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition shadow-lg shadow-blue-900/20">
            Resume
          </button>
        </div>
      </nav>

      {/* Intro Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className=" text-blue-500 text-3xl md:text-6xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Full-Stack Developer
          </h1>
         <p className="max-w-xl mx-auto lg:mx-0 text-slate-400 text-lg leading-relaxed mb-10">
            Hi I'm <span className="text-blue-500">Sherwin Lopez</span>. A passionate Full Stack Developer based in Pangasinan, Philippines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all shadow-xl">
              View Projects
            </button>
            <button className="border border-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-400 transition-all">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="https://via.placeholder.com/600" 
                alt="Sherwin Lopez" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        </div>
      </main>

<section id="about" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
  <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-12">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <User2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        
        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
          <p>
            Full Stack Developer specializing in building web and app applications, inspired by a childhood fascination with technology.
             A fast learner and collaborative team player, passionate about creating modern, user-friendly solutions, 
             and eager to join a company where I can contribute, gain hands-on experience, and expand my knowledge while tackling
              real-world challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-blue-400 font-bold mb-3 text-1xl tracking-widest">Location</h4>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPinned className="w-5 h-5 text-blue-400" />
                <p>Pangasinan, Philippines</p>
              </div>
            </div>

            <div>
              <h4 className="text-blue-400 font-bold mb-3 text-1xl tracking-widest">Socials</h4>
              <div className="flex gap-4">
                <a href="https://github.com/SherwinX1" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/sherwin-lopez-473092388" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/weyn68" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/serweynn" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="h-1 w-20 bg-blue-500 mb-4 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h2>
          <p className="text-slate-400 mt-4">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-8 bg-slate-800/50 border border-slate-700 rounded-3xl hover:border-blue-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <span key={tech} className="text-xs font-semibold bg-slate-900 px-3 py-1 rounded-full text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}