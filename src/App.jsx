import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from './utils/smoothScroll';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CaseStudy from './components/CaseStudy.jsx';

import { translations } from './translations.js';

export default function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem('nn-lang') || 'pt');
  const [theme, setThemeState] = useState(() => localStorage.getItem('nn-theme') || 'light');
  const [showTop, setShowTop] = useState(false);
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => {
      const next = window.location.hash;
      // Só a fronteira home <-> case merece transição; âncora dentro da
      // home continua sendo scroll normal.
      const crossesCase =
        route.startsWith('#/case/') !== next.startsWith('#/case/');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!crossesCase || reduced || !document.startViewTransition) {
        setRoute(next);
        return;
      }

      document.startViewTransition(() => {
        // flushSync porque o browser tira o snapshot novo assim que o
        // callback retorna — um setState assíncrono chegaria tarde demais.
        flushSync(() => setRoute(next));
        // Posiciona o scroll ainda dentro do callback, senão o snapshot
        // sai na posição antiga e a página "pula" no fim da transição.
        if (next.startsWith('#/case/')) {
          window.scrollTo(0, 0);
        } else {
          const id = next.replace('#', '');
          const el = id && !id.startsWith('/') ? document.getElementById(id) : null;
          if (el) el.scrollIntoView();
          else window.scrollTo(0, 0);
        }
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [route]);

  const setLang = (l) => { setLangState(l); localStorage.setItem('nn-lang', l); };
  const setTheme = (t) => { setThemeState(t); localStorage.setItem('nn-theme', t); };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = translations[lang];

  const caseSlug = route.startsWith('#/case/') ? route.slice('#/case/'.length) : null;
  const caseProject = caseSlug
    ? t.projects.items.find(p => p.slug === caseSlug && p.caseStudy)
    : null;

  // Ao voltar da página de case por âncora (#projects), o elemento ainda não
  // existe quando o hash muda — só depois do re-render. Rola manualmente.
  useEffect(() => {
    if (caseProject) return;
    const id = route.replace('#', '');
    if (!id || id.startsWith('/')) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [route, caseProject]);

  if (caseProject) {
    return (
      <div className="min-h-screen selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
        <main id="main">
          <CaseStudy project={caseProject} t={t} lang={lang} />
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
      <a href="#main" className="skip-link">
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      <main id="main" className="flex flex-col">
        <Hero t={t} lang={lang} />
        <div className="h-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
        <Projects t={t} lang={lang} />
        <div className="h-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
        <About t={t} lang={lang} />
        <div className="h-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
        <Contact t={t} lang={lang} />
      </main>

      <Footer lang={lang} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            /* hover e tap precisam vir do Framer: ele escreve opacity e
               transform inline, e estilo inline vence as classes hover:/active:. */
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => smoothScrollTo(0)}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg flex items-center justify-center font-mono uppercase tracking-[0.05em]"
            aria-label="Back to top"
          >
            <span className="text-lg">↑</span>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
