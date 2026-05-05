import React from 'react';

export default function CaseStudy({ isDarkMode }) {
  return (
    <section id="case-study" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="h-1.5 w-16 bg-blue-500 mb-6 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold">Project Case Study</h2>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4 max-w-2xl`}>
          A detailed breakdown of how I solved a real client-style challenge with focus on clarity, reliability, and user experience.
        </p>
      </div>

      <div className={`grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start rounded-3xl border p-8 md:p-12 ${isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
        <div>
          <h3 className="text-2xl font-bold mb-6">Dentura</h3>
          <div className="space-y-6 text-sm leading-7">
            <div>
              <h4 className="text-blue-500 font-semibold mb-2">Problem</h4>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Dental clinics needed a modern website that supported online appointments, showcased services clearly, and built trust with patients through clean design and easy navigation.
              </p>
            </div>

            <div>
              <h4 className="text-blue-500 font-semibold mb-2">Solution</h4>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                I built a responsive web experience with streamlined booking flows, detailed service sections, and strong visual hierarchy. The design keeps patients focused on key actions like scheduling consultations and exploring care offerings.
              </p>
            </div>

            <div>
              <h4 className="text-blue-500 font-semibold mb-2">Result</h4>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                The project delivered a polished website template that feels professional and approachable, making it easier for clinics to convert visitors into patients and build credibility online.
              </p>
            </div>
          </div>
        </div>

        <aside className={`rounded-3xl p-8 ${isDarkMode ? 'bg-slate-950/80 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
          <h4 className="text-blue-500 font-semibold mb-4">Tech stack</h4>
          <ul className={`space-y-3 text-sm leading-7 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            <li>• PHP & MySQL for booking and backend logic</li>
            <li>• Bootstrap for fast responsive layout</li>
            <li>• Clean UI composition for user trust</li>
            <li>• Form validation and appointment flow focus</li>
          </ul>

          <a
            href="https://github.com/SherwinX1/Dentura"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            View the code
          </a>
        </aside>
      </div>
    </section>
  );
}
