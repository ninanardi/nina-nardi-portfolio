import React from 'react';

export default function Footer({ lang }) {

  return (
    <footer className="relative px-6 md:px-12 pt-8 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-zinc-900 dark:border-zinc-100 mb-8" />
        <div className="grid md:grid-cols-3 gap-8 text-xs font-mono uppercase tracking-[0.05em] text-zinc-500">
          <div>
            <span>Porto Alegre, BR</span>
          </div>
          <div className="flex md:justify-center gap-8">
            <a href="https://www.linkedin.com/in/ninanardi" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a>
            <a href="https://github.com/ninanardi" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
            <a href="mailto:ninanardiwork@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Email</a>
          </div>
          <div className="md:text-right md:pr-20">
            <span className="text-sm leading-none align-middle">©</span> 2026 Nina Nardi
          </div>
        </div>
      </div>
    </footer>
  );
}
