import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ t, lang }) {
  const links = [
    {
      label: 'Email',
      value: 'ninanardiwork@gmail.com',
      href: 'mailto:ninanardiwork@gmail.com',
      action: lang === 'pt' ? 'Escrever' : 'Write',
    },
    {
      label: 'LinkedIn',
      value: '/in/ninanardi',
      href: 'https://www.linkedin.com/in/ninanardi',
      action: lang === 'pt' ? 'Conectar' : 'Connect',
    },
    {
      label: 'GitHub',
      value: '@ninanardi',
      href: 'https://github.com/ninanardi',
      action: lang === 'pt' ? 'Seguir' : 'Follow',
    }
  ];

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left: title */}
          <div className="lg:col-span-7">
            <motion.span variants={item} className="block font-mono uppercase tracking-[0.05em] text-xs text-zinc-400 mb-4">
              04 / {lang === 'pt' ? 'Contato' : 'Contact'}
            </motion.span>
            <motion.h2 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.85] mb-10 whitespace-pre-line">
              {t.contact.title}
            </motion.h2>
            <motion.p variants={item} className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-xl font-light text-pretty">
              {t.contact.subtitle}
            </motion.p>

            {t.contact.locationLabel && (
              <motion.div variants={item} className="flex flex-col gap-1 text-xs font-mono uppercase tracking-[0.05em] text-zinc-500">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400">{t.contact.locationLabel}: </span>
                  <span className="text-zinc-700 dark:text-zinc-300">{t.contact.location}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: direct links */}
          <div className="lg:col-span-5">
            <motion.div variants={item} className="flex items-baseline justify-between mb-6 pb-4 border-b border-zinc-900 dark:border-zinc-100">
              <span className="text-xs font-mono uppercase tracking-[0.05em]">
                {lang === 'pt' ? 'Links diretos' : 'Direct links'}
              </span>
            </motion.div>

            <div className="flex flex-col">
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  variants={item}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group relative border-b border-zinc-200 dark:border-zinc-800 py-6 grid grid-cols-[1fr_auto] items-center gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <span className="text-lg md:text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                    {l.value}
                  </span>
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.05em] text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    <span className="hidden md:inline">{l.action}</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
