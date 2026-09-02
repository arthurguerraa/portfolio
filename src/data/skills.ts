export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Front-end",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "Express"], // ajuste pra sua stack real
  },
  {
    category: "Ferramentas",
    items: ["Git", "Vite", "Figma"], // ajuste
  },
];