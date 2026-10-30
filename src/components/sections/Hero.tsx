import type { CSSProperties } from "react";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { StoreButtons } from "@/components/StoreButtons";
import { hero } from "@/content/site";

type DriftStyle = CSSProperties & { "--drift-x": string };

const COLORS = ["#FFB547", "#FF7A1A", "#E23744", "#FFA07A"];

const particles = Array.from({ length: 28 }, (_, i) => {
  const size = 2 + (i % 4);
  const fleck = i % 5 === 0;
  const style: DriftStyle = {
    left: `${(i * 31 + 11) % 100}%`,
    top: `${40 + ((i * 23) % 55)}%`,
    width: fleck ? size * 3 : size,
    height: size,
    background: COLORS[i % COLORS.length],
    boxShadow: `0 0 ${size * 3}px ${COLORS[i % COLORS.length]}`,
    animationDuration: `${8 + ((i * 7) % 9)}s`,
    animationDelay: `-${(i * 3) % 10}s`,
    "--drift-x": `${((i % 5) - 2) * 25}px`,
  };
  return style;
});

export function Hero({ onOpenAuth }: { onOpenAuth?: (mode: "login" | "signup") => void }) {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#0a0502] px-4 py-16 text-center text-white">
      {/* Background Gradients & Fallback */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_20%_25%,#8b3309_0%,transparent_50%),radial-gradient(ellipse_at_80%_75%,#994005_0%,transparent_50%),radial-gradient(ellipse_at_50%_100%,#b45309_0%,transparent_45%)]"
      />
      <img
        src="/hero-bg.jpg"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Central Pulsing Warm Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[min(90vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,140,40,0.38)_0%,transparent_68%)] animate-pulse-bg"
      />
      {/* Dark Vignette Overlay for Text Legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/45 to-black/85"
      />

      {/* Floating Ember Particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((style, i) => (
          <span key={i} className="absolute rounded-full animate-drift" style={style} />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 my-auto flex w-full max-w-3xl flex-col items-center py-8">
        {/* Massive Zisti Logo with Cloche & Tagline */}
        <Logo className="h-28 sm:h-36 md:h-44 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-105" />

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          <span className="block drop-shadow-md">{hero.titleLead}</span>
          <span className="block text-white/95 drop-shadow-md">{hero.titleRest}</span>
        </h1>

        <p className="mt-3 max-w-md text-base text-white/85 drop-shadow md:text-lg">
          {hero.subtitle}
        </p>

        {/* Store Buttons */}
        <StoreButtons className="mt-8 justify-center" />
      </div>

      {/* Bouncing Scroll Down Button */}
      <button
        type="button"
        onClick={() => {
          document.getElementById("value-prop")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="relative z-10 flex flex-col items-center gap-1.5 pb-2 text-xs font-medium tracking-wide text-white/80 transition hover:text-white cursor-pointer"
      >
        <span>{hero.scrollLabel}</span>
        <Icon name="chevron-down" className="size-5 animate-bounce-arrow text-white/90" />
      </button>
    </section>
  );
}
