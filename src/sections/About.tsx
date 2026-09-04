export function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm mb-2">$ cat sobre-mim.txt</p>

        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-8">
          Sobre mim
        </h2>

        <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <p>
            Comecei minha formação técnica em Desenvolvimento de Sistemas na
            ETEC Professor Basilides de Godoy, e atualmente curso Análise e
            Desenvolvimento de Sistemas na FATEC Carapicuíba, aprofundando
            essa base a cada semestre.
          </p>

          <p>
            O que mais me motiva como desenvolvedor é construir aplicações do
            zero, ponta a ponta — da modelagem do banco de dados à interface
            que o usuário final vai usar. Gosto de entender o problema por
            completo antes de escrever a primeira linha de código, e de tomar
            as decisões de arquitetura que vão sustentar o projeto conforme
            ele cresce.
          </p>

          <p>
            Isso me levou a desenvolver projetos completos sozinho — desde a
            modelagem de banco de dados e autenticação segura, até o design
            system e a experiência de uso da interface — sempre buscando
            entender cada camada da aplicação, não só a parte que é mais
            confortável.
          </p>
        </div>
      </div>
    </section>
  );
}