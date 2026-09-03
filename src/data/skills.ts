export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "Java"],
  },
  {
    category: "Banco de Dados",
    items: ["MySQL"],
  },
  {
    category: "Ferramentas",
    items: ["Git", "GitHub", "Figma"],
  },
];