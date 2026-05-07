import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from './utils/smoothScroll';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import { translations } from './translations.js';

export default function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem('nn-lang') || 'pt');
  const [theme, setThemeState] = useState(() => localStorage.getItem('nn-theme') || 'light');
  const [showTop, setShowTop] = useState(false);

  const setLang = (l) => { setLangState(l); localStorage.setItem('nn-lang', l); };
  const setTheme = (t) => { setThemeState(t); localStorage.setItem('nn-theme', t); };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
<Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      <main className="flex flex-col">
        <Hero t={t} lang={lang} />
        <Projects t={t} lang={lang} />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" aria-hidden="true" />
        <About t={t} lang={lang} />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" aria-hidden="true" />
        <Contact t={t} lang={lang} />
      </main>

      <Footer lang={lang} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => smoothScrollTo(0)}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="Back to top"
          >
            <span className="text-lg">↑</span>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
