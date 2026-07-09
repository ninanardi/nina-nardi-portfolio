import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollToId, smoothScrollTo } from '../utils/smoothScroll';

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
    { name: t.nav.home, href: '#home', id: 'home', index: '01' },
    { name: t.nav.projects, href: '#projects', id: 'projects', index: '02' },
    { name: t.nav.about, href: '#about', id: 'about', index: '03' },
    { name: t.nav.contact, href: '#contact', id: 'contact', index: '04' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
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
            className="flex items-center text-lg font-bold tracking-[-0.03em] text-zinc-900 dark:text-zinc-50"
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
                className={`relative flex items-center gap-2 px-5 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-sm transition-colors ${
                  active === item.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <span className="text-[9px] opacity-50">{item.index}</span>
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              className="px-5 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
              className="px-5 border-l border-zinc-200 dark:border-zinc-800 font-mono text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors"
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>

          <div className="flex md:hidden items-stretch">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              className="px-4 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-xs"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
              className="px-4 border-l border-zinc-200 dark:border-zinc-800 font-mono text-sm"
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="pl-4 border-l border-zinc-200 dark:border-zinc-800 font-mono uppercase tracking-[0.05em] text-base flex items-center justify-center"
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
                className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 last:border-0 flex items-center justify-between font-mono uppercase tracking-[0.05em] text-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400">{item.index}</span>
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
