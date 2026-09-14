import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { LinkedInIcon } from "@/components/shared/LinkedInIcon";
import { TerminalText } from "@/components/shared/TerminalText";

const EMAIL = "arthurguerra9910@gmail.com"; 

async function handleCopyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    toast.success("Email copiado!", {
      description: EMAIL,
    });
  } catch {
    toast.error("Não foi possível copiar o email.");
  }
}

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-2">$ contact --me</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-4">
          Vamos conversar?
        </h2>
        <TerminalText className="text-muted-foreground mb-10">
          Estou aberto a oportunidades e projetos. Entre em contato por
          qualquer um dos canais abaixo.
        </TerminalText>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/arthurguerraa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <SiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/arthurguerraa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <LinkedInIcon size={28} />
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copiar email"
            className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
          >
            <Mail size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}