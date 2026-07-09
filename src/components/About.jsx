import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function About({ t, lang }) {
  const [hoveredTool, setHoveredTool] = useState(null);

  const tools = [
    { name: 'Figma' },
    { name: 'Pencil' },
    { name: 'Claude Code', glyph: 'C' },
    { name: 'GitHub' },
    { name: 'Adobe Illustrator', glyph: 'Ai' },
    { name: 'Adobe Photoshop', glyph: 'Ps' },
  ];

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  return (
    <section id="about" className="relative py-32 md:py-40 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950/40 overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 noise-texture opacity-[0.04] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="block font-mono uppercase tracking-[0.05em] text-xs text-zinc-400 mb-4">
            03 / {lang === 'pt' ? 'Sobre' : 'About'}
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.85]">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16 md:mb-24"
        >
          <motion.h3 variants={item} className="text-xs font-mono uppercase tracking-[0.05em] text-zinc-400 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            {lang === 'pt' ? 'Experiência' : 'Experience'}
          </motion.h3>
          <div className="flex flex-col">
            {t.about.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border-b border-zinc-200 dark:border-zinc-800 py-8 grid md:grid-cols-[160px_1fr_auto] gap-4 md:gap-16 group hover:bg-white dark:hover:bg-zinc-900/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
              >
                <span className="text-xs font-mono uppercase tracking-[0.05em] text-zinc-500 tabular-nums pt-1 whitespace-nowrap">
                  {exp.year}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-[0.05em] text-zinc-700 dark:text-zinc-300 mb-4">
                    {exp.company}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl text-pretty">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={item} className="flex items-baseline justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-mono uppercase tracking-[0.05em] text-zinc-400">
              {lang === 'pt' ? 'Ferramentas' : 'Tools'}
            </h3>
            <span className="text-xs font-mono uppercase tracking-[0.05em] text-zinc-400 tabular-nums">
            </span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
            {tools.map((tool) => (
              <motion.div key={tool.name} variants={item}>
                <ToolCard
                  tool={tool}
                  hoveredTool={hoveredTool}
                  onHover={setHoveredTool}
                  onLeave={() => setHoveredTool(null)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ToolCard({ tool, hoveredTool, onHover, onLeave }) {
  const isHovered = hoveredTool === tool.name;
  const letter = tool.glyph || tool.name.charAt(0);

  return (
    <div
      onMouseEnter={() => onHover(tool.name)}
      onMouseLeave={onLeave}
      className="relative bg-white dark:bg-[#09090b] aspect-square flex flex-col items-center justify-center p-4 cursor-pointer overflow-hidden"
    >
      {/* Slide-up fill */}
      <div
        className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 pointer-events-none origin-bottom"
        style={{
          transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center select-none">
        <div
          className={`w-11 h-11 mx-auto border flex items-center justify-center transition-colors duration-300 ${
            isHovered
              ? 'border-white/15 dark:border-zinc-900/15'
              : 'border-zinc-200 dark:border-zinc-800'
          }`}
        >
          <span
            className={`font-mono text-base transition-colors duration-300 ${
              isHovered
                ? 'text-white dark:text-zinc-900'
                : 'text-zinc-900 dark:text-zinc-100'
            }`}
          >
            {letter}
          </span>
        </div>
        <div
          className={`mt-3 text-[13px] font-medium tracking-tight transition-colors duration-300 ${
            isHovered
              ? 'text-white dark:text-zinc-900'
              : 'text-zinc-900 dark:text-zinc-100'
          }`}
        >
          {tool.name}
        </div>
      </div>
    </div>
  );
}
