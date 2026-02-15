import { useEffect, useRef } from "react";

type ColumnState = {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
};

const SYMBOLS = ["0", "1"];

type BinaryRainBackgroundProps = {
  lightX: number;
  lightY: number;
  pulseStrength: number;
};

export default function BinaryRainBackground({
  lightX,
  lightY,
  pulseStrength,
}: BinaryRainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const columns: ColumnState[] = [];
    let animationFrame = 0;

    const createColumns = () => {
      const width = window.innerWidth;
      const columnCount = Math.max(Math.floor(width / 18), 36);
      columns.length = 0;

      for (let i = 0; i < columnCount; i += 1) {
        const fontSize = 14 + Math.random() * 12;
        columns.push({
          x: (width / columnCount) * i,
          y: Math.random() * -window.innerHeight,
          speed: 1 + Math.random() * 2.2,
          size: fontSize,
          opacity: 0.2 + Math.random() * 0.65,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createColumns();
    };

    const draw = () => {
      context.fillStyle = "rgba(2, 6, 23, 0.2)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      columns.forEach((column) => {
        const char = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        const flicker = 0.45 + Math.random() * 0.55;

        context.font = `600 ${column.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        context.fillStyle = `rgba(226, 232, 240, ${column.opacity * flicker})`;
        context.fillText(char, column.x, column.y);

        if (Math.random() > 0.985) {
          context.fillStyle = "rgba(186, 230, 253, 0.9)";
          context.fillText(char, column.x, column.y);
        }

        column.y += column.speed;

        if (column.y > canvas.height + column.size * 2) {
          column.y = -column.size * (2 + Math.random() * 10);
          column.opacity = 0.2 + Math.random() * 0.7;
          column.speed = 1 + Math.random() * 2.3;
        }
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/55" />
      <div
        className="pointer-events-none absolute inset-0 transition-[background,opacity] duration-300"
        style={{
          background: `radial-gradient(520px circle at ${lightX}% ${lightY}%, rgba(125, 211, 252, ${pulseStrength}), rgba(2, 6, 23, 0) 70%)`,
        }}
      />
    </div>
  );
}
