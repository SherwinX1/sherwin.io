import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const themeClasses = isDarkMode 
    ? "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100" 
    : "bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500/30 ${themeClasses}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <Hero isDarkMode={isDarkMode} />
      
      <About isDarkMode={isDarkMode} />
      
      <Testimonial isDarkMode={isDarkMode} />

      <Experience isDarkMode={isDarkMode} />

      <Projects isDarkMode={isDarkMode} />

      <Skills isDarkMode={isDarkMode} />

      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}