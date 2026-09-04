import { Button } from "@/components/ui/button";
import { MatrixRain } from "@/effects/MatrixRain";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <MatrixRain opacity={0.15} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-primary text-sm mb-4">$ whoami</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-foreground mb-4">
          Arthur Guerra
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-2">
          Desenvolvedor Full Stack
        </p>

        <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
          Construo aplicações do banco de dados à interface, com foco em código
          limpo e experiências bem pensadas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="font-mono"
            render={<a href="#projetos">Ver Projetos</a>}
          />

          <Button
            size="lg"
            variant="outline"
            className="font-mono"
            render={
              <a href="/curriculo-arthur-guerra.pdf" download>
                Baixar CV
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
