import { useState, useEffect, type CSSProperties } from "react";
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

const SEARCH_SUGGESTIONS = [
  "biryani",
  "pizza",
  "butter chicken",
  "burger",
  "dosa",
  "rolls",
  "ice cream",
  "pasta",
];

const POPULAR_LOCATIONS = [
  "Bengaluru, Karnataka",
  "Delhi NCR",
  "Mumbai, Maharashtra",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Pune, Maharashtra",
];

export function Hero({ onOpenAuth }: { onOpenAuth?: (mode: "login" | "signup") => void }) {
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("Bengaluru, Karnataka");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % SEARCH_SUGGESTIONS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

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

        {/* Zomato-style Search Bar Container */}
        <div className="mt-8 flex w-full max-w-2xl flex-col rounded-2xl bg-white p-2 text-left shadow-2xl ring-1 ring-black/10 sm:flex-row sm:items-center sm:rounded-full sm:p-1.5">
          {/* Location Picker */}
          <div className="relative sm:w-5/12">
            <button
              type="button"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex w-full items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm text-neutral-800 transition hover:bg-neutral-50 sm:rounded-full"
            >
              <div className="flex items-center gap-2 overflow-hidden text-neutral-700">
                <Icon name="map-pin" className="size-4 shrink-0 text-brand" />
                <span className="truncate font-medium">{selectedLocation}</span>
              </div>
              <Icon name="chevron-down" className="size-4 shrink-0 text-neutral-400" />
            </button>

            {/* Location Dropdown */}
            {isLocationOpen && (
              <div className="absolute left-0 top-full z-30 mt-2 w-64 rounded-2xl bg-white p-2 text-sm shadow-xl ring-1 ring-black/10">
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Popular Cities
                </p>
                <div className="max-h-48 overflow-y-auto">
                  {POPULAR_LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-neutral-700 transition hover:bg-neutral-100"
                    >
                      <Icon name="map-pin" className="size-3.5 text-neutral-400" />
                      <span className="truncate">{loc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-neutral-300 sm:block" />

          {/* Search Query Input */}
          <div className="relative flex flex-1 items-center px-4 py-1 text-neutral-700">
            <Icon name="search" className="size-4 shrink-0 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search for "${SEARCH_SUGGESTIONS[suggestionIndex]}"`}
              className="w-full bg-transparent px-3 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Store Buttons */}
        <StoreButtons className="mt-8 justify-center" />
      </div>

      {/* Bouncing Scroll Down Link */}
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
