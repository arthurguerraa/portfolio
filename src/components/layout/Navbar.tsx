import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // sempre visível no topo da página
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // rolando pra baixo -> esconde
        setVisible(false);
      } else {
        // rolando pra cima -> mostra
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-background/80 backdrop-blur-md border-b border-border`}
    >
      <nav className="max-w-5xl mx-auto flex justify-center gap-8 px-6 py-4 font-mono text-sm">
        {NAV_LINKS.map((link) => (
          
          <a
            key={link.href}
            href={link.href}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}