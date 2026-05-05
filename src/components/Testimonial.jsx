import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonial({ isDarkMode }) {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="h-1.5 w-16 bg-blue-500 mb-6 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold">What people say</h2>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4 max-w-2xl`}>
          One trusted perspective from a peer who has seen my work and collaboration firsthand.
        </p>
      </div>

      <div className={`rounded-3xl border p-10 ${isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
        <div className="flex items-start gap-4">
          <div className="rounded-3xl bg-blue-500/10 p-4 text-blue-500">
            <Quote className="w-6 h-6" />
          </div>
          <div>
            <p className={`${isDarkMode ? 'text-slate-100' : 'text-slate-800'} text-lg leading-relaxed`}>“Sherwin delivered a polished, user-friendly app faster than expected, and he broke down every decision clearly so the whole team could stay aligned.”</p>
            <p className={`mt-6 font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>Charles Dervin Cabo — Classmate and project collaborator</p>
          </div>
        </div>
      </div>
    </section>
  );
}
