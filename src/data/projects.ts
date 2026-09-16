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
    imageUrl: "/src/assets/images/cinetrack-index.png", /* colocar o print do projeto */
    screenshots: [
      {
        imageUrl: "/images/cinetrack-home.png", 
        title: "Home",
        description:
          "Tela inicial com filmes em destaque e busca rápida de títulos.",
      },
      {
        imageUrl: "/images/cinetrack-perfil.png", 
        title: "Perfil do Usuário",
        description:
          "Página de perfil do usuário onde apresenta informações como nome, email e avaliações de filmes já realizadas.",
      },
      {
        imageUrl: "/images/cinetrack-editar-avaliacao.png", 
        title: "Editar avaliação",
        description:
          "Janela onde o usuário pode editar a nota e comentário já realizado sobre o filme.",
      },
      {
        imageUrl: "/images/cinetrack-minhas-listas.png", 
        title: "Minhas listas",
        description:
          "Página das listas que mostra todas as litas que o usuário criou e uma opção para criar uma lista nova.",
      },
      {
        imageUrl: "/images/cinetrack-editar-lista.png", 
        title: "Editar Lista",
        description:
          "Janela onde o usuário pode alterar o nome, a descrição e a visibilidade da lista.",
      },
      {
        imageUrl: "/images/cinetrack-ver-lista.png", 
        title: "Ver Filmes",
        description:
          "Janela onde o usuário pode visualizar os filmes que foram adicionados na lista.",
      },
      {
        imageUrl: "/images/cinetrack-ranking.png", 
        title: "Ranking",
        description:
          "Página onde o usuário consegue ver os filmes mais bem avaliados pela comunidade podendo escolher o top 10, top 20 e top 50.",
      },
      {
        imageUrl: "/images/cinetrack-cadastro.png", 
        title: "Cadastro",
        description:
          "Página onde o usuário faz o seu cadastro inserindo seu nome, email, senha e confirmando a senha.",
      },
      {
        imageUrl: "/images/cinetrack-confirmar-email.png", 
        title: "Confirmar Email",
        description:
          "Página onde o usuário confirma o seu email inserindo um código de 6 dígitos que foi enviado para o email informado na tela de cadastro.",
      },
      {
        imageUrl: "/images/cinetrack-login.png", 
        title: "Login",
        description:
          "Página onde o usuário realiza login com seu email e senha.",
      },
      {
        imageUrl: "/images/cinetrack-esqueci-senha.png", 
        title: "Esqueci Senha",
        description:
          "Página onde o usuário informa seu email para receber o código para atualização de senha.",
      },
      {
        imageUrl: "/images/cinetrack-redefinir-senha.png", 
        title: "Redefinir Senha",
        description:
          "Página onde o usuário insere o código, a nova senha e a confirmação da nova senha da sua conta.",
      },
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/arthurguerraa/cinetrack-front-end",
    featured: true,
  },
  {
  id: "simulado-enade-2021",
  title: "Simulado ENADE 2021 — Ciência da Computação",
  description:
    "Simulado digital com as 35 questões objetivas do componente específico da prova do ENADE 2021 para Ciência da Computação, com correção, estatísticas oficiais e cronômetro.",
  problem:
    "Refatoração completa de um projeto acadêmico legado (HTML/CSS/JS vanilla) para uma stack moderna, desenvolvido para a disciplina de Programação em Microinformática (PMI) na FATEC Carapicuíba, sob orientação da Profa. MSc. Rita Felix.",
  role:
    "Responsável pela reescrita completa do projeto: arquitetura de pastas, separação de regras de negócio (domínio) da interface, migração das 35 questões do arquivo legado e correção de diversos bugs identificados na versão original.",
  techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "React Router"],
  highlights: [
    "Separação de domínio (regras de negócio puras e testáveis) da camada de UI, com hooks dedicados fazendo a ponte entre os dois",
    "Cronômetro de 2 horas persistente entre reloads, com ajuste de bugs de cálculo de tempo negativo",
    "Correção imediata com comparativo de estatísticas oficiais de acerto (SP, Sudeste, Brasil) por questão",
    "Tratamento correto das duas questões oficialmente anuladas pelo INEP, sem penalizar a pontuação",
    "Acessibilidade: navegação completa por teclado, focus trap em modais com <dialog> nativo, aria-live no timer",
    "Modais reescritos para eliminar memory leak de listeners empilhados a cada abertura",
  ],
  imageUrl: "/images/enade-preview.png", 
  screenshots: [
    {
      imageUrl: "/images/enade-simulado.png", 
      title: "Tela do simulado",
      description:
        "Navegação rápida entre as 35 questões, com indicação visual de respondida, pendente e atual.",
    },
    {
      imageUrl: "/images/enade-resultado.png", 
      title: "Resultado",
      description:
        "Aproveitamento geral com métricas de acerto, erro e tempo total de prova.",
    },
    {
      imageUrl: "/images/enade-gabarito.png", 
      title: "Gabarito comparativo",
      description:
        "Comparação questão a questão entre a resposta do usuário e o gabarito oficial do INEP.",
    },
  ],
  liveUrl: undefined, 
  repoUrl: "https://arthurguerraa.github.io/projeto-simulado-enade/#/", 
  featured: false,
},
  {
  id: "the-batman-landing",
  title: "The Batman — Landing Page",
  description:
    "Landing page fan-made inspirada no filme The Batman (2022), com foco em animações, efeitos visuais temáticos e boas práticas de performance e acessibilidade.",
  problem:
    "Projeto desenvolvido para ir além de uma página estática simples, explorando efeitos visuais avançados (parallax, glitch, chuva animada em canvas, efeito lanterna) e interatividade rica (lightbox, carrossel, player de áudio customizado), tudo em JavaScript puro, sem frameworks ou bibliotecas externas.",
  role:
    "Desenvolvido sozinho, do zero, incluindo toda a estrutura HTML semântica, o tema visual customizado no Tailwind e todas as animações e interações em JavaScript vanilla.",
  techStack: ["HTML5", "Tailwind CSS v4", "JavaScript"],
  highlights: [
    "Preloader customizado com barra de progresso baseada no carregamento real das imagens",
    "Efeito parallax no Hero e chuva animada em <canvas> com ângulo e velocidade configuráveis",
    "Efeito 'lanterna' que revela a imagem do elenco ao redor do cursor",
    "Indicador de seção ativa no menu sincronizado ao scroll via IntersectionObserver",
    "Player de áudio customizado com Web Audio API, com loop sample-accurate de trecho da trilha sonora",
    "Trailer carregado sob demanda (lazy load do iframe do YouTube) só após clique do usuário",
    "Lightbox da galeria com navegação por teclado (setas e Esc)",
    "Atenção a acessibilidade: aria-label, aria-expanded, contraste revisado para WCAG AA",
  ],
  imageUrl: "/images/batman-hero.png", 
  screenshots: [
    {
      imageUrl: "/images/batman-hero.png", // TODO: substituir pelo print real
      title: "Hero",
      description:
        "Seção inicial com efeito parallax, chuva animada em canvas e glitch no título ao passar o mouse.",
    },
    {
      imageUrl: "/images/batman-galeria.png", 
      title: "Galeria",
      description:
        "Lightbox de cenas do filme com navegação por teclado e cursor customizado.",
    },
    {
      imageUrl: "/images/batman-avaliacoes.png", 
      title: "Avaliações",
      description:
        "Carrossel automático de críticas com contagem numérica animada nas notas.",
    },
  ],
  liveUrl: "https://arthurguerraa.github.io/landing-page-the-batman/",
  repoUrl: "https://github.com/arthurguerraa/landing-page-the-batman",
  featured: false,
},
];