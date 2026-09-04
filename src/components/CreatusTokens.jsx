import React from 'react';
import Icon, { domainIconNames } from './CreatusIcons';

const card =
  'bg-zinc-50 dark:bg-[#16191d] border border-zinc-200 dark:border-[#24282e] p-5 sm:p-7 md:p-9';
const mono = 'font-mono';

const colorGroups = [
  { name: 'content', rows: [
    { token: 'content/primary',   ref: 'neutral/1100', a: '#161616', b: '#f4f4f4', c: '#f2f4f8' },
    { token: 'content/secondary', ref: 'neutral/700',  a: '#525252', b: '#c6c6c6', c: '#dde1e6' },
    { token: 'content/tertiary',  ref: 'neutral/600',  a: '#6f6f6f', b: '#a8a8a8', c: '#c1c7cd' },
    { token: 'content/inverse',   ref: 'neutral/0',    a: '#ffffff', b: '#161616', c: '#121619' },
    { token: 'content/brand',     ref: 'brand/600',    a: '#008f53', b: '#00a862', c: '#00a862' },
  ]},
  { name: 'background', rows: [
    { token: 'background/primary',     ref: 'neutral/100', a: '#ffffff', b: '#161616', c: '#121619' },
    { token: 'background/secondary',   ref: 'neutral/200', a: '#f4f4f4', b: '#262626', c: '#21272a' },
    { token: 'background/tertiary',    ref: 'neutral/300', a: '#e0e0e0', b: '#393939', c: '#343a3f' },
    { token: 'background/brand',       ref: 'brand/600',   a: '#008f53', b: '#00a862', c: '#00a862' },
    { token: 'background/brand-light', ref: 'brand/200',   a: '#d3f5e2', b: '#0a291c', c: '#0a291c' },
  ]},
  { name: 'border', rows: [
    { token: 'border/primary',   ref: 'neutral/500', a: '#8d8d8d', b: '#6f6f6f', c: '#697077' },
    { token: 'border/secondary', ref: 'neutral/400', a: '#c6c6c6', b: '#525252', c: '#4d5358' },
    { token: 'border/tertiary',  ref: 'neutral/300', a: '#e0e0e0', b: '#393939', c: '#343a3f' },
    { token: 'border/brand',     ref: 'brand/600',   a: '#008f53', b: '#00a862', c: '#00a862' },
  ]},
  { name: 'button', rows: [
    { token: 'button/primary',        ref: 'brand/600',   a: '#008f53', b: '#00a862', c: '#00a862' },
    { token: 'button/primary-hover',  ref: 'brand/700',   a: '#007a46', b: '#008f53', c: '#008f53' },
    { token: 'button/danger-primary', ref: 'red/600',     a: '#da1e28', b: '#fa4d56', c: '#fa4d56' },
    { token: 'button/disabled',       ref: 'neutral/400', a: '#c6c6c6', b: '#525252', c: '#4d5358' },
  ]},
];

const spacingRows = [
  { n: 4, w: 10 }, { n: 8, w: 20 }, { n: 12, w: 30 }, { n: 16, w: 40 },
  { n: 20, w: 50 }, { n: 24, w: 60 }, { n: 32, w: 80 }, { n: 40, w: 100 },
];

const spacingTokens = [
  { token: 'padding/s', ref: 'space/12' },
  { token: 'padding/m', ref: 'space/16' },
  { token: 'padding/xl', ref: 'space/24' },
  { token: 'gap/l', ref: 'space/20' },
];

const radiusScale = [
  { n: 2 }, { n: 4 }, { n: 8 }, { n: 12 }, { n: 24 }, { n: 40 },
];

const radiusTokens = [
  { token: 'radius/xs', ref: 'shape/8' },
  { token: 'radius/surface', ref: 'shape/12', brand: true },
  { token: 'radius/md', ref: 'shape/16' },
  { token: 'radius/xl', ref: 'shape/24' },
];

const voiceRulesEn = [
  { n: '01', rule: 'State, not emotion', yes: '“Cargo released”', no: '“Great news, nothing wrong here!”' },
  { n: '02', rule: 'Infinitive or imperative, never first person', yes: '“Sign in to the system”', no: '“Let’s sign in”' },
  { n: '03', rule: 'Deliberate vocabulary', yes: '“3 containers awaiting inspection.”', no: '“3 items awaiting review.”' },
  { n: '04', rule: 'No emphatic punctuation, never celebrate', yes: '“No divergence detected.”', no: '“All clear! No problems found!”' },
];

