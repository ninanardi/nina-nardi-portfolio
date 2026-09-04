import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollToId } from '../utils/smoothScroll';

/* Splits "text with **keywords**" into word tokens, flagging emphasized ones. */
function tokenize(headline) {
  const tokens = headline.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).flatMap((chunk) => {
    const key = chunk.startsWith('**') && chunk.endsWith('**');
    const text = key ? chunk.slice(2, -2) : chunk;
    return text.split(/\s+/).filter(Boolean).map((word) => ({ word, key }));
  });
  /* Punctuation left stranded by the split rejoins the word it belongs to. */
  return tokens.reduce((acc, token) => {
    const prev = acc[acc.length - 1];
    if (prev && /^[,.;:!?)\]]/.test(token.word)) {
      prev.word += token.word;
      return acc;
    }
    acc.push({ ...token });
    return acc;
  }, []);
}

/* Relative pronouns read as part of the clause before them, so they stay on the
   line they close instead of opening the next one. */
const BACK_TIE = new Set(['que', 'who', 'that']);

/* Short connectors (de, em, a, and, of...) must not end a line, so each one is
   grouped with the word that follows it and the group is rendered nowrap.
   Never two ties in a row, so we don't glue a whole phrase into one block.
   The nowrap only kicks in at lg+: on a narrow column each pair eats most of
   the line, and forcing it together makes the rag worse than an orphan. */
function groupTokens(tokens) {
  const groups = [];
  let previousWasTied = false;
  tokens.forEach((token, i) => {
    if (groups.length && BACK_TIE.has(token.word.toLowerCase())) {
      groups[groups.length - 1].push(token);
      previousWasTied = false;
      return;
    }
    const tie =
      i < tokens.length - 1 &&
      !previousWasTied &&
      token.word.length <= 3 &&
      !/[,.;:!?)\]]$/.test(token.word);
    if (previousWasTied) groups[groups.length - 1].push(token);
    else groups.push([token]);
    previousWasTied = tie;
  });
  return groups;
}

export default function Hero({ t, lang }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] } }
  };
  const words = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } }
  };
  const word = {
    hidden: { opacity: 0, y: '0.3em', filter: 'blur(8px)' },
    show: { opacity: 1, y: '0em', filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
  };

  const tokens = tokenize(t.hero.headline);
  const groups = groupTokens(tokens);

  return (
    <section id="home" className="relative min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-64px)] mt-14 md:mt-16 flex flex-col justify-center px-6 md:px-12 py-10 md:py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 noise-texture opacity-[0.035]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Statement */}
          <motion.h1
            key={lang}
            variants={words}
            className="text-[clamp(2.5rem,8.2vw,4rem)] lg:text-[4.5rem] xl:text-[5rem] font-medium leading-[1.1] tracking-[-0.025em] mb-8 md:mb-10 max-w-[22ch] text-pretty"
          >
            <span className="sr-only">{t.hero.headline.replace(/\*\*/g, '')}</span>
            <span aria-hidden="true">
              {groups.map((group, gi) => (
                <React.Fragment key={`g-${gi}`}>
                  {gi > 0 && ' '}
                  <span className="lg:whitespace-nowrap">
                    {group.map((token, i) => (
                      <React.Fragment key={`${token.word}-${i}`}>
                        {i > 0 && ' '}
                        <motion.span
                          variants={word}
                          className={`inline-block ${
                            token.key
                              ? 'text-zinc-900 dark:text-zinc-50'
                              : 'text-zinc-400 dark:text-zinc-500'
                          }`}
                        >
                          {token.word}
                        </motion.span>
                      </React.Fragment>
                    ))}
                  </span>
                </React.Fragment>
              ))}
            </span>
          </motion.h1>

          {/* CTAs + tags */}
          <motion.div
            variants={item}
            className="border-t border-zinc-200 dark:border-zinc-800 pt-8 md:pt-10 grid md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-6 lg:col-span-5 self-center">
              <div className="flex items-center gap-6">
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

            <ul className="md:col-span-6 lg:col-start-8 lg:col-span-5 self-center flex flex-wrap gap-2 md:justify-end md:ml-auto md:max-w-[22rem]">
              {t.hero.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-mono uppercase tracking-[0.05em]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
