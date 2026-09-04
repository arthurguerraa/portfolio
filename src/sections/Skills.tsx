import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm mb-2">$ cat skills.json</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-10">
          Skills
        </h2>

        <div className="space-y-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-sm text-muted-foreground mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-mono text-sm px-3 py-1"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}