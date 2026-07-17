export const translations = {
  pt: {
    nav: { home: "Início", projects: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      description: "Product Designer focada em Sistemas de Design e Interação. Traduzo fluxos complexos em interfaces consistentes e escaláveis. Priorizo clareza funcional e atuo na interseção entre design e tecnologia."
    },
    about: {
      title: "SOBRE MIM",
      description: "Product Designer focada em Sistemas de Design e Interação. Atuo na tradução de fluxos complexos em interfaces consistentes e escaláveis, priorizando clareza funcional em ecossistemas de produto. Trabalho na interseção entre design e tecnologia, com familiaridade em desenvolvimento frontend, QA e IA aplicada à construção de produtos.",
      experience: [
        {
          year: "JAN 2025 — presente",
          role: "Product Designer",
          company: "Preto no Branco",
          description: "Soluções B2B para clientes como VMI Security, Honda, DGT e Digicon, colaborando com times de backend e frontend desde o início. Co-idealizei o grupo de estudos de design da empresa com o IDEAR – PUCRS, onde também facilito workshops."
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
      title: "TRABALHOS",
      subtitle: "Projetos nos quais o design ajudou a solucionar problemas de negócios.",
      items: [
        { id: 1, title: "Sistema de Segurança Portuária", image: "projects/port-security-modal-light.webp", imageHover: "projects/port-security-hover-light.webp", description: "Plataforma de segurança portuária que integra visão computacional, inteligência artificial e análise de imagens para inspeção e rastreabilidade de cargas em tempo real.\nO redesign do produto envolveu reestruturar a arquitetura de módulos e desenvolver novas features para um ambiente onde a densidade de informação e a precisão operacional precisam coexistir.", tags: ["Redesign", "Design System", "Expansão de Features"] },
        {
          id: 2,
          slug: "cybersecurity-platform",
          title: "WSS Platform / TCC",
          image: "projects/wss-dashboard.webp",
          imageHover: "projects/wss-chat.webp",
          description: "Traduzindo cibersegurança em decisão de negócio: plataforma B2B que transforma relatórios técnicos densos em valor tangível para gestores sem background em segurança.",
          tags: ["Product Design", "TCC", "Design System"],
          caseStudy: {
            eyebrow: "Estudo de caso",
            client: "WSS Security",
            year: "2025",
            role: "Product Designer",
            sector: "Cibersegurança B2B",
            headline: "Traduzindo cibersegurança em decisão de negócio",
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
                    { title: "Contexto e Impacto", body: "As seções 'Por que isso importa' e 'Recomendação' foram desenhadas para o cliente leigo. Aqui, traduzimos o risco técnico em impacto financeiro. É a informação que se precisa para priorizar demandas e autorizar a correção." },
                    { title: "Evidência Técnica", body: "Essa seção é direcionada para o profissional de TI da empresa. Ele não precisa da 'tradução', ele precisa da prova técnica para executar a correção. Ao colocar o Impacto e a Evidência na mesma página, a plataforma alinha a expectativa da diretoria com a execução técnica." }
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
                body: "O protótipo mostra que o design consegue romper a barreira técnica em três frentes: abstração visual (dados que comunicam, convertendo logs técnicos em indicadores claros), tradução contextual (risco mapeado em impacto financeiro e reputacional) e colaboração contínua (fim do silêncio entre especialista e cliente).\nOs próximos passos seguem um roadmap por prazo: no médio prazo, uma versão mobile responsiva, para que a tomada de decisão não dependa de acesso a um computador; no longo prazo, histórico de relatórios anteriores e bookmarks no feed, para que a cliente acompanhe a evolução da sua segurança ao longo do tempo."
              },
              {
                title: "O que eu levo desse projeto",
                body: "Entender que, em B2B técnico, a interface certa não é a que mostra mais dado, e sim a que decide o que esconder e em que ordem revelar.\nO maior ganho de usabilidade do projeto não veio de um componente novo: veio de uma decisão de conteúdo, tirar o CVSS da primeira camada de leitura. Sozinho, um código técnico não comunica risco para quem não é da área, ele só prova que algo existe. Ao reorganizar a mesma informação em camadas — negócio primeiro, recomendação depois, evidência técnica por último — o mesmo dado passou a servir dois públicos diferentes na mesma tela, sem que um atrapalhasse o outro. Tradução, em design, é menos sobre adicionar explicação e mais sobre sequenciar o que já existe."
              }
            ],
            results: {
              title: "Resultados",
              items: [
                { value: "3 camadas", label: "risco de negócio, recomendação e evidência técnica, nessa ordem" },
                { value: "4 módulos", label: "feed, dashboard, documentos e chat em uma única plataforma" },
                { value: "1 canal", label: "chat contínuo elimina o silêncio durante a execução" }
              ]
            },
            backToProjects: "Voltar aos projetos",
            nextLabel: "Próximo projeto"
          }
        },
        { id: 3, title: "PCP / Departamento de Componentes Aeroespaciais", image: "projects/pcp-aerospace-modal-light.webp", imageHover: "projects/pcp-aerospace-hover-light.webp", description: "Plataforma B2B desenvolvida para o departamento de componentes aeronáuticos da empresa com foco em planejamento e controle da produção. O sistema integra gestão de demanda, visibilidade de estoque e sequenciamento produtivo em módulos interconectados, oferecendo uma visão unificada dos processos logísticos e operacionais.\nO desafio de design foi traduzir fluxos complexos de dados industriais em interfaces claras e funcionais para diferentes perfis de usuário (do gestor financeiro ao planejador de produção), mantendo consistência e usabilidade em um ambiente de alta criticidade operacional.", tags: ["Design de Interface", "Product"] },
        { id: 4, title: "PCP / Multinacional de Logística\ne Montagem", image: "projects/pcp-assembly-modal-light.webp", imageHover: "projects/pcp-assembly-hover-light.webp", description: "Plataforma de PCP para uma multinacional de logística e montagem voltada à organização e controle da produção fabril, integrando setores, automatizando o sequenciamento e centralizando a visibilidade operacional em tempo real.\nO redesign buscou rever a interface e a usabilidade do sistema, além de modificar e expandir features que impactaram diretamente na redução de erros, paradas de fábrica e retrabalhos. O controle do fluxo logístico, incluindo dwell time e seleção de contêineres e caixas de peças, compõe um dos módulos novos do sistema, contribuindo para a precisão do planejamento em operações de escala.", tags: ["Redesign de Produto", "Arquitetura de Módulos", "Desenvolvimento de Features"] }
      ]
    },
    contact: {
      title: "VAMOS\nCONVERSAR.",
      subtitle: "Seja para um projeto, uma parceria ou só para trocar ideia.",
    }
  },
  en: {
    nav: { home: "Home", projects: "Work", about: "About", contact: "Contact" },
    hero: {
      description: "Product Designer focused on Design Systems and Interaction. I translate complex flows into consistent, scalable interfaces. I prioritize functional clarity and work at the intersection of design and technology."
    },
    about: {
      title: "ABOUT ME",
      description: "Product Designer focused on Design Systems and Interaction. I translate complex flows into consistent, scalable interfaces, prioritizing functional clarity in product ecosystems. I work at the intersection of design and technology, with familiarity in frontend development, QA, and the use of AI applied to product building.",
      experience: [
        {
          year: "JAN 2025 — Present",
          role: "Product Designer",
          company: "Preto no Branco",
          description: "B2B solutions for clients such as VMI Security, Honda, DGT and Digicon, collaborating with backend and frontend engineers from day one. Co-conceptualized our internal design study group in partnership with IDEAR – PUCRS, where I also facilitate workshops."
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
      title: "WORK",
      subtitle: "Projects in which design\nhelped solve business problems.",
      items: [
        { id: 1, title: "Port Security System", image: "projects/port-security-modal-light.webp", imageHover: "projects/port-security-hover-light.webp", description: "Port security platform integrating computer vision, artificial intelligence, and image analysis for real-time cargo inspection and traceability.\nThe product redesign involved restructuring the module architecture and developing new features for an environment where information density and operational precision must coexist.", tags: ["Redesign", "Design System", "Feature Expansion"] },
        {
          id: 2,
          slug: "cybersecurity-platform",
          title: "WSS Platform / Thesis",
          image: "projects/wss-dashboard.webp",
          imageHover: "projects/wss-chat.webp",
          description: "Translating cybersecurity into business decisions: a B2B platform that turns dense technical reports into tangible value for managers with no security background.",
          tags: ["Product Design", "Thesis", "Design System"],
          caseStudy: {
            eyebrow: "Case study",
            client: "WSS Security",
            year: "2025",
            role: "Product Designer",
            sector: "B2B Cybersecurity",
            headline: "Translating cybersecurity into business decisions",
            coverCaption: "Dashboard with a Security Health score, a vulnerability breakdown by category, and a timeline of service actions.",
            disclaimer: "Academic project, developed as a thesis in Communication Design. WSS Security is a real partner company I met through mentorship, who provided the business context for this study. Vulnerabilities, metrics, user names, and other content shown on the screens are fictional, created exclusively for educational and prototyping purposes. No real client or security information from WSS Security is shown here.",
            intro: "WSS Security sells pentesting, monitoring, and security training, but the final report reached the client as a dense document full of technical terms that never turned into decisions.\nThe question that guided the project: how does a digital platform translate technical success into business value for someone who doesn't understand security?",
            sections: [
              {
                title: "The problem",
                body: "WSS Security sells pentesting, monitoring, and information security training, but faced a problem that wasn't technical, it was about communication. The final report of a service reached the client as a dense document, full of terms like CVE, exposure, remediation. For a manager with no technical background, that didn't turn into a decision, it turned into frustration.\nI interviewed WSS's CEO directly. The sentence that defined the project: the company \"strives to adapt the communication process to the client's demand\", but in practice the flow was just kickoff, report delivery, debriefing meeting. No contact in the middle of the process. The client paid and stayed in the dark until the end.\nThat gap led to the question that guided the project: how does a digital platform translate technical success into business value for someone who doesn't understand security?"
              },
              {
                title: "Who feels this pain",
                body: "I built the persona Carla, CEO of a mid-sized company, results-oriented, without technical IT vocabulary, but responsible for justifying the security investment to the board. Mapping her journey across the service, the biggest friction point wasn't the final delivery, it was the silence during the execution of the test. With no visibility into progress, it felt like paying for something invisible.\nThat finding shifted the project's priority: the product couldn't just be \"a prettier report\". It had to be a continuous communication channel."
              },
              {
                title: "Process",
                body: "I ran a heuristic analysis of three direct competitors (PlexTrac, Darwin Attack, Tenable) against Nielsen's 10 heuristics before designing any screen. This established, for example, that filters taking up excessive vertical space was a recurring market mistake to avoid. I used Jesse James Garrett's 5 elements model to structure the project from strategy to surface, with sitemap and interaction flow validated before moving to wireframes."
              },
              {
                title: "Design decisions",
                body: "The platform is organized into four modules, plus the login flow: Feed, with service updates and educational content published by the WSS team; Dashboard, the center of the experience; Documents, which gathers reports, tutorials, and vulnerability monitoring translated into business risk; and Chat, the direct channel to the team.\nThe dashboard works as a translator, not as a technical panel. Instead of listing vulnerabilities by CVSS, the central indicator is a \"Security Health\" score (0 to 1000) paired with a radar chart by risk category."
              },
              {
                title: "Layered findings",
                body: "Each row of the \"Findings\" table opens a modal that separates the information into three layers: first why this matters for the business (not for the technical team), then what we recommend doing, and only then the raw technical evidence. It's the same logic as the Executive Summary WSS already used in reports, only applied piece by piece, at the moment the data appears, not all at once in a long, dense document.",
                annotated: {
                  src: "projects/wss-modal.webp",
                  alt: "A finding modal: business risk, recommendation, and technical evidence in separate layers.",
                  notes: [
                    { title: "Identification", body: "This ID comes from CVE (Common Vulnerabilities and Exposures), an internationally recognized database listing cybersecurity flaws and vulnerabilities." },
                    { title: "Context and Impact", body: "The 'Why this matters' and 'Recommendation' sections were designed for the non-technical client. Here, we translate technical risk into financial impact, the information needed to prioritize demands and authorize the fix." },
                    { title: "Technical Evidence", body: "This section targets the company's IT professional. They don't need the 'translation', they need the technical proof to execute the fix. By putting Impact and Evidence on the same page, the platform aligns the board's expectations with technical execution." }
                  ]
                }
              },
              {
                title: "Continuous chat",
                body: "Since the biggest pain point was the silence during execution, the Chat module (inspired by ClickUp and Discord) allows thematic channels per critical vulnerability and one-click video calls, without swapping e-mails to escalate an urgent problem. This way Carla doesn't have to wait for the final report to know what's going on.\nThere was also a conscious scope cut: I left the WSS admin view (a panel for the internal team to publish content and register clients) noted as a future evolution, to focus the MVP entirely on the client experience.",
                images: [
                  { src: "projects/wss-chat.webp", caption: "Chat module with thematic channels, participants, and quick actions like Report Incident." }
                ]
              },
              {
                title: "Result",
                body: "The prototype shows that design can break the technical barrier on three fronts: visual abstraction (data that communicates, converting technical logs into clear indicators), contextual translation (risk mapped into financial and reputational impact), and continuous collaboration (the end of silence between specialist and client).\nThe next steps follow a phased roadmap: in the medium term, a responsive mobile version, so decision-making doesn't depend on access to a computer; in the long term, a history of past reports and bookmarks in the feed, so the client can track the evolution of their security over time."
              },
              {
                title: "What I take from this project",
                body: "Understanding that in technical B2B, the right interface isn't the one that shows the most data, it's the one that decides what to hide and in what order to reveal it.\nThe project's biggest usability gain didn't come from a new component: it came from a content decision, removing CVSS from the first reading layer. On its own, a technical code doesn't communicate risk to someone outside the field, it only proves that something exists. By reorganizing the same information into layers — business first, then recommendation, then technical evidence last — the same data started serving two different audiences on the same screen, without one getting in the other's way. Translation, in design, is less about adding explanation and more about sequencing what's already there."
              }
            ],
            results: {
              title: "Results",
              items: [
                { value: "3 layers", label: "business risk, recommendation and technical evidence, in that order" },
                { value: "4 modules", label: "feed, dashboard, documents and chat in a single platform" },
                { value: "1 channel", label: "continuous chat removes the silence during execution" }
              ]
            },
            backToProjects: "Back to projects",
            nextLabel: "Next project"
          }
        },
        { id: 3, title: "PCP / Aerospace Components Department", image: "projects/pcp-aerospace-modal-light.webp", imageHover: "projects/pcp-aerospace-hover-light.webp", description: "B2B platform built for the company's aeronautical components department, focused on production planning and control. The system integrates demand management, inventory visibility, and production sequencing across interconnected modules, providing a unified view of logistics and operational processes.\nThe design challenge was translating complex industrial data flows into clear, functional interfaces for different user profiles (from financial managers to production planners), while maintaining consistency and usability in a high-criticality operational environment.", tags: ["Interface Design", "Product"] },
        { id: 4, title: "PCP / Logistics &\nAssembly Multinational", image: "projects/pcp-assembly-modal-light.webp", imageHover: "projects/pcp-assembly-hover-light.webp", description: "Production planning and control platform for a logistics and assembly multinational, focused on organizing and controlling factory production by integrating departments, automating sequencing, and centralizing operational visibility in real time.\nThe redesign revisited the system's interface and usability, while modifying and expanding features that directly reduced errors, factory downtime, and rework. Logistics flow control — including dwell time and the selection of containers and parts boxes — is one of the new modules in the system, contributing to planning precision in large-scale operations.", tags: ["Product Redesign", "Module Architecture", "Feature Development"] }
      ]
    },
    contact: {
      title: "LET'S\nTALK.",
      subtitle: "Whether it's a project, a partnership, or just a conversation — reach out."
    }
  }
};
