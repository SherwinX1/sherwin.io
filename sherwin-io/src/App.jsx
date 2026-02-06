import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactFAB from './components/ContactFAB';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const themeClasses = isDarkMode 
    ? "bg-slate-900 text-slate-100" 
    : "bg-slate-50 text-slate-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500/30 ${themeClasses}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <Hero isDarkMode={isDarkMode} />
      
      <About isDarkMode={isDarkMode} />
      
      <Experience isDarkMode={isDarkMode} />

      <Projects isDarkMode={isDarkMode} />
      
      <Skills isDarkMode={isDarkMode} />
      
      {/* Optional: Add a Footer section here later */}
      <ContactFAB isDarkMode={isDarkMode} />
    </div>
  );
}