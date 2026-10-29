import type { CSSProperties } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { StoreButtons } from "@/components/StoreButtons";
import { hero } from "@/content/site";

type DriftStyle = CSSProperties & { "--drift-x": string };

const COLORS = ["#FFB547", "#FF7A1A", "#E23744"];

const particles = Array.from({ length: 24 }, (_, i) => {
  const size = 2 + (i % 4);
  const fleck = i % 5 === 0;
  const style: DriftStyle = {
    left: `${(i * 37 + 7) % 100}%`,
    top: `${55 + ((i * 23) % 45)}%`,
    width: fleck ? size * 3 : size,
    height: size,
    background: COLORS[i % COLORS.length],
    boxShadow: `0 0 ${size * 3}px ${COLORS[i % COLORS.length]}`,
    animationDuration: `${9 + ((i * 7) % 10)}s`,
    animationDelay: `-${(i * 5) % 12}s`,
    "--drift-x": `${((i % 5) - 2) * 20}px`,
  };
  return style;
});

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#0b0603] px-4 py-24 text-center text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_20%_30%,#7a2e0a_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,#8a3b06_0%,transparent_50%),radial-gradient(ellipse_at_50%_100%,#b4500f_0%,transparent_45%)]"
      />
      <Image src="/hero-bg.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[min(90vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,140,40,0.35)_0%,transparent_65%)] animate-pulse-bg"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((style, i) => (
          <span key={i} className="absolute rounded-full animate-drift" style={style} />
        ))}
      </div>

      <Logo className="text-5xl md:text-7xl" />
      <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
        <span className="block">{hero.titleLead}</span>
        <span className="block">{hero.titleRest}</span>
      </h1>
      <p className="mt-4 max-w-md text-lg text-white/80">{hero.subtitle}</p>
      <StoreButtons className="mt-8 justify-center" />

      <a
        href="#value-prop"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-sm text-white/80 hover:text-white"
      >
        {hero.scrollLabel}
        <Icon name="chevron-down" className="size-5 animate-bounce-arrow" />
      </a>
    </section>
  );
}
