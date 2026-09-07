export interface Screenshot {
  imageUrl: string;
  title: string;        // ex: "Tela de login"
  description: string;  // o que essa tela faz/mostra
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  techStack: string[];
  highlights?: string[];
  result?: string;
  imageUrl: string;
  screenshots?: Screenshot[];   
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}