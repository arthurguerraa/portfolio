import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-primary text-sm mb-2">$ ls projetos/</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-10">
          Projetos
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.id} to={`/projetos/${project.id}`}>
              <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="font-mono">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}