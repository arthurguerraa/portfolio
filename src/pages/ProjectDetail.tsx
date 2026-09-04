import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="py-16 px-6 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-mono text-primary text-sm mb-2">$ problema</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h2 className="font-mono text-primary text-sm mb-2">$ minha_funcao</h2>
            <p className="text-muted-foreground leading-relaxed">{project.role}</p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="font-mono text-primary text-sm mb-2">$ destaques</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.result && (
            <div>
              <h2 className="font-mono text-primary text-sm mb-2">$ resultado</h2>
              <p className="text-muted-foreground leading-relaxed">{project.result}</p>
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-10">
          {project.repoUrl && (
            <Button asChild variant="outline" className="font-mono">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <SiGithub size={16} className="mr-2" />
                Código
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild className="font-mono">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Ver ao vivo
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}