import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-48 pb-24 overflow-hidden">
      {/* Subtle texture / depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 noise-texture opacity-[0.035]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-zinc-100 dark:bg-zinc-900/60 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Title */}
          <motion.h1
            variants={item}
            className="text-[20vw] md:text-[16vw] lg:text-[14rem] font-bold leading-[0.82] tracking-[-0.04em] text-zinc-900 dark:text-zinc-50 mb-12 md:mb-16"
          >
            <span className="block">NINA</span>
            <span className="block">NARDI</span>
          </motion.h1>

          {/* Description */}
          <motion.div variants={item} className="grid md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-light text-pretty">
                {t.hero.description}
              </p>
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={item}
            className="mt-20 md:mt-28 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
              ↓ {lang === 'pt' ? 'Role para explorar' : 'Scroll to explore'}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
