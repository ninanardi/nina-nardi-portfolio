import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CreatusTokens from './CreatusTokens';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function CaseStudy({ project, t, lang }) {
  const cs = project.caseStudy;
  const items = t.projects.items;
  const idx = items.findIndex(p => p.id === project.id);
  const next = items[(idx + 1) % items.length];

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = `${project.title.replace('\n', ' ')} — Nina Nardi`;
    return () => { document.title = prevTitle; };
  }, [project]);

  const meta = [
    { k: lang === 'pt' ? 'Cliente' : 'Client', v: cs.client },
    { k: lang === 'pt' ? 'Ano' : 'Year', v: cs.year },
    { k: lang === 'pt' ? 'Papel' : 'Role', v: cs.role },
    { k: lang === 'pt' ? 'Setor' : 'Sector', v: cs.sector },
  ];

  return (
    <article className="pt-14 md:pt-16">

      {/* Breadcrumb / back */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between font-mono uppercase tracking-[0.05em] text-xs text-zinc-400">
          <a
            href="#projects"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <span aria-hidden="true">←</span>
            {cs.backToProjects}
          </a>
          <span>{String(project.id).padStart(2, '0')} / {cs.eyebrow}</span>
        </div>
      </div>

      {/* Hero */}
      <header className="px-6 md:px-12 pt-14 md:pt-20 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-10 md:mb-12">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.1] whitespace-pre-line mb-5 md:mb-6"
              >
                {project.title}
              </motion.h1>

              {cs.headline && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl md:text-2xl font-light tracking-[-0.02em] leading-[1.2] text-zinc-900 dark:text-zinc-100"
                >
                  {cs.headline}
                </motion.p>
              )}
            </div>

            {/* Disclaimer — aligned with the title */}
            {cs.disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="lg:col-span-5 lg:mt-2 border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 md:pl-5 text-xs md:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-light self-start"
              >
                {cs.disclaimer}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-light space-y-4 mb-12 md:mb-16"
          >
            {cs.intro.split('\n').map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </motion.div>

          {/* Meta grid */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-200 dark:border-zinc-800"
          >
            {meta.map(({ k, v }) => (
              <div key={k} className="border-r border-b border-zinc-200 dark:border-zinc-800 px-4 md:px-6 py-4 md:py-5">
                <dt className="font-mono uppercase tracking-[0.05em] text-[10px] text-zinc-400 mb-1.5">{k}</dt>
                <dd className="text-sm md:text-base text-zinc-900 dark:text-zinc-100">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </header>

      {/* Cover image */}
      {!cs.hideCover && (
      <motion.div {...fadeUp} className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {cs.coverComponent === 'creatus-tokens' ? (
            <CreatusTokens lang={lang} />
          ) : (
            <img
              src={cs.coverImage || project.image}
              alt={project.title.replace('\n', ' ')}
              referrerPolicy="no-referrer"
              className="w-full h-auto [filter:drop-shadow(0_20px_35px_rgba(24,24,27,0.22))] dark:[filter:drop-shadow(0_20px_35px_rgba(0,0,0,0.55))]"
            />
          )}
          {cs.coverCaption && (
            <p className="mt-4 font-mono text-xs text-zinc-400 leading-relaxed">
              {cs.coverCaption}
            </p>
          )}
        </div>
      </motion.div>
      )}

      {/* Sections */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
          {cs.sections.map((section, i) => (
            <motion.section key={section.title} {...fadeUp} className="border-t border-zinc-200 dark:border-zinc-800 pt-10 md:pt-12">
              <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-3xl md:text-4xl font-medium tabular-nums text-transparent leading-none [-webkit-text-stroke:1px_#a1a1aa] dark:[-webkit-text-stroke:1px_#52525b]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl md:text-2xl font-medium tracking-[-0.025em] leading-[1.15]">
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-7 md:col-start-6 text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-light space-y-5">
                  {section.body.split('\n').map((para, j) => (
                    <p key={j}>
                      {para.split(/(\*\*.*?\*\*)/g).map((chunk, k) =>
                        chunk.startsWith('**') && chunk.endsWith('**') ? (
                          <strong key={k} className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {chunk.slice(2, -2)}
                          </strong>
                        ) : (
                          chunk
                        )
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {section.images && section.images.length > 0 && (
                <div className="mt-10 md:mt-14 flex flex-col gap-10 md:gap-14">
                  {section.images.map(({ src, caption }) => (
                    <figure key={src}>
                      <img
                        src={src}
                        alt={caption || ''}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-auto [filter:drop-shadow(0_20px_35px_rgba(24,24,27,0.22))] dark:[filter:drop-shadow(0_20px_35px_rgba(0,0,0,0.55))]"
                      />
                      {caption && (
                        <figcaption className="mt-4 font-mono text-xs text-zinc-400 leading-relaxed">
                          {caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              {/* Annotated screen — notes beside the image, presentation-style */}
              {section.annotated && (
                <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col">
                    {section.annotated.notes.map(({ title, body }, n) => (
                      <div
                        key={title}
                        className="relative border-l border-zinc-200 dark:border-zinc-800 pl-5 md:pl-6 pb-10 last:pb-0"
                      >
                        <span className="absolute -left-[5px] top-1 w-[9px] h-[9px] bg-white dark:bg-zinc-950 border border-zinc-400 dark:border-zinc-500 rounded-full" aria-hidden="true" />
                        <span className="block font-mono text-[10px] uppercase tracking-[0.05em] text-zinc-400 mb-1.5">
                          {String(n + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-sm md:text-base font-bold tracking-[-0.01em] mb-2">
                          {title}
                        </h3>
                        <p className="text-xs md:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-light">
                          {body}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="lg:col-span-8">
                    <img
                      src={section.annotated.src}
                      alt={section.annotated.alt || ''}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-auto [filter:drop-shadow(0_20px_35px_rgba(24,24,27,0.22))] dark:[filter:drop-shadow(0_20px_35px_rgba(0,0,0,0.55))]"
                    />
                  </div>
                </div>
              )}
            </motion.section>
          ))}

          {/* Results */}
          {cs.results && (
            <motion.section {...fadeUp} className="border-t border-zinc-200 dark:border-zinc-800 pt-10 md:pt-12">
              <span className="block font-mono uppercase tracking-[0.05em] text-xs text-zinc-400 mb-8 md:mb-10">
                {cs.results.title}
              </span>
              <div className="grid md:grid-cols-3 border-t border-l border-zinc-200 dark:border-zinc-800">
                {cs.results.items.map(({ value, label }) => (
                  <div key={label} className="border-r border-b border-zinc-200 dark:border-zinc-800 px-6 py-8 md:py-10">
                    <span className="block text-4xl md:text-5xl font-bold tracking-[-0.04em] mb-3">{value}</span>
                    <span className="font-mono uppercase tracking-[0.05em] text-xs text-zinc-500 leading-relaxed">{label}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-6 md:px-12">
        <a
          href={next.slug ? `#/case/${next.slug}` : '#projects'}
          className="group block max-w-7xl mx-auto py-16 md:py-20"
        >
          <span className="block font-mono uppercase tracking-[0.05em] text-xs text-zinc-400 mb-4">
            {cs.nextLabel}
          </span>
          <span className="flex items-center justify-between gap-6">
            <span className="text-3xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05] whitespace-pre-line group-hover:translate-x-1.5 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
              {next.title}
            </span>
            <span className="shrink-0 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M2.5 13.5L13.5 2.5M13.5 2.5H5.5M13.5 2.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </article>
  );
}
