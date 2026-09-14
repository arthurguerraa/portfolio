interface TerminalTextProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalText({ children, className = "" }: TerminalTextProps) {
  return (
    <p
      className={`font-mono text-sm sm:text-base text-foreground/85 leading-[1.8] tracking-wide max-w-2xl ${className}`}
    >
      <span className="text-primary mr-2 select-none"></span>
      {children}
    </p>
  );
}