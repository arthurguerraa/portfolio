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
            Comecei com projetos mais focados no front-end, porém conforme fui aprendendo backend e banco de dados no curso técnico e na faculdade, fui aos poucos criando aplicações full-stack, para entender melhor e ter um maior controle da arquitetura do projeto. 
          </p>
        </div>
      </div>
    </section>
  );
}