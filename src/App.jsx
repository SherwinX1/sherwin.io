import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
    ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100'
    : 'bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900';

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500/30 ${themeClasses}`}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div className="min-h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Hero isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/experience" element={<Experience isDarkMode={isDarkMode} />} />
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
            <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
            <Route path="/testimonial" element={<Testimonial isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}