import { Icon } from "@/components/icons";
import { ecosystem, type BrandCard } from "@/content/site";

const brandLogos: Record<string, string> = {
  Zisti: "brand-zisti",
  Blinkit: "brand-blinkit",
  District: "brand-district",
  Hyperpure: "brand-hyperpure",
};

const tones: Record<BrandCard["tone"], { card: string; badge: string; link: string }> = {
  red: {
    card: "bg-gradient-to-b from-[#E23744] to-[#C0222F] text-white shadow-red-950/40",
    badge: "bg-white text-brand",
    link: "text-white hover:text-white/80",
  },
  yellow: {
    card: "bg-gradient-to-b from-[#F8CB46] to-[#E5B62E] text-neutral-900 shadow-amber-950/20",
    badge: "bg-neutral-900 text-[#F8CB46]",
    link: "text-neutral-900 hover:text-black",
  },
  purple: {
    card: "bg-gradient-to-b from-[#C4B5FD] to-[#A78BFA] text-neutral-950 shadow-purple-950/20",
    badge: "bg-neutral-950 text-[#C4B5FD]",
    link: "text-neutral-950 hover:text-black",
  },
  pink: {
    card: "bg-gradient-to-b from-[#FFD6DC] to-[#FCA5A5] text-neutral-900 shadow-rose-950/20",
    badge: "bg-brand text-white",
    link: "text-neutral-900 hover:text-black",
  },
};

function GoldOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square rounded-full ${className}`}>
      {/* 3D Sphere Body with Realistic Specular Highlight */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,#FFFDE7_0%,#FDE047_15%,#D97706_50%,#92400E_78%,#451A03_100%)] shadow-[0_12px_28px_rgba(0,0,0,0.65),inset_0_-6px_10px_rgba(0,0,0,0.6)]" />
      {/* High-intensity Specular Glint */}
      <div className="absolute left-[22%] top-[16%] h-[24%] w-[32%] -rotate-45 rounded-full bg-white/85 blur-[0.6px]" />
    </div>
  );
}

export function Ecosystem() {
  return (
    <section className="relative overflow-x-clip bg-black px-4 pt-0 pb-24 text-white md:pb-32">
      {/* Iconic Angular Canopy Horizon with 3D Gold Orbs (Screenshot 2 bottom & Screenshot 3 top) */}
      <div className="relative -mt-1 w-full overflow-hidden">
        <svg
          aria-hidden="true"
          className="w-full text-black"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Black canopy sloping inward from left and right */}
          <path d="M0 0L420 140L720 180L1020 140L1440 0V180H0Z" />
          {/* Gold highlight edges */}
          <path
            d="M0 0L420 140L720 180L1020 140L1440 0"
            stroke="url(#gold-edge)"
            strokeWidth="2.5"
            fill="none"
          />
          <defs>
            <linearGradient id="gold-edge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C8A15A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFF275" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C8A15A" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Gold Spheres perched on the canopy ridges */}
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl">
          <GoldOrb className="absolute left-[2%] -top-4 w-10 sm:w-14 md:w-16 drop-shadow-2xl" />
          <GoldOrb className="absolute right-[2%] -top-4 w-10 sm:w-14 md:w-16 drop-shadow-2xl" />
          <GoldOrb className="absolute right-[16%] top-16 hidden w-8 md:block animate-float-slow opacity-90 drop-shadow-xl" />
        </div>
      </div>

      {/* Central Content */}
      <div className="relative mx-auto mt-6 max-w-5xl text-center">
        {/* Massive Gravitas Eternal Wordmark */}
        <h2 className="text-[clamp(4.5rem,15vw,11.5rem)] font-black leading-none tracking-tighter text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.06)] select-none">
          {ecosystem.wordmark}
        </h2>

        {/* Tagline */}
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.35em] text-white/70 md:text-sm">
          {ecosystem.tagline}
        </p>

        {/* 4 Brand Cards Grid */}
        <ul className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
          {ecosystem.brands.map((brand) => (
            <li
              key={brand.name}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${tones[brand.tone].card}`}
            >
              {/* Subtle top inner shine */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                {/* Brand Logo Badge */}
                <div className="size-12 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon name={brandLogos[brand.name] as any} className="size-full" />
                </div>

                {/* Brand Titles & Description */}
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{brand.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider opacity-85">
                  {brand.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  {brand.body}
                </p>
              </div>

              {/* Call to action link */}
              <a
                href={brand.href}
                className={`mt-8 inline-flex items-center gap-1.5 pt-2 text-sm font-bold transition ${tones[brand.tone].link}`}
              >
                <span>{ecosystem.cta}</span>
                <span className="sr-only"> {brand.name}</span>
                <Icon
                  name="arrow-right"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
