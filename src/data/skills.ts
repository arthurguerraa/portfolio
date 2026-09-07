export interface Skill {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Front-end",
    items: [
      { name: "HTML", iconKey: "html5" },
      { name: "CSS", iconKey: "css3" },
      { name: "JavaScript", iconKey: "javascript" },
      { name: "TypeScript", iconKey: "typescript" },
      { name: "React", iconKey: "react" },
      { name: "Tailwind CSS", iconKey: "tailwindcss" },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", iconKey: "nodedotjs" },
      { name: "Java", iconKey: "java" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [{ name: "MySQL", iconKey: "mysql" }],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", iconKey: "git" },
      { name: "GitHub", iconKey: "github" },
      { name: "Figma", iconKey: "figma" },
    ],
  },
];