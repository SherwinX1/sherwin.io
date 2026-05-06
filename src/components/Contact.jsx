import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';

export default function Contact({ isDarkMode }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init('bE-SIRTbwYFFso78z');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email || !form.message) {
      setStatus('Please enter your email and a brief message.');
      return;
    }

    setIsLoading(true);
    setStatus('Sending message...');

    const templateParams = {
      title: 'New Website Inquiry',
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send('service_prlex9p', 'template_42mvx8i', templateParams)
      .then(
        () => {
          setStatus('Message sent! I will reply as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS send error:', error);
          setStatus('Send failed. Please open the console for error details.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="h-1.5 w-16 bg-blue-500 mb-6 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4 max-w-2xl`}>
          Have a project idea or want to collaborate? Send a quick message and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className={`rounded-3xl border p-8 md:p-12 ${isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6 text-blue-500">
              <Mail className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Send a message</h3>
            </div>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>Use the form to reach me directly without leaving the site. If your device doesn&apos;t open an email app, you can also contact me at <strong>lopezsherwin.work@gmail.com</strong>.</p>
          </div>

          <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium">
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
              />
            </label>

            <label className="block text-sm font-medium">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
              />
            </label>

            <label className="block text-sm font-medium">
              Message
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or questions"
                className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isLoading ? 'Sending...' : 'Send message'}
                {!isLoading && <Send className="w-4 h-4" />}
              </button>
              {status && <p className="text-sm text-blue-400">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
