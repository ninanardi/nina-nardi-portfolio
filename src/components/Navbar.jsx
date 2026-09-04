import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollToId, smoothScrollTo } from '../utils/smoothScroll';

function ThemeIcon({ theme }) {
  return (
    <span className="relative inline-block w-[1em] h-[1em] align-middle">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={theme}
          initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === 'light' ? '☾' : '☀'}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Navbar({ lang, setLang, theme, setTheme, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const items = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    // Fora da home (ex.: página de case) a seção não existe no DOM:
    // muda o hash e deixa o App renderizar a home e rolar até ela.
    if (!document.getElementById(id)) {
      window.location.hash = href;
      return;
    }
    if (id === 'home') smoothScrollTo(0);
    else smoothScrollToId(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`border-b border-zinc-900 dark:border-zinc-100 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#fafaf9]/90 dark:bg-[#09090b]/90 backdrop-blur-md'
            : 'bg-[#fafaf9] dark:bg-[#09090b]'
        }`}
      >
        <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto h-14 md:h-16 flex items-stretch justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center text-lg font-bold tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 active:scale-[0.96] transition-transform"
          >
            NN.
          </a>

          <div className="hidden md:flex items-stretch">
            {items.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative flex items-center px-5 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-sm active:scale-[0.96] transition-[color,background-color,transform] ${
                  active === item.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              className="px-5 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 active:scale-[0.96] transition-[color,background-color,transform]"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
              className="px-5 border-l border-zinc-200 dark:border-zinc-800 font-mono text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 active:scale-[0.96] transition-[color,background-color,transform]"
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>

          <div className="flex md:hidden items-stretch">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              className="px-4 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-xs active:scale-[0.96] transition-transform"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
              className="px-4 border-l border-zinc-200 dark:border-zinc-800 font-mono text-sm active:scale-[0.96] transition-transform"
            >
              <ThemeIcon theme={theme} />
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="pl-4 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-base flex items-center justify-center active:scale-[0.96] transition-transform"
            >
              {open ? '×' : '≡'}
            </button>
          </div>
        </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
            className="md:hidden fixed inset-0 -z-10 backdrop-blur-[3px]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-[#fafaf9] dark:bg-[#09090b] border-b border-zinc-900 dark:border-zinc-100 flex flex-col"
          >
            {items.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { handleNavClick(e, item.href); setOpen(false); }}
                className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 last:border-0 flex items-center justify-between font-mono uppercase tracking-[0.05em] text-sm active:scale-[0.96] transition-transform"
              >
                <span className="flex items-center gap-3">
                  {item.name}
                </span>
                <span className="text-zinc-400">→</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
