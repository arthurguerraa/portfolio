import { TerminalText } from "@/components/shared/TerminalText";

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm mb-2">$ cat sobre-mim.txt</p>

        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-8">
          Sobre mim
        </h2>

        <div className="space-y-5">
          <TerminalText>
            Comecei minha formação técnica em Desenvolvimento de Sistemas na
            ETEC Professor Basilides de Godoy, e atualmente curso Análise e
            Desenvolvimento de Sistemas na FATEC Carapicuíba, aprofundando
            essa base a cada semestre.
          </TerminalText>

          <TerminalText>
            Inicialmente foquei em projetos front-end e conforme
            fui me aprofundando em backend e banco de dados na
            faculdade, fui aos poucos criando aplicações full-stack, para
            entender melhor e ter um maior controle da arquitetura do
            projeto.
          </TerminalText>
        </div>
      </div>
    </section>
  );
}