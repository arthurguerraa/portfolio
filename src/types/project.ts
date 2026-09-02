export interface Project {
  id: string;
  title: string;
  description: string;        // resumo curto (1-2 frases) pra exibir no card
  problem: string;             // qual problema esse projeto resolve/resolveu
  role: string;                // sua função/responsabilidade no projeto
  techStack: string[];         // ex: ["React", "TypeScript", "Tailwind"]
  highlights?: string[];       // decisões técnicas relevantes (opcional)
  result?: string;             // impacto/resultado, com métrica se tiver (opcional)
  imageUrl: string;            // caminho da imagem de preview
  liveUrl?: string;            // link do projeto no ar (opcional)
  repoUrl?: string;            // link do código (opcional)
  featured?: boolean;          // pra destacar algum projeto específico (opcional)
}