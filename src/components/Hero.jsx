import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { hero } from "@/content/site";

const COLORS = ["#FFB547", "#FF7A1A", "#E23744", "#FFA07A"];

const particles = Array.from({ length: 28 }, (_, i) => {
  const size = 2 + (i % 4);
  const fleck = i % 5 === 0;
  return {
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
});

export function Hero({ onOpenAuth }) {
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

        {/* App Store & Google Play Pre-Launch Buttons */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-3">
            {/* Google Play */}
            <a
              href="#waitlist"
              className="flex w-40 cursor-pointer items-center gap-2.5 rounded-xl border border-white/80 bg-black/90 px-3.5 py-2 text-white shadow-lg transition duration-200 hover:bg-neutral-800"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0">
                <path d="M3.6 2.3 13.5 12l-9.9 9.7A1.3 1.3 0 0 1 3 20.6V3.4c0-.5.2-.9.6-1.1z" fill="#00D7FE" />
                <path d="m16.8 8.7-3.3 3.3-9.9-9.7c.3-.2.8-.2 1.2 0z" fill="#00F076" />
                <path d="m16.8 15.3-12 6.4c-.4.2-.9.2-1.2 0l9.9-9.7z" fill="#FF3A44" />
                <path d="m20.4 10.7-3.6-2-3.3 3.3 3.3 3.3 3.6-2c1-.6 1-2 0-2.6z" fill="#FFD500" />
              </svg>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[10px] text-neutral-300">GET IT ON</span>
                <span className="text-sm font-bold">Google Play</span>
              </span>
            </a>

            {/* App Store */}
            <a
              href="#waitlist"
              className="flex w-40 cursor-pointer items-center gap-2.5 rounded-xl border border-white/80 bg-black/90 px-3.5 py-2 text-white shadow-lg transition duration-200 hover:bg-neutral-800"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0" fill="currentColor">
                <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.5-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.4z" />
              </svg>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[10px] text-neutral-300">Download on the</span>
                <span className="text-sm font-bold">App Store</span>
              </span>
            </a>
          </div>

          {/* Bright Accent Text */}
          <p className="mt-3 text-xs font-extrabold uppercase tracking-widest text-amber-300 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]">
            Apps Launching Soon!
          </p>
        </div>
      </div>

      {/* Bouncing Scroll Down Anchor */}
      <a
        href="#value-prop"
        className="relative z-10 flex flex-col items-center gap-1.5 pb-2 text-xs font-medium tracking-wide text-white/80 transition hover:text-white"
      >
        <span>{hero.scrollLabel}</span>
        <Icon name="chevron-down" className="size-5 animate-bounce-arrow text-white/90" />
      </a>
    </section>
  );
}

export default Hero;
