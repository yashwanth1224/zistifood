import { Icon } from "@/components/icons";
import { ecosystem, type BrandCard } from "@/content/site";

const tones: Record<BrandCard["tone"], { card: string; badge: string }> = {
  red: { card: "bg-brand-dark text-white", badge: "bg-white text-brand-dark" },
  yellow: { card: "bg-tone-yellow text-black", badge: "bg-black text-tone-yellow" },
  purple: { card: "bg-tone-purple text-black", badge: "bg-black text-tone-purple" },
  pink: { card: "bg-tone-pink text-black", badge: "bg-brand-dark text-white" },
};

const TRIANGLES: { points: string; fill: "a" | "b"; opacity?: number }[] = [
  { points: "0,0 170,0 0,190", fill: "a" },
  { points: "0,190 130,95 100,340", fill: "b" },
  { points: "0,190 100,340 0,430", fill: "a", opacity: 0.8 },
  { points: "100,340 190,470 0,430", fill: "b", opacity: 0.9 },
  { points: "0,430 150,560 0,650", fill: "a" },
  { points: "0,650 120,600 80,800", fill: "b", opacity: 0.85 },
  { points: "0,650 80,800 0,800", fill: "a", opacity: 0.7 },
];

function Triangles({ id, className }: { id: string; className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 800" preserveAspectRatio="xMinYMid slice" className={className}>
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9C988" />
          <stop offset="1" stopColor="#8C6A3C" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C8A15A" />
          <stop offset="1" stopColor="#4A3519" />
        </linearGradient>
      </defs>
      {TRIANGLES.map((t) => (
        <polygon key={t.points} points={t.points} fill={`url(#${id}-${t.fill})`} opacity={t.opacity} />
      ))}
      <polygon points="120,60 190,250 60,230" fill="none" stroke="#C8A15A" strokeWidth="1" opacity="0.6" />
      <polygon points="110,500 190,640 40,700" fill="none" stroke="#C8A15A" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function Ecosystem() {
  return (
    <section className="relative overflow-x-clip bg-black px-4 py-20 text-white md:py-28">
      <Triangles id="tri-left" className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-28 md:block lg:w-48" />
      <Triangles
        id="tri-right"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-28 -scale-x-100 md:block lg:w-48"
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-[clamp(4rem,14vw,11rem)] font-black leading-none tracking-tighter">{ecosystem.wordmark}</h2>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/70 md:text-sm">{ecosystem.tagline}</p>
        <ul className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
          {ecosystem.brands.map((brand) => (
            <li
              key={brand.name}
              className={`flex flex-col rounded-3xl p-6 transition hover:-translate-y-1 ${tones[brand.tone].card}`}
            >
              <span
                aria-hidden="true"
                className={`grid size-12 place-items-center rounded-xl text-xl font-black italic ${tones[brand.tone].badge}`}
              >
                {brand.name[0]}
              </span>
              <h3 className="mt-5 text-xl font-bold">{brand.name}</h3>
              <p className="mt-1 text-sm font-medium">{brand.tagline}</p>
              <p className="mt-2 text-sm opacity-90">{brand.body}</p>
              <a href={brand.href} className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold underline-offset-4 hover:underline">
                {ecosystem.cta}
                <span className="sr-only"> {brand.name}</span>
                <Icon name="arrow-right" className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
