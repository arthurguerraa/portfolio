import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiOpenjdk,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "@icons-pack/react-simple-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { skills } from "@/data/skills";

const ICON_MAP: Record<string, React.ElementType> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  nodedotjs: SiNodedotjs,
  java: SiOpenjdk,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm mb-2">$ cat skills.json</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-10">
          Skills
        </h2>

        <TooltipProvider>
          <div className="space-y-10">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-sm text-muted-foreground mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-5">
                  {group.items.map((skill) => {
                    const Icon = ICON_MAP[skill.iconKey];
                    return (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger
                          render={
                            <div className="text-foreground/70 hover:text-primary transition-colors cursor-default">
                              <Icon size={32} />
                            </div>
                          }
                        />
                        <TooltipContent>
                          <p className="font-mono text-xs">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}