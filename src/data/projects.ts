import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cinetrack",
    title: "CineTrack",
    description:
      "Plataforma de avaliação de filmes com listas personalizadas e ranking que junta as notas do TMDB e as avaliações da comunidade.",
    problem:
      "Uma plataforma de avaliação de filmes onde o usuário busca títulos, avalia com nota e comentário, cria listas personalizadas (públicas ou privadas) e acompanha um ranking dos filmes mais bem avaliados. Desenvolvido para explorar a construção de uma aplicação completa do zero, unindo dados externos (TMDB) com avaliações reais da comunidade.",
    role:
      "Desenvolvi o projeto todo, desde o banco de dados, API REST, backend até o frontend.",
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
    screenshots: [
      {
        imageUrl: "/src/assets/images/cinetrack-home.png", /* TODO: substituir pelo print real */
        title: "Home",
        description:
          "Tela inicial com filmes em destaque e busca rápida de títulos.",
      },
      {
        imageUrl: "/src/assets/images/cinetrack-filme.png", /* TODO: substituir pelo print real */
        title: "Detalhe do filme",
        description:
          "Página individual do filme com nota ponderada, avaliações da comunidade e opção de adicionar a uma lista.",
      },
      {
        imageUrl: "/src/assets/images/cinetrack-listas.png", /* TODO: substituir pelo print real */
        title: "Minhas listas",
        description:
          "Listas personalizadas criadas pelo usuário, com opção de torná-las públicas ou privadas.",
      },
    ],
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
      "Plataforma de análise estatística de futebol que processa dados históricos de partidas para gerar métricas de desempenho de times por liga e rodada, incluindo padrões de gols, escanteios e cartões dentro e fora de casa. Desenvolvido em parceria, com foco no front-end da aplicação.",
    role:
      "Responsável pelo desenvolvimento front-end da aplicação, desde a arquitetura de arquivos e sistema de design até a integração com a API REST desenvolvida pelo parceiro de back-end.",
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
    screenshots: [
      {
        imageUrl: "/src/assets/images/goal-radar-dashboard.png", /* TODO: substituir pelo print real */
        title: "Dashboard",
        description:
          "Painel principal com seletor de ligas e navegação entre rodadas, exibindo as tabelas de métricas estatísticas.",
      },
      {
        imageUrl: "/src/assets/images/goal-radar-login.png", /* TODO: substituir pelo print real */
        title: "Login e cadastro",
        description:
          "Fluxo de autenticação com verificação de e-mail por código OTP e recuperação de senha.",
      },
      {
        imageUrl: "/src/assets/images/goal-radar-perfil.png", /* TODO: substituir pelo print real */
        title: "Perfil do usuário",
        description:
          "Área logada com edição inline de informações e configurações de conta.",
      },
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/arthurguerraa/Goal-Radar",
    featured: false,
  },
];