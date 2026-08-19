export const translations = {
  pt: {
    nav: { home: "Início", projects: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      headline: "Oi, eu sou a Nina, uma **Product Designer** de **Porto Alegre** que transforma **sistemas complexos** em interfaces **claras** e escaláveis.",
      tags: ["Design Systems", "Interação", "Produtos B2B", "QA", "IA aplicada a produto"]
    },
    about: {
      title: "Sobre mim",
      description: "Product Designer focada em Sistemas de Design e Interação. Atuo na tradução de fluxos complexos em interfaces consistentes e escaláveis, priorizando clareza funcional em ecossistemas de produto. Atuo próxima do desenvolvimento frontend e de QA, e uso IA para gerar variações de layout e escrever código, encurtando o caminho entre a ideia e o protótipo testável.",
      experience: [
        {
          year: "JAN 2025 — presente",
          role: "Product Designer",
          company: "Preto no Branco",
          description: "Soluções B2B para clientes como VMI Security, Honda, DGT e Digicon, colaborando com times de backend e frontend desde o início. Acompanho a entrega até o fim: testo e valido as implementações e faço a revisão da UI construída contra o design. Co-idealizei o grupo de estudos de design da empresa com o IDEAR – PUCRS, onde também facilito workshops."
        },
        {
          year: "ABR 2024 — AGO 2024",
          role: "Designer Gráfico",
          company: "Bergamía",
          description: "Criação de produtos gráficos, design de embalagens e manutenção de site. Liderei a idealização e organização do evento de lançamento da collab com a marca YOUR ID, integrando design de produto, comunicação e estratégia de marca."
        },
        {
          year: "ABR 2023 — AGO 2023",
          role: "Designer Gráfico",
          company: "Hub da Indústria Criativa",
          description: "Identidades visuais para parceiros da FAMECOS – PUCRS e materiais gráficos para campanhas internas. Desenvolvi habilidades de comunicação com cliente, levantamento de requisitos e gestão de briefings."
        }
      ]
    },
    projects: {
      title: "Trabalhos",
      subtitle: "Projetos nos quais o design ajudou a solucionar problemas de negócios.",
      items: [
        { id: 1, title: "Sistema de Segurança Portuária", image: "projects/port-security-modal-light.webp", imageHover: "projects/port-security-hover-light.webp", description: "Plataforma de segurança portuária que integra visão computacional, inteligência artificial e análise de imagens para inspeção e rastreabilidade de cargas em tempo real.\nO redesign do produto envolveu reestruturar a arquitetura de módulos e desenvolver novas features para um ambiente onde a densidade de informação e a precisão operacional precisam coexistir.", tags: ["Redesign", "Design System", "Expansão de Features"] },
        {
          id: 2,
          slug: "cybersecurity-platform",
          title: "WSS Platform / TCC",
          image: "projects/wss-dashboard.webp",
          imageHover: "projects/wss-hover.webp",
          description: "Traduzindo cibersegurança em decisão de negócio: plataforma B2B que transforma relatórios técnicos densos em valor tangível para gestores sem background em segurança.",
          tags: ["Product Design", "TCC", "UX Research"],
          caseStudy: {
            eyebrow: "Estudo de caso",
            client: "WSS Security",
            year: "2025",
            role: "Product Designer",
            sector: "Cibersegurança B2B",
            headline: "Traduzindo cibersegurança em decisão de negócio",
            coverImage: "projects/wss-dashboard-cover.webp",
            coverCaption: "Dashboard com score de Saúde de Segurança, panorama de vulnerabilidades por categoria e linha do tempo de ações do serviço.",
            disclaimer: "Projeto acadêmico (TCC), desenvolvido como Trabalho de Conclusão de Curso em Design de Comunicação. A WSS Security é uma empresa parceira real, que conheci através de mentoria e que cedeu o contexto de negócio para este estudo. Vulnerabilidades, métricas, nomes de usuários e demais conteúdos exibidos nas telas são fictícios, criados exclusivamente para fins educacionais e de prototipagem. Nenhuma informação real de clientes ou de segurança da WSS Security é exibida aqui.",
            intro: "A WSS Security vende pentest, monitoramento e treinamento de segurança, mas o relatório final chegava ao cliente como um documento denso, cheio de termos técnicos que não viravam decisão.\nA pergunta que guiou o projeto: como uma plataforma digital traduz sucesso técnico em valor de negócio para quem não entende de segurança?",
            sections: [
              {
                title: "O problema",
                body: "A WSS Security vende pentest, monitoramento e treinamento de segurança da informação, mas enfrentava um problema que não era técnico, era de comunicação. O relatório final de um serviço chegava para o cliente como um documento denso, cheio de termos como CVE, exposição, remediação. Para um gestor sem background técnico, isso não virava decisão, virava frustração.\nEntrevistei o CEO da WSS diretamente. A frase que definiu o projeto: a empresa \"se esforça para adaptar o processo de comunicação à demanda do cliente\", mas na prática o fluxo era só kickoff, entrega de relatório e reunião de debriefing. Nenhum contato no meio do processo. O cliente pagava e ficava no escuro até o fim.\nDessa lacuna nasceu a pergunta que guiou o projeto: como uma plataforma digital traduz sucesso técnico em valor de negócio tangível para quem não entende de segurança?"
              },
              {
                title: "Quem sente essa dor",
                body: "Construí a persona Carla, CEO de empresa de médio porte, orientada a resultado, sem vocabulário técnico de TI, mas responsável por justificar o investimento em segurança para o conselho. Mapeando a jornada dela ao longo do serviço, o ponto de maior atrito não era a entrega final, era o silêncio durante a execução do teste. Sem visibilidade de progresso, a sensação era de estar pagando por algo invisível.\nEsse achado mudou a prioridade do projeto: o produto não podia ser só \"um relatório mais bonito\". Precisava ser um canal de comunicação contínuo."
              },
              {
                title: "Processo",
                body: "Rodei análise heurística de três concorrentes diretos (PlexTrac, Darwin Attack, Tenable) contra as 10 heurísticas de Nielsen antes de desenhar qualquer tela. Isso definiu, por exemplo, que filtros ocupando espaço vertical excessivo era um erro recorrente do mercado a evitar. Usei o modelo dos 5 elementos de Jesse James Garrett para estruturar o projeto de estratégia até superfície, com sitemap e fluxo de interação validados antes de ir para wireframe."
              },
              {
                title: "Decisões de design",
                body: "A plataforma se organiza em quatro módulos, além do fluxo de login: Feed, com atualizações do serviço e conteúdo educativo publicado pela equipe da WSS; Dashboard, o centro da experiência; Documentos, que reúne relatórios, tutoriais e o monitoramento de vulnerabilidades traduzido em risco de negócio; e Chat, o canal direto com o time.\nO dashboard funciona como tradutor, não como painel técnico. Em vez de listar vulnerabilidades por CVSS, o indicador central é um score de \"Saúde de Segurança\" (0 a 1000) acompanhado de um gráfico radar por categoria de risco."
              },
              {
                title: "Descobertas em camadas",
                body: "Cada linha da tabela \"Descobertas\" abre um modal que separa a informação em três camadas: primeiro por que isso importa para o negócio (não para o time técnico), depois o que recomendamos fazer, e só então a evidência técnica bruta. É a mesma lógica do Resumo Executivo que a WSS já usava em relatórios, só que aplicada peça por peça, no momento em que o dado aparece, não tudo de uma vez num documento denso, de muitas páginas.",
                annotated: {
                  src: "projects/wss-modal.webp",
                  alt: "Modal de uma descoberta: risco de negócio, recomendação e evidência técnica em camadas separadas.",
                  notes: [
                    { title: "Identificação", body: "Esse ID é advindo do CVE (Common Vulnerabilities and Exposures), um banco de dados reconhecido internacionalmente, que lista falhas e vulnerabilidades de segurança cibernética." },
                    { title: "Contexto e Impacto", body: "As seções “Por que isso importa” e “Recomendação” foram desenhadas para o cliente leigo. Aqui, traduzimos o risco técnico em impacto financeiro. É a informação que se precisa para priorizar demandas e autorizar a correção." },
                    { title: "Evidência Técnica", body: "Essa seção é direcionada para o profissional de TI da empresa. Ele não precisa da “tradução”, ele precisa da prova técnica para executar a correção. Ao colocar o Impacto e a Evidência na mesma página, a plataforma alinha a expectativa da diretoria com a execução técnica." }
                  ]
                }
              },
              {
                title: "Chat contínuo",
                body: "Como o ponto de maior dor era o silêncio durante a execução, o módulo de Chat (inspirado em ClickUp e Discord) permite canais temáticos por vulnerabilidade crítica e chamada de vídeo com um clique, sem trocar e-mail para escalar um problema urgente. Assim a Carla não precisa esperar o relatório final para saber o que está acontecendo.\nTambém houve um corte consciente de escopo: deixei a visão de administrador da WSS (painel para a equipe interna publicar conteúdo e cadastrar clientes) registrada como evolução futura, para focar o MVP inteiramente na experiência do cliente.",
                images: [
                  { src: "projects/wss-chat.webp", caption: "Módulo de Chat com canais temáticos, participantes e ações rápidas como Reportar Incidente." }
                ]
              },
              {
                title: "Resultado",
                body: "O protótipo responde à pergunta de pesquisa em três frentes. Abstração e visualização de dados: o Dashboard converte uma gama de pontos de dados complexos em indicadores de alto nível, como o score de Saúde de Segurança, resolvendo a dor do cliente de enfrentar relatórios densos. Tradução de informações técnicas: o modal de Descobertas não apenas identifica a vulnerabilidade, mas a contextualiza em \"Por que importa para você\" e \"O que recomendamos fazer\". Colaboração e imediatismo: o módulo de Chat supera as barreiras processuais de comunicação que geravam o silêncio durante o serviço.\nPara uma V2, o roadmap segue por prioridade: primeiro as telas de papel administrativo, essenciais para tornar a plataforma funcional; depois a visualização de relatórios de serviços anteriores, para o cliente acompanhar sua evolução ao longo do tempo; em seguida, a função de salvar publicações do feed; e por fim, uma versão mobile responsiva."
              }
            ],
            backToProjects: "Voltar aos projetos",
            nextLabel: "Próximo projeto"
          }
        },
        { id: 3, title: "PCP / Departamento de Componentes Aeroespaciais", image: "projects/pcp-aerospace-modal-light.webp", imageHover: "projects/pcp-aerospace-hover-light.webp", description: "Plataforma B2B desenvolvida para o departamento de componentes aeronáuticos da empresa com foco em planejamento e controle da produção. O sistema integra gestão de demanda, visibilidade de estoque e sequenciamento produtivo em módulos interconectados, oferecendo uma visão unificada dos processos logísticos e operacionais.\nO desafio de design foi traduzir fluxos complexos de dados industriais em interfaces claras e funcionais para diferentes perfis de usuário (do gestor financeiro ao planejador de produção), mantendo consistência e usabilidade em um ambiente de alta criticidade operacional.", tags: ["Design de Interface", "Product"] },
        {
          id: 4,
          slug: "creatus-design-system",
          title: "Creatus DS",
          image: "projects/creatus-modal.webp",
          imageHover: "projects/creatus-hover.webp",
          description: "Estruturando um design system do zero para uma interface construída em GPUI: como Carbon (IBM) e a identidade visual herdada do produto se combinaram para sustentar uma experiência de alta densidade.",
          tags: ["Design System", "Documentação de Componentes", "Product Design"],
          caseStudy: {
            eyebrow: "Estudo de caso",
            client: "Preto no Branco",
            year: "2025",
            role: "Product Designer",
            sector: "Segurança portuária B2B",
            headline: "Um design system pensado para performance em GPUI",
            coverComponent: "creatus-tokens",
            disclaimer: "Projeto profissional desenvolvido na Preto no Branco. Este estudo de caso descreve o processo e as decisões de design de um software de monitoramento e inspeção de contêineres para o setor de segurança portuária. Detalhes proprietários de negócio, telas específicas e dados de cliente não são exibidos aqui.",
            intro: "O software em questão é o produto carro-chefe da Preto no Branco, uma plataforma de monitoramento e inspeção de contêineres para o setor de segurança portuária, com alto volume de análises processadas por dia. A base de código foi migrada para Rust, usando a GPUI (engine de UI do Zed) na renderização, para ganhar performance em um contexto de uso intensivo.\nEssa mudança de stack exigiu estruturar um design system do zero: a v2 do produto não tinha um sistema documentado, só padrões visuais informais espalhados entre telas.",
            sections: [
              {
                title: "O contexto",
                body: "Participei da estruturação do design system junto com outro designer, que liderou o projeto. Minha contribuição concreta foi documentar os tokens fundamentais (cor, espaçamento, raio de borda) e construir os componentes-base de menor complexidade, como badge e tooltip, seguindo os padrões de arquitetura definidos em conjunto com quem liderava o projeto."
              },
              {
                title: "A decisão: continuidade visual e Carbon",
                body: "Combinar duas referências de design system partiu de duas restrições diferentes, uma técnica e uma de produto.\nCarbon (IBM) resolveu a restrição técnica. A GPUI renderiza a interface direto na GPU, então componentes com muitas camadas visuais, efeitos ou animações complexas custam caro em performance, porque cada frame precisa recalcular geometria e repintar. Carbon foi desenhado para esse tipo de cenário, interfaces densas, enterprise, com grande volume de dado exibido e atualizado. Seus princípios priorizam estados visuais simples e previsíveis e densidade de informação sem perder legibilidade.\nUm design system interno, usado como referência de continuidade visual, resolveu a restrição de produto. A v2 do produto já tinha uma identidade visual reconhecida por usuários recorrentes, equipes de operação portuária que usam o sistema diariamente. Trocar a stack técnica não podia significar trocar a linguagem visual da noite para o dia, isso quebraria a familiaridade já construída. Os ícones do sistema vêm da biblioteca do Carbon, estendendo essa influência também para a camada visual, além da estrutural.\nA decisão de design partiu de uma restrição de engenharia. O trabalho de design system foi conciliar as duas influências sem gerar inconsistência visual ou de comportamento."
              },
              {
                title: "Arquitetura em três camadas",
                body: "O sistema foi estruturado em camadas, visíveis na documentação de tokens e componentes.\n**Fundamentos:** tokens organizados em duas camadas, semântica e primitiva. Um token como content/primary referencia um valor primitivo como color/neutral/light/1200, com variação nativa para modo claro e escuro. O mesmo padrão vale para espaçamento, tokens semânticos (padding/m, gap/l) apontam para uma escala numérica de primitivos (space/16, space/24). Essa separação permite ao time de desenvolvimento consumir só os nomes semânticos no código, sem lidar com valores brutos. O raio de borda segue uma escala completa, com um token à parte, radius/surface, dedicado a superfícies. O grid é responsivo por plataforma, com valores próprios de columns, gutter e margin por contexto de uso (desktop ou mobile/web).\nUm ponto que reforça a decisão técnica por trás do sistema: não existe uma escala de elevação por sombra, do tipo Material Design com múltiplos níveis de profundidade. Sombra fica limitada a um uso funcional específico, menus flutuantes, porque em GPUI sombras e desfoques generalizados representam um custo de processamento relevante.\n**Componentes-base:** elementos reutilizáveis e desacoplados de qualquer contexto específico de produto, como botão, badge, tooltip e modal (dividido em partes menores como modal-header, modal-footer, modal-overlay). Cada componente tem documentação própria, com grade de variantes cruzando estilo, status e tamanho, e uma seção de Playground para testar composições ao vivo dentro do próprio Figma.\n**Composições de produto:** telas e blocos montados a partir dos componentes-base, já resolvendo casos de uso do domínio de segurança portuária, como modais de cadastro, modais de configuração de acesso e cards de perfil de acesso. Nessa camada o sistema deixa de ser genérico e passa a atender os fluxos reais do software."
              },
              {
                title: "Exemplo aprofundado: side panel, slots e toolbar",
                body: "O maior diferencial do sistema não está num componente isolado, está na combinação entre a side panel e o componente de slot.\nA side panel existe como uma estrutura única que se repete em pelo menos cinco contextos diferentes do produto: análise fiscal, análise de IA, imagens de IA, atividade e inspeção. Em vez de desenhar um painel lateral distinto para cada fluxo, o sistema mantém uma casca comum e troca o conteúdo interno conforme o contexto.\nEssa troca de conteúdo é resolvida pelo componente de slot, documentado com um propósito claro: equilibrar customização e consistência. Qualquer conteúdo customizado inserido num slot precisa manter a integridade do design system e seguir padrões de acessibilidade e usabilidade, mesmo sendo variável. Na prática, um analista de fiscalização e um analista de IA usam a mesma estrutura de navegação e a mesma lógica de interação, só o conteúdo interno muda, o que reduz a curva de aprendizado entre módulos do produto.\nA toolbar reforça esse mesmo princípio de reuso por outro caminho: existe uma versão genérica do componente e uma versão especializada para a tabela de dados, com o item de toolbar específico para ações em lote. O componente passou por várias iterações registradas (3.0, 3.1), o que indica que a estrutura base precisou ser testada e ajustada até se adaptar bem a diferentes contextos de uso, sem virar um componente novo a cada vez."
              },
              {
                title: "Resultado",
                body: "A documentação de tokens e variantes reduziu decisões visuais tomadas caso a caso, sem critério fixo, na criação de novas telas e passou a ser a referência consultada pelo time ao especificar novos fluxos. A clareza da documentação foi validada na prática de um jeito direto: os desenvolvedores usaram Codex e Claude para reproduzir os componentes especificados diretamente em código, a partir da documentação de tokens e variantes, sem precisar de handoff manual peça por peça."
              }
            ],
            backToProjects: "Voltar aos projetos",
            nextLabel: "Próximo projeto"
          }
        }
      ]
    },
    contact: {
      title: "Vamos\nconversar.",
      subtitle: "Seja para um projeto, uma parceria ou só para trocar ideia.",
    }
  },
  en: {
    nav: { home: "Home", projects: "Work", about: "About", contact: "Contact" },
    hero: {
      headline: "Hi, I'm Nina, a **Product Designer** based in **Porto Alegre** who turns **complex systems** into **clear**, scalable interfaces.",
      tags: ["Design Systems", "Interaction", "B2B Products", "QA", "AI applied to product"]
    },
    about: {
      title: "About me",
      description: "Product Designer focused on Design Systems and Interaction. I translate complex flows into consistent, scalable interfaces, prioritizing functional clarity in product ecosystems. I work close to frontend development and QA, and use AI to generate layout variations and write code, shortening the path from idea to testable prototype.",
      experience: [
        {
          year: "JAN 2025 — Present",
          role: "Product Designer",
          company: "Preto no Branco",
          description: "B2B solutions for clients such as VMI Security, Honda, DGT and Digicon, collaborating with backend and frontend engineers from day one. I follow delivery through to the end: testing and validating implementations and reviewing the built UI against the design. Co-conceptualized our internal design study group in partnership with IDEAR – PUCRS, where I also facilitate workshops."
        },
        {
          year: "APR 2024 — AUG 2024",
          role: "Graphic Designer",
          company: "Bergamía",
          description: "Graphic product creation, packaging design, and website maintenance. Led the ideation and planning of the launch event for the collaboration with brand YOUR ID, integrating product design, communication, and brand strategy."
        },
        {
          year: "APR 2023 — AUG 2023",
          role: "Graphic Designer",
          company: "Hub da Indústria Criativa",
          description: "Visual identities for university partners at FAMECOS – PUCRS and graphic materials for internal campaigns. Developed skills in client communication, requirements gathering, and briefing management."
        }
      ]
    },
    projects: {
      title: "Work",
      subtitle: "Projects in which design\nhelped solve business problems.",
      items: [
        { id: 1, title: "Port Security System", image: "projects/port-security-modal-light.webp", imageHover: "projects/port-security-hover-light.webp", description: "Port security platform integrating computer vision, artificial intelligence, and image analysis for real-time cargo inspection and traceability.\nThe product redesign involved restructuring the module architecture and developing new features for an environment where information density and operational precision must coexist.", tags: ["Redesign", "Design System", "Feature Expansion"] },
        {
          id: 2,
          slug: "cybersecurity-platform",
          title: "WSS Platform / Thesis",
          image: "projects/wss-dashboard.webp",
          imageHover: "projects/wss-hover.webp",
          description: "Translating cybersecurity into business decisions: a B2B platform that turns dense technical reports into tangible value for managers with no security background.",
          tags: ["Product Design", "Thesis", "UX Research"],
          caseStudy: {
            eyebrow: "Case study",
            client: "WSS Security",
            year: "2025",
            role: "Product Designer",
            sector: "B2B Cybersecurity",
            headline: "Translating cybersecurity into business decisions",
            coverImage: "projects/wss-dashboard-cover.webp",
            coverCaption: "Dashboard with a Security Health score, a vulnerability breakdown by category, and a timeline of service actions.",
            disclaimer: "Academic project, developed as a thesis in Communication Design. WSS Security is a real partner company I met through mentorship, who provided the business context for this study. Vulnerabilities, metrics, user names, and other content shown on the screens are fictional, created exclusively for educational and prototyping purposes. No real client or security information from WSS Security is shown here.",
            intro: "WSS Security sells pentesting, monitoring, and security training, but the final report reached the client as a dense document full of technical terms that never turned into decisions.\nThe question that guided the project: how does a digital platform translate technical success into business value for someone who doesn’t understand security?",
            sections: [
              {
                title: "The problem",
                body: "WSS Security sells pentesting, monitoring, and information security training, but faced a problem that wasn’t technical, it was about communication. The final report of a service reached the client as a dense document, full of terms like CVE, exposure, remediation. For a manager with no technical background, that didn’t turn into a decision, it turned into frustration.\nI interviewed WSS’s CEO directly. The sentence that defined the project: the company \"strives to adapt the communication process to the client’s demand\", but in practice the flow was just kickoff, report delivery, debriefing meeting. No contact in the middle of the process. The client paid and stayed in the dark until the end.\nThat gap led to the question that guided the project: how does a digital platform translate technical success into business value for someone who doesn’t understand security?"
              },
              {
                title: "Who feels this pain",
                body: "I built the persona Carla, CEO of a mid-sized company, results-oriented, without technical IT vocabulary, but responsible for justifying the security investment to the board. Mapping her journey across the service, the biggest friction point wasn’t the final delivery, it was the silence during the execution of the test. With no visibility into progress, it felt like paying for something invisible.\nThat finding shifted the project’s priority: the product couldn’t just be \"a prettier report\". It had to be a continuous communication channel."
              },
              {
                title: "Process",
                body: "I ran a heuristic analysis of three direct competitors (PlexTrac, Darwin Attack, Tenable) against Nielsen’s 10 heuristics before designing any screen. This established, for example, that filters taking up excessive vertical space was a recurring market mistake to avoid. I used Jesse James Garrett’s 5 elements model to structure the project from strategy to surface, with sitemap and interaction flow validated before moving to wireframes."
              },
              {
                title: "Design decisions",
                body: "The platform is organized into four modules, plus the login flow: Feed, with service updates and educational content published by the WSS team; Dashboard, the center of the experience; Documents, which gathers reports, tutorials, and vulnerability monitoring translated into business risk; and Chat, the direct channel to the team.\nThe dashboard works as a translator, not as a technical panel. Instead of listing vulnerabilities by CVSS, the central indicator is a \"Security Health\" score (0 to 1000) paired with a radar chart by risk category."
              },
              {
                title: "Layered findings",
                body: "Each row of the \"Findings\" table opens a modal that separates the information into three layers: first why this matters for the business (not for the technical team), then what we recommend doing, and only then the raw technical evidence. It’s the same logic as the Executive Summary WSS already used in reports, only applied piece by piece, at the moment the data appears, not all at once in a long, dense document.",
                annotated: {
                  src: "projects/wss-modal.webp",
                  alt: "A finding modal: business risk, recommendation, and technical evidence in separate layers.",
                  notes: [
                    { title: "Identification", body: "This ID comes from CVE (Common Vulnerabilities and Exposures), an internationally recognized database listing cybersecurity flaws and vulnerabilities." },
                    { title: "Context and Impact", body: "The “Why this matters” and “Recommendation” sections were designed for the non-technical client. Here, we translate technical risk into financial impact, the information needed to prioritize demands and authorize the fix." },
                    { title: "Technical Evidence", body: "This section targets the company’s IT professional. They don’t need the “translation”, they need the technical proof to execute the fix. By putting Impact and Evidence on the same page, the platform aligns the board’s expectations with technical execution." }
                  ]
                }
              },
              {
                title: "Continuous chat",
                body: "Since the biggest pain point was the silence during execution, the Chat module (inspired by ClickUp and Discord) allows thematic channels per critical vulnerability and one-click video calls, without swapping e-mails to escalate an urgent problem. This way Carla doesn’t have to wait for the final report to know what’s going on.\nThere was also a conscious scope cut: I left the WSS admin view (a panel for the internal team to publish content and register clients) noted as a future evolution, to focus the MVP entirely on the client experience.",
                images: [
                  { src: "projects/wss-chat.webp", caption: "Chat module with thematic channels, participants, and quick actions like Report Incident." }
                ]
              },
              {
                title: "Result",
                body: "The prototype answers the research question on three fronts. Data abstraction and visualization: the Dashboard converts a range of complex data points into high-level indicators, like the Security Health score, solving the client’s pain of facing dense reports. Translation of technical information: the Findings modal doesn’t just identify the vulnerability, it contextualizes it into \"Why it matters to you\" and \"What we recommend doing\". Collaboration and immediacy: the Chat module overcomes the procedural communication barriers that caused silence during the service.\nFor a V2, the roadmap follows this priority: first, admin-role screens, essential to make the platform functional; then, a view for past service reports, so the client can track their evolution over time; next, the ability to save feed posts; and finally, a responsive mobile version."
              }
            ],
            backToProjects: "Back to projects",
            nextLabel: "Next project"
          }
        },
        { id: 3, title: "PCP / Aerospace Components Department", image: "projects/pcp-aerospace-modal-light.webp", imageHover: "projects/pcp-aerospace-hover-light.webp", description: "B2B platform built for the company’s aeronautical components department, focused on production planning and control. The system integrates demand management, inventory visibility, and production sequencing across interconnected modules, providing a unified view of logistics and operational processes.\nThe design challenge was translating complex industrial data flows into clear, functional interfaces for different user profiles (from financial managers to production planners), while maintaining consistency and usability in a high-criticality operational environment.", tags: ["Interface Design", "Product"] },
        {
          id: 4,
          slug: "creatus-design-system",
          title: "Creatus DS",
          image: "projects/creatus-modal.webp",
          imageHover: "projects/creatus-hover.webp",
          description: "Structuring a design system from scratch for an interface built in GPUI: how Carbon (IBM) and the product’s inherited visual identity combined to support a high-density experience.",
          tags: ["Design System", "Component Documentation", "Product Design"],
          caseStudy: {
            eyebrow: "Case study",
            client: "Preto no Branco",
            year: "2025",
            role: "Product Designer",
            sector: "B2B Port Security",
            headline: "A design system built for performance in GPUI",
            coverComponent: "creatus-tokens",
            disclaimer: "Professional project developed at Preto no Branco. This case study describes the process and design decisions behind a container monitoring and inspection product for the port security sector. Proprietary business details, specific screens, and client data are not shown here.",
            intro: "The software in question is Preto no Branco’s flagship product, a container monitoring and inspection platform for the port security sector, with a high volume of analyses processed per day. The codebase was migrated to Rust, using GPUI (Zed’s UI engine) for rendering, to gain performance in a context of intensive use.\nThat stack change required structuring a design system from scratch: v2 of the product had no documented system, only informal visual patterns scattered across screens.",
            sections: [
              {
                title: "The context",
                body: "I took part in structuring the design system alongside another designer, who led the project. My concrete contribution was documenting the foundational tokens (color, spacing, border radius) and building the lower-complexity base components, like badge and tooltip, following the architecture patterns defined together with whoever led the project."
              },
              {
                title: "The decision: visual continuity and Carbon",
                body: "Combining two design system references came from two different constraints, one technical and one product-related.\nCarbon (IBM) solved the technical constraint. GPUI renders the interface directly on the GPU, so components with many visual layers, effects, or complex animations cost a lot in performance, since every frame has to recalculate geometry and repaint. Carbon was designed for that kind of scenario, dense, enterprise interfaces with a large volume of data displayed and updated. Its principles prioritize simple, predictable visual states and information density without losing legibility.\nAn internal design system, used as a reference for visual continuity, solved the product constraint. The product’s v2 already had a visual identity recognized by recurring users, port operation teams who use the system daily. Changing the technical stack couldn’t mean changing the visual language overnight, that would break the familiarity already built. The system’s icons come from Carbon’s library, extending that influence to the visual layer as well, not just the structural one.\nThe design decision came from an engineering constraint. The design system work was reconciling both influences without generating visual or behavioral inconsistency."
              },
              {
                title: "Three-layer architecture",
                body: "The system was structured in layers, visible throughout the token and component documentation.\n**Foundations:** tokens organized into two layers, semantic and primitive. A token like content/primary references a primitive value like color/neutral/light/1200, with native variation for light and dark mode. The same pattern applies to spacing, semantic tokens (padding/m, gap/l) point to a numeric scale of primitives (space/16, space/24). This separation lets the development team consume only semantic names in code, without dealing with raw values. Border radius follows a full scale, with a separate token, radius/surface, dedicated to surfaces. The grid is responsive per platform, with its own columns, gutter, and margin values by context of use (desktop or mobile/web).\nOne point that reinforces the technical decision behind the system: there is no shadow-based elevation scale, the kind Material Design uses with multiple depth levels. Shadow is limited to one specific functional use, floating menus, because in GPUI, widespread shadows and blur effects represent a meaningful processing cost.\n**Base components:** reusable elements decoupled from any specific product context, like button, badge, tooltip, and modal (split into smaller parts like modal-header, modal-footer, modal-overlay). Each component has its own documentation, with a variant grid crossing style, status, and size, and a Playground section to test compositions live inside Figma itself.\n**Product compositions:** screens and blocks assembled from the base components, already solving use cases from the port security domain, like registration modals, access configuration modals, and access profile cards. At this layer the system stops being generic and starts serving the software’s real flows."
              },
              {
                title: "Deep dive: side panel, slots, and toolbar",
                body: "The system’s biggest differentiator isn’t in any single component, it’s in the combination of the side panel and the slot component.\nThe side panel exists as a single structure that repeats across at least five different contexts in the product: fiscal analysis, AI analysis, AI images, activity, and inspection. Instead of designing a distinct side panel for each flow, the system keeps a common shell and swaps the internal content depending on the context.\nThat content swap is solved by the slot component, documented with a clear purpose: balancing customization and consistency. Any custom content or component inserted into a slot needs to maintain the design system’s integrity and follow accessibility and usability standards, even while being variable. In practice, a fiscal analyst and an AI analyst use the same navigation structure and the same interaction logic, only the internal content changes, which reduces the learning curve between product modules.\nThe toolbar reinforces this same reuse principle from a different angle: there’s a generic version of the component and a specialized version for the data table, with a toolbar item specific to batch actions. The component went through several recorded iterations (3.0, 3.1), which shows the base structure needed to be tested and adjusted until it adapted well to different use contexts, without turning into a new component every time."
              },
              {
                title: "Result",
                body: "The token and variant documentation reduced one-off visual decisions made without a fixed criteria when creating new screens and became the reference the team consulted when specifying new flows. The documentation’s clarity was validated in a very direct way: developers used Codex and Claude to reproduce the specified components straight in code, from the token and variant documentation, without needing manual piece-by-piece handoff."
              }
            ],
            backToProjects: "Back to projects",
            nextLabel: "Next project"
          }
        }
      ]
    },
    contact: {
      title: "Let’s\ntalk.",
      subtitle: "Whether it’s a project, a partnership, or just a conversation, reach out."
    }
  }
};