const voiceRulesPt = [
  { n: '01', rule: 'Estado, não emoção', yes: '“Carga liberada”', no: '“Ótima notícia, nada de errado aqui!”' },
  { n: '02', rule: 'Infinitivo ou imperativo, nunca primeira pessoa', yes: '“Entrar no sistema”', no: '“Vamos entrar”' },
  { n: '03', rule: 'Vocabulário deliberado', yes: '“3 contêineres aguardando inspeção.”', no: '“3 itens aguardando revisão.”' },
  { n: '04', rule: 'Sem pontuação enfática, nunca comemorar', yes: '“Nenhuma divergência detectada.”', no: '“Tudo certo! Nenhum problema encontrado!”' },
];

const copy = {
  en: {
    colorTitle: 'Color Tokens',
    colorDesc: 'The only colour names the codebase touches. Each one resolves to a primitive that carries a value per theme mode.',
    light: 'Light',
    dark: 'Dark',
    coolGray: 'Cool Gray',
    spacingTitle: 'Spacing',
    spacingDesc: <>A 4&nbsp;px based scale. <code className={mono}>padding/*</code> and <code className={mono}>gap/*</code> tokens reference the numbered steps.</>,
    radiusTitle: 'Radius',
    radiusDesc: <>Corner values from 2 to 40&nbsp;px, applied through named <code className={mono}>radius/*</code> tokens. <code className={mono}>radius/surface</code> sits outside the scale — a surface is a concept, not a size.</>,
    typographyTitle: 'Typography',
    typographyDesc: 'IBM Plex Sans for interface text and IBM Plex Mono for data. Four weights across headings and body.',
    depthTitle: 'Depth',
    depthDesc: 'Three effects instead of an elevation scale. Hierarchy is built with background, border and spacing tokens.',
    menusDropdowns: 'Menus and dropdowns.',
    menusOverImagery: 'Menus over imagery.',
    keyboardNav: 'Keyboard navigation.',
    iconTitle: 'Iconography',
    iconDesc: 'Carbon icon set. Outline style at a consistent stroke weight.',
    iconCount: '585+ icons',
    voiceTitle: 'Voice & Tone',
    voiceDesc: 'Four writing rules applied to every string in the interface. Factual register, operational vocabulary.',
    ruleCol: 'Rule',
    writeCol: 'Write',
    avoidCol: 'Avoid',
    voiceRules: voiceRulesEn,
  },
  pt: {
    colorTitle: 'Tokens de Cor',
    colorDesc: 'Os únicos nomes de cor que o código toca. Cada um resolve para um primitivo que carrega um valor por modo de tema.',
    light: 'Light',
    dark: 'Dark',
    coolGray: 'Cool Gray',
    spacingTitle: 'Espaçamento',
    spacingDesc: <>Uma escala baseada em 4&nbsp;px. Os tokens <code className={mono}>padding/*</code> e <code className={mono}>gap/*</code> referenciam os passos numerados.</>,
    radiusTitle: 'Raio',
    radiusDesc: <>Valores de canto de 2 a 40&nbsp;px, aplicados por tokens nomeados <code className={mono}>radius/*</code>. O <code className={mono}>radius/surface</code> fica fora da escala — uma superfície é um conceito, não um tamanho.</>,
    typographyTitle: 'Tipografia',
    typographyDesc: 'IBM Plex Sans para texto de interface e IBM Plex Mono para dados. Quatro pesos entre títulos e corpo de texto.',
    depthTitle: 'Profundidade',
    depthDesc: 'Três efeitos no lugar de uma escala de elevação. A hierarquia é construída com tokens de background, borda e espaçamento.',
    menusDropdowns: 'Menus e dropdowns.',
    menusOverImagery: 'Menus sobre imagens.',
    keyboardNav: 'Navegação por teclado.',
    iconTitle: 'Iconografia',
    iconDesc: 'Conjunto de ícones Carbon. Estilo outline com espessura de traço consistente.',
    iconCount: '585+ ícones',
    voiceTitle: 'Tom de Voz',
    voiceDesc: 'Quatro regras de escrita aplicadas a toda string da interface. Registro factual, vocabulário operacional.',
    ruleCol: 'Regra',
    writeCol: 'Escrever',
    avoidCol: 'Evitar',
    voiceRules: voiceRulesPt,
  },
};

function SectionHeader({ title, desc }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="text-[13.5px] leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl">{desc}</p>
    </div>
  );
}

export default function CreatusTokens({ lang }) {
  const c = copy[lang === 'pt' ? 'pt' : 'en'];
  return (
    <div className="flex flex-col gap-6">

      {/* Color tokens */}
      <div className={card}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10 mb-2">
          <SectionHeader
            title={c.colorTitle}
            desc={c.colorDesc}
          />
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] leading-none text-zinc-500 dark:text-zinc-400 md:shrink-0 md:pt-1 mb-8 md:mb-0">
            <div className="flex items-center gap-1.5">
              <span className="w-[11px] h-[11px] shrink-0 bg-white border border-zinc-400 dark:border-zinc-600" />
              <span>{c.light}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-[11px] h-[11px] shrink-0 bg-[#161616] border border-zinc-400 dark:border-zinc-600" />
              <span>{c.dark}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-[11px] h-[11px] shrink-0 bg-[#21272a] border border-zinc-400 dark:border-zinc-600" />
              <span>{c.coolGray}</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
          {colorGroups.map((g) => (
            <div key={g.name} className="flex flex-col gap-2.5">
              <div className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-300 pb-2.5 border-b border-zinc-200 dark:border-[#2c3238]">
                {g.name}
              </div>
              {g.rows.map((r) => (
                <div key={r.token} className="flex items-center gap-3 py-1">
                  <div className="flex gap-[3px] shrink-0">
                    <span className="w-[15px] h-[15px] border border-zinc-300 dark:border-[#3a4148]" style={{ background: r.a }} />
                    <span className="w-[15px] h-[15px] border border-zinc-300 dark:border-[#3a4148]" style={{ background: r.b }} />
                    <span className="w-[15px] h-[15px] border border-zinc-300 dark:border-[#3a4148]" style={{ background: r.c }} />
                  </div>
                  <div className="font-mono text-[12.5px] text-zinc-700 dark:text-zinc-200 min-w-0 break-all">{r.token}</div>
                  <div className="flex-1" />
                  <div className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0">{r.ref}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Spacing + Radius */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${card} flex flex-col`}>
          <SectionHeader
            title={c.spacingTitle}
            desc={c.spacingDesc}
          />
          <div className="flex-1 flex flex-col justify-center gap-2">
            {spacingRows.map((s) => (
              <div key={s.n} className="flex items-center gap-3.5">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 w-[18px] text-right shrink-0">{s.n}</span>
                <span className="h-[10px] bg-[#00a862]" style={{ width: `${s.w}%` }} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2 mt-10 pt-6 border-t border-zinc-200 dark:border-[#2c3238]">
            {spacingTokens.map((t) => (
              <div key={t.token} className="flex justify-between gap-4">
                <span className="font-mono text-[12.5px] text-zinc-700 dark:text-zinc-200">{t.token}</span>
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">{t.ref}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${card} flex flex-col`}>
          <SectionHeader
            title={c.radiusTitle}
            desc={c.radiusDesc}
          />
          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full">
              {radiusScale.map((r) => (
                <div key={r.n} className="flex flex-col items-center gap-2">
                  <span
                    className="w-full aspect-square bg-zinc-200 dark:bg-[#1f242a] border border-zinc-300 dark:border-[#3a4148]"
                    style={{ borderTopRightRadius: r.n }}
                  />
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">{r.n}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2 mt-10 pt-6 border-t border-zinc-200 dark:border-[#2c3238]">
            {radiusTokens.map((t) => (
              <div key={t.token} className="flex justify-between gap-4">
                <span className={`font-mono text-[12.5px] ${t.brand ? 'text-[#00a862]' : 'text-zinc-700 dark:text-zinc-200'}`}>{t.token}</span>
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">{t.ref}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className={card}>
        <SectionHeader
          title={c.typographyTitle}
          desc={c.typographyDesc}
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div className="flex items-baseline justify-between pb-5 border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-[48px] font-semibold text-zinc-900 dark:text-zinc-100 tracking-[-0.02em]">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">h1</span>
            </div>
            <div className="flex items-baseline justify-between py-5 border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-4xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-[-0.02em]">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">h2</span>
            </div>
            <div className="flex items-baseline justify-between py-5 border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-[-0.01em]">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">h3</span>
            </div>
            <div className="flex items-baseline justify-between pt-5">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">text-bold / lg</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline justify-between pb-[18px] border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">text-semi / md</span>
            </div>
            <div className="flex items-baseline justify-between py-[18px] border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">text-medium / md</span>
            </div>
            <div className="flex items-baseline justify-between py-[18px] border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-xl font-normal text-zinc-900 dark:text-zinc-100">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">text-normal / md</span>
            </div>
            <div className="flex items-baseline justify-between py-[18px] border-b border-zinc-200 dark:border-[#2c3238]">
              <span className="text-sm font-normal text-zinc-900 dark:text-zinc-100">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">text-normal / xs</span>
            </div>
            <div className="flex items-baseline justify-between pt-[18px]">
              <span className="font-mono text-base text-[#00a862]">Aa123</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">IBM Plex Mono</span>
            </div>
          </div>
        </div>
      </div>

      {/* Depth */}
      <div className={card}>
        <SectionHeader
          title={c.depthTitle}
          desc={c.depthDesc}
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white dark:bg-[#1c2126] border border-zinc-200 dark:border-[#2c3238] p-[18px] pb-5 flex flex-col gap-2 shadow-[0_10px_24px_rgba(24,24,27,0.12)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
            <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100">Shadows/Menu</span>
            <span className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">{c.menusDropdowns}</span>
          </div>
          <div className="bg-white dark:bg-[#1c2126] border border-zinc-200 dark:border-[#2c3238] p-[18px] pb-5 flex flex-col gap-2 shadow-[0_10px_24px_rgba(24,24,27,0.06)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.3)]">
            <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100">Shadows/Menu (Overlay)</span>
            <span className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">{c.menusOverImagery}</span>
          </div>
          <div className="bg-white dark:bg-[#1c2126] border border-zinc-200 dark:border-[#2c3238] p-[18px] pb-5 flex flex-col gap-2 shadow-[0_0_0_2px_#00a862]">
            <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100">Focus Ring/Brand</span>
            <span className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">{c.keyboardNav}</span>
          </div>
        </div>
      </div>

      {/* Iconography */}
      <div className={card}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10 mb-8">
          <SectionHeader
            title={c.iconTitle}
            desc={c.iconDesc}
          />
          <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-[#2c3238] rounded px-2.5 py-1 self-start shrink-0">
            {c.iconCount}
          </div>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2.5">
          {domainIconNames.map((name) => (
            <div
              key={name}
              className="aspect-square flex items-center justify-center border border-zinc-200 dark:border-[#2c3238] text-zinc-600 dark:text-zinc-300"
            >
              <Icon name={name} size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Voice */}
      <div className={card}>
        <SectionHeader
          title={c.voiceTitle}
          desc={c.voiceDesc}
        />
        {/* Table on md+, stacked cards below */}
        <table className="hidden md:table w-full border-collapse table-fixed">
          <colgroup>
            <col style={{ width: '33.333%' }} />
            <col style={{ width: '33.333%' }} />
            <col style={{ width: '33.333%' }} />
          </colgroup>
          <thead>
            <tr className="border-b border-zinc-200 dark:border-[#2c3238]">
              <th className="text-left font-mono text-[10.5px] tracking-[0.1em] uppercase text-zinc-400 dark:text-zinc-500 font-normal pb-3 pr-6">{c.ruleCol}</th>
              <th className="text-left font-mono text-[10.5px] tracking-[0.1em] uppercase text-zinc-400 dark:text-zinc-500 font-normal pb-3 pr-6">{c.writeCol}</th>
              <th className="text-left font-mono text-[10.5px] tracking-[0.1em] uppercase text-zinc-400 dark:text-zinc-500 font-normal pb-3">{c.avoidCol}</th>
            </tr>
          </thead>
          <tbody>
            {c.voiceRules.map((v) => (
              <tr key={v.n} className="border-b border-zinc-100 dark:border-[#23272c] last:border-b-0">
                <td className="py-4 pr-6 align-middle">
                  <div className="flex gap-3 items-baseline">
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 shrink-0">{v.n}</span>
                    <span className="text-[14.5px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{v.rule}</span>
                  </div>
                </td>
                <td className="py-4 pr-6 align-middle">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a862] shrink-0" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-200 leading-snug">{v.yes}</span>
                  </div>
                </td>
                <td className="py-4 align-middle">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                    <span className="text-sm text-zinc-400 dark:text-zinc-500 leading-snug">{v.no}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="md:hidden flex flex-col gap-6">
          {c.voiceRules.map((v) => (
            <div key={v.n} className="flex flex-col gap-3 pb-6 border-b border-zinc-100 dark:border-[#23272c] last:border-b-0 last:pb-0">
              <div className="flex gap-3 items-baseline">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 shrink-0">{v.n}</span>
                <span className="text-[14.5px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{v.rule}</span>
              </div>
              <div className="flex flex-col gap-2 pl-[26px]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a862] shrink-0" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-200 leading-snug">{v.yes}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                  <span className="text-sm text-zinc-400 dark:text-zinc-500 leading-snug">{v.no}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
