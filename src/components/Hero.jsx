import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollToId } from '../utils/smoothScroll';

export default function Hero({ t, lang }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-64px)] mt-14 md:mt-16 flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 noise-texture opacity-[0.035]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div
            variants={item}
            className="flex items-baseline justify-between gap-4 mb-6 md:mb-8 font-mono uppercase tracking-[0.05em] text-xs md:text-sm"
          >
            <span className="text-zinc-900 dark:text-zinc-100">Product Designer</span>
            <span className="text-zinc-400">Porto Alegre, BR</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-[22vw] md:text-[18vw] lg:text-[16rem] font-black leading-[0.8] tracking-[-0.04em] text-zinc-900 dark:text-zinc-50 mb-10 md:mb-14 -ml-[0.03em]"
          >
            <span className="block">NINA</span>
            <span className="block">NARDI</span>
          </motion.h1>

          {/* Description + CTAs */}
          <motion.div
            variants={item}
            className="border-t border-zinc-200 dark:border-zinc-800 pt-8 md:pt-10 grid md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 md:font-light text-pretty">
                {t.hero.description}
              </p>
              <div className="mt-8 flex items-center gap-6">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); smoothScrollToId('projects'); }}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-mono uppercase tracking-[0.05em] text-sm hover:opacity-85 active:scale-[0.96] transition-[opacity,transform]"
              >
                {lang === 'pt' ? 'Ver projetos' : 'View work'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); smoothScrollToId('contact'); }}
                className="font-mono uppercase tracking-[0.05em] text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 active:scale-[0.96] transition-[color,background-color,transform] inline-block"
              >
                {lang === 'pt' ? 'Contato' : 'Contact'}
              </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
