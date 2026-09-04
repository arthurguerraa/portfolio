import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "@/components/shared/LinkedInIcon";
import { Button } from "@/components/ui/button";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:seu-email@exemplo.com", // TODO: trocar pelo seu email real
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/arthurguerraa",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arthurguerraa/",
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-2">$ contact --me</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-4">
          Vamos conversar?
        </h2>
        <p className="text-muted-foreground mb-10">
          Estou aberto a oportunidades e projetos. Entre em contato por
          qualquer um dos canais abaixo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
            <Button
              key={label}
              asChild
              variant="outline"
              size="lg"
              className="font-mono"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon size={18} className="mr-2" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}