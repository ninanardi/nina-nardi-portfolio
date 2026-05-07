import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollToId, smoothScrollTo } from '../utils/smoothScroll';

export default function Navbar({ lang, setLang, theme, setTheme, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (id === 'home') smoothScrollTo(0);
    else smoothScrollToId(id);
  };

  return (
    <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl transition-all duration-500 ${scrolled ? 'scale-[0.98]' : ''}`}>
      <div className="glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-base font-bold tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5">
          NN.
        </a>

        <div className="hidden md:flex items-center gap-7">
          {items.map(item => (
            <a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="text-xs font-medium tracking-tight hover:opacity-60 transition-opacity">
              {item.name}
            </a>
          ))}
          <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
          <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="text-[10px] font-mono uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:scale-105 transition-transform"
            aria-label="Toggle theme"
          >
            <span className="text-xs">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="text-[10px] font-mono uppercase tracking-[0.2em]">
            {lang.toUpperCase()}
          </button>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
            <span className="text-xs">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
          <button onClick={() => setOpen(!open)} className="w-8 h-8 flex items-center justify-center">
            <span className="text-lg">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-3 glass rounded-2xl p-4 flex flex-col md:hidden"
          >
            {items.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { handleNavClick(e, item.href); setOpen(false); }}
                className="text-base py-3 border-b border-zinc-200 dark:border-zinc-800 last:border-0 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-zinc-400">→</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
