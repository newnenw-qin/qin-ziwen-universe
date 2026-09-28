"use client";

import { galaxies, type View } from "@/lib/data";
import { audio } from "@/lib/audio";
import { useMemo, useState } from "react";

const tones: Record<string, string> = {
  silver:
    "radial-gradient(circle at 30% 28%, #cfc9be, #6f6b66 42%, #1b1c22 72%)",
  violet:
    "radial-gradient(circle at 30% 28%, #b7a8c4, #4d4458 44%, #14131a 74%)",
  gold: "radial-gradient(circle at 32% 26%, #e2d3b4, #8a734c 46%, #17140f 76%)",
  blue: "radial-gradient(circle at 30% 28%, #c9d4de, #4a5868 44%, #10141a 74%)",
};

export default function HomeGalaxy({
  parallax,
  onNavigate,
  onHot,
}: {
  parallax: { x: number; y: number };
  onNavigate: (view: View) => void;
  onHot: (hot: boolean) => void;
}) {
  const [active, setActive] = useState<string | null>(null);
  const dust = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        left: `${8 + ((i * 37) % 84)}%`,
        top: `${10 + ((i * 53) % 78)}%`,
        delay: i * 0.2,
      })),
    []
  );

  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/video/universe.mp4?v=2"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,10,0.55),rgba(5,6,10,0.88)_72%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80" />

      {dust.map((d, i) => (
        <span
          key={i}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-white/40"
          style={{
            left: d.left,
            top: d.top,
            transform: `translate(${parallax.x * (4 + i * 0.2)}px, ${parallax.y * (3 + i * 0.15)}px)`,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-[46%] z-10 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-ui text-[10px] tracking-[0.55em] text-[#c4a574]/80">
          QIN ZIWEN
        </p>
        <h1 className="font-display mt-4 text-[clamp(40px,7vw,86px)] font-light leading-[0.92] tracking-[0.08em] text-[#f3efe6]">
          PERSONAL
          <br />
          UNIVERSE
        </h1>
        <p className="font-ui mt-6 text-[10px] tracking-[0.38em] text-[#9c9890]">
          ART MARKET · BRAND · CONTENT · AIGC
        </p>
        <p className="font-ui mt-10 text-[9px] tracking-[0.5em] text-[#6f6c66]">
          ENTER THE UNIVERSE
        </p>
      </div>

      {galaxies.map((g, i) => {
        const hot = active === g.id;
        return (
          <button
            key={g.id}
            className="absolute z-20 border-0 bg-transparent p-0"
            style={{
              left: g.x,
              top: g.y,
              transform: `translate(-50%, -50%) translate(${parallax.x * (8 + i * 2)}px, ${parallax.y * (6 + i)}px)`,
            }}
            onMouseEnter={() => {
              setActive(g.id);
              onHot(true);
              audio.hover();
            }}
            onMouseLeave={() => {
              setActive(null);
              onHot(false);
            }}
            onClick={() => onNavigate(g.id)}
            aria-label={g.title}
          >
            <span
              className={`planet block transition-transform duration-700 ${hot ? "is-hot scale-125" : "scale-100"}`}
              style={{
                width: g.size,
                height: g.size,
                background: tones[g.tone],
                boxShadow: hot
                  ? "0 0 40px rgba(196,165,116,0.16), inset 0 0 30px rgba(255,255,255,0.08)"
                  : "0 0 24px rgba(0,0,0,0.45)",
              }}
            />
            <span
              className={`font-ui mt-3 block text-center text-[10px] tracking-[0.32em] transition-opacity duration-500 ${hot ? "opacity-100" : "opacity-40"}`}
            >
              {g.index} {g.title}
            </span>
            <span
              className={`font-cn mt-1 block text-center text-[11px] text-[#b7b3aa] transition-opacity duration-500 ${hot ? "opacity-80" : "opacity-0"}`}
            >
              {g.subtitle}
            </span>
          </button>
        );
      })}

      <button
        className="absolute left-[12%] top-[52%] z-20 border-0 bg-transparent"
        style={{
          transform: `translate(${parallax.x * 5}px, ${parallax.y * 8}px)`,
        }}
        onMouseEnter={() => {
          onHot(true);
          audio.hover();
        }}
        onMouseLeave={() => onHot(false)}
        onClick={() => onNavigate("projects")}
      >
        <span className="block h-2 w-2 rounded-full bg-[#e8e4da]/70" />
        <span className="font-ui mt-2 block text-[8px] tracking-[0.28em] text-[#7a776f]">
          PROJECTS
        </span>
      </button>
    </div>
  );
}
