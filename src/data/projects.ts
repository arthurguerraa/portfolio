import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cinetrack",
    title: "CineTrack",
    description:
      "Plataforma de avaliação de filmes com listas personalizadas e ranking ponderado entre nota do TMDB e avaliações da comunidade.",
    problem:
      "Resolve o problema de 'onde eu guardo minha opinião sobre filmes que assisti', de um jeito mais pessoal do que só confiar na nota de um agregador externo.",
    role:
      "Desenvolvido sozinho, do zero — banco de dados, API REST e frontend. Responsável pela modelagem do banco (incluindo relacionamentos N:N entre filme/gênero e lista/filme), toda a arquitetura do backend e o frontend inteiro, incluindo design system e componentes reutilizáveis.",
    techStack: [
      "HTML5",
      "Tailwind CSS v4",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "bcrypt",
    ],
    highlights: [
      "Autenticação com verificação de email por código, rate limiting e hash de senha",
      "Ranking de filmes por média ponderada (nota TMDB + avaliações da comunidade)",
      "Modelagem de banco com relacionamentos N:N (filme/gênero, lista/filme)",
      "Integração com API do TMDB e envio de email transacional via Nodemailer/Gmail SMTP",
      "Camadas de segurança com Helmet e express-rate-limit",
    ],
    imageUrl: "/src/assets/images/cinetrack-preview.png", /* colocar o print do projeto */
    liveUrl: undefined,
    repoUrl: "https://github.com/arthurguerraa/cinetrack-front-end", 
    featured: true,
  },
  {
    id: "goal-radar",
    title: "Goal Radar",
    description:
      "Plataforma de análise estatística de futebol com métricas de desempenho de times por liga e rodada.",
    problem:
      "Processa dados históricos de partidas para gerar padrões de gols, escanteios e cartões dentro e fora de casa, facilitando análise de desempenho por liga e rodada.",
    role:
      "Responsável pelo desenvolvimento front-end completo da aplicação, desde a arquitetura de arquivos e sistema de design até a integração com a API REST desenvolvida pelo parceiro de back-end.",
    techStack: ["HTML", "CSS", "JavaScript", "REST API", "JWT", "Git", "GitHub Pages"],
    highlights: [
      "Sistema de design próprio com variáveis CSS e componentes seguindo padrão BEM",
      "Fluxo completo de autenticação: cadastro, verificação por código OTP, login e recuperação de senha",
      "Dashboard interativo com seletor de ligas e navegação entre rodadas",
      "Área logada com edição inline de perfil e configurações de conta",
      "Componentes globais (navbar/footer) injetados dinamicamente via JavaScript",
      "Skeleton loading e feedback visual durante requisições à API",
    ],
    imageUrl: "/src/assets/images/goal-radar-preview.png", /* colocar o print do projeto */
    liveUrl: undefined,
    repoUrl: "https://github.com/arthurguerraa/Goal-Radar", 
    featured: false,
  },
];