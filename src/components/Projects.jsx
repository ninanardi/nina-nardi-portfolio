import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export default function Projects({ t, lang }) {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { damping: 22, stiffness: 220 });
  const springY = useSpring(rawY, { damping: 22, stiffness: 220 });

  const selectedProject = t.projects.items.find(p => p.id === selectedId);
  const hoveredProject = t.projects.items.find(p => p.id === hoveredId);

  const handleMouseMove = useCallback((e) => {
    rawX.set(e.clientX + 28);
    rawY.set(e.clientY - 96);
  }, [rawX, rawY]);

  // Pré-carrega E pré-decodifica as imagens de hover assim que a seção monta.
  // Sem o decode(), o navegador só baixa: o jank vem do decode síncrono no
  // momento do hover, especialmente em imagens visualmente densas.
  useEffect(() => {
    t.projects.items.forEach(p => {
      if (p.imageHover) {
        const img = new Image();
        img.src = p.imageHover;
        if (img.decode) img.decode().catch(() => {});
      }
    });
  }, [t.projects.items]);

  return (
    <section id="projects" className="relative py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6"
        >
          <div>
            <span className="block font-mono uppercase tracking-[0.05em] text-xs text-zinc-400 mb-4">
              02 / {lang === 'pt' ? 'Projetos' : 'Projects'}
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.85] whitespace-pre-line">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs font-mono uppercase tracking-[0.05em] text-xs leading-relaxed whitespace-pre-line">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Desktop: editorial list (lg+ only — hover previews need a pointer) */}
        <div
          className="hidden lg:block"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="border-t border-zinc-200 dark:border-zinc-800">
            {t.projects.items.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-zinc-200 dark:border-zinc-800"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`${project.title.replace('\n', ' ')} — ${lang === 'pt' ? 'ver detalhes' : 'view details'}`}
                  onClick={() => setSelectedId(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedId(project.id);
                    }
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  className="group relative cursor-pointer py-10 lg:py-12 flex items-center gap-6 lg:gap-10"
                  style={{
                    opacity: hoveredId && hoveredId !== project.id ? 0.3 : 1,
                    transition: 'opacity 0.35s ease',
                  }}
                >
                  {/* Index */}
                  <span className="shrink-0 font-mono text-4xl lg:text-5xl font-medium tabular-nums text-transparent self-start leading-none [-webkit-text-stroke:1px_#a1a1aa] dark:[-webkit-text-stroke:1px_#52525b]">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-bold uppercase tracking-[-0.02em] leading-[1.05] text-zinc-900 dark:text-zinc-50 lg:max-w-[55%] lg:basis-[55%] whitespace-pre-line"
                    style={{
                      fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                      transform: hoveredId === project.id ? 'translateX(6px)' : 'translateX(0)',
                      transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="hidden lg:flex flex-col items-end ml-auto shrink-0 gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono uppercase tracking-[0.05em] text-xs text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <span className="shrink-0 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M2.5 13.5L13.5 2.5M13.5 2.5H5.5M13.5 2.5V10.5"
                        stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: card stack */}
        <motion.div
          className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-8 md:gap-y-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {t.projects.items.map((project, i) => (
            <MobileCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </motion.div>

      </div>

      {/* Cursor-following image preview */}
      <AnimatePresence>
        {hoveredId && hoveredProject && (
          <motion.div
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.88, rotate: -1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.92, rotate: 1 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 pointer-events-none z-50 w-56 lg:w-72 aspect-[4/3] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
          >
            <img
              src={hoveredProject.imageHover || hoveredProject.image}
              alt=""
              referrerPolicy="no-referrer"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedId(null)}
            lang={lang}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function MobileCard({ project, index, onClick }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex items-center justify-between border-t border-zinc-900 dark:border-zinc-100 pt-3 mb-4 font-mono uppercase tracking-[0.05em] text-xs text-zinc-400">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>↗</span>
      </div>
      <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="flex items-start gap-4">
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-[-0.02em] text-zinc-900 dark:text-zinc-50 mb-3 whitespace-pre-line">
            {project.title}
          </h3>
          <div className="flex flex-col gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono uppercase tracking-[0.05em] text-xs text-zinc-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose, lang }) {
  const closeRef = React.useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title.replace('\n', ' ')}
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl bg-white dark:bg-[#09090b] overflow-hidden shadow-2xl flex flex-col h-[100dvh] md:h-[85vh]"
      >
        {/* Header bar */}
        <div className="shrink-0 flex items-stretch justify-between border-b border-zinc-200 dark:border-zinc-800">
          <span className="flex items-center px-6 md:px-8 font-mono uppercase tracking-[0.05em] text-xs text-zinc-400">
            {String(project.id).padStart(2, '0')} / {lang === 'pt' ? 'Projeto' : 'Project'}
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-l border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors"
            aria-label={lang === 'pt' ? 'Fechar' : 'Close'}
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>

        <div className="flex-1 min-h-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] h-[35dvh] md:h-[40vh] lg:h-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 shrink-0 lg:shrink lg:border-r border-b lg:border-b-0 border-zinc-200 dark:border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-[40%] flex-1 lg:flex-none min-h-0 overflow-y-auto custom-scrollbar px-6 md:px-8 pt-6 md:pt-8 pb-8">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[-0.02em] leading-[1.1] mb-5">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-mono uppercase tracking-[0.05em]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-light space-y-4">
              {project.description.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
