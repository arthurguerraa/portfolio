import { useEffect, useRef } from "react";

const CHARACTERS =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";

interface MatrixRainProps {
  className?: string;
  opacity?: number;
}

export function MatrixRain({ className, opacity = 0.15 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let columns: number;
    let drops: number[];

    const fontSize = 16;

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
      columns = Math.floor(canvasEl.width / fontSize);
      drops = new Array(columns).fill(1);
    }

    function draw() {
      if (!ctx || !canvas) return;

      // fundo semi-transparente por cima do frame anterior (cria o rastro)
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}