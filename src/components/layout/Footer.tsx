import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/shared/LinkedInIcon";

interface FooterProps {
  showSocialLinks?: boolean;
}

export function Footer({ showSocialLinks = true }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 px-6">
        {showSocialLinks && (
          <div className="flex gap-6">
            <a
              href="https://github.com/arthurguerraa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arthurguerraa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="mailto:seu-email@exemplo.com"
              aria-label="Email"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        )}
        <p className="text-xs text-muted-foreground font-mono">
          © {year} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}