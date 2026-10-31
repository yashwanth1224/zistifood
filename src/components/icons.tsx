import type { ReactNode } from "react";

type IconDef = { kind: "line" | "solid" | "color"; viewBox: string; body: ReactNode };

const icons = {
  burger: {
    kind: "color",
    viewBox: "0 0 100 100",
    body: (
      <g>
        <defs>
          <radialGradient id="bun-top" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FBD688" />
            <stop offset="45%" stopColor="#E99A38" />
            <stop offset="100%" stopColor="#AF5C10" />
          </radialGradient>
          <linearGradient id="patty" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6E3516" />
            <stop offset="50%" stopColor="#4A1E07" />
            <stop offset="100%" stopColor="#321404" />
          </linearGradient>
          <linearGradient id="cheese" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="60%" stopColor="#FFAA00" />
            <stop offset="100%" stopColor="#E08B00" />
          </linearGradient>
          <filter id="food-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>
        <g filter="url(#food-shadow)">
          {/* Top Bun */}
          <path d="M12 42C12 20 28 10 50 10C72 10 88 20 88 42C88 45 84 47 78 47L22 47C16 47 12 45 12 42Z" fill="url(#bun-top)" />
          {/* Bun highlight */}
          <ellipse cx="46" cy="20" rx="24" ry="7" fill="#FFECC2" opacity="0.6" />
          {/* Sesame seeds */}
          <g fill="#FFF8E7" opacity="0.95">
            <ellipse cx="32" cy="24" rx="2.5" ry="1.5" transform="rotate(-15 32 24)" />
            <ellipse cx="48" cy="18" rx="2.5" ry="1.5" transform="rotate(10 48 18)" />
            <ellipse cx="64" cy="25" rx="2.5" ry="1.5" transform="rotate(30 64 25)" />
            <ellipse cx="24" cy="34" rx="2.5" ry="1.5" transform="rotate(-30 24 34)" />
            <ellipse cx="40" cy="32" rx="2.5" ry="1.5" transform="rotate(5 40 32)" />
            <ellipse cx="58" cy="33" rx="2.5" ry="1.5" transform="rotate(-10 58 33)" />
            <ellipse cx="74" cy="35" rx="2.5" ry="1.5" transform="rotate(25 74 35)" />
          </g>
          {/* Fresh wavy lettuce */}
          <path d="M10 47C14 44 18 52 24 48C30 44 34 52 40 48C46 44 50 52 56 48C62 44 66 52 72 48C78 44 82 52 86 48C90 44 92 48 92 51C88 56 82 54 76 56C70 58 64 54 58 56C52 58 46 54 40 56C34 58 28 54 22 56C16 58 10 53 8 50Z" fill="#48B322" />
          <path d="M12 49C16 46 20 52 26 49C32 46 36 52 42 49C48 46 52 52 58 49C64 46 68 52 74 49C80 46 84 52 88 49" stroke="#71D838" strokeWidth="1.5" fill="none" />
          {/* Juicy Beef Patty */}
          <rect x="13" y="52" width="74" height="15" rx="7.5" fill="url(#patty)" />
          {/* Melted Cheddar Cheese Drips */}
          <path d="M16 54L84 54L82 63C78 63 76 59 72 65C68 71 64 73 60 62C56 62 54 68 50 69C46 70 42 61 38 64C34 67 30 72 26 63C22 64 18 61 16 54Z" fill="url(#cheese)" />
          {/* Bottom Bun */}
          <path d="M16 67H84C86 67 87 69 86 71C83 83 71 88 50 88C29 88 17 83 14 71C13 69 14 67 16 67Z" fill="url(#bun-top)" />
        </g>
      </g>
    ),
  },
  pizza: {
    kind: "color",
    viewBox: "0 0 100 100",
    body: (
      <g>
        <defs>
          <linearGradient id="crust" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E99A38" />
            <stop offset="100%" stopColor="#A8570B" />
          </linearGradient>
          <radialGradient id="cheese-slice" cx="40%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#FFF48F" />
            <stop offset="60%" stopColor="#FFC83B" />
            <stop offset="100%" stopColor="#FF9F1C" />
          </radialGradient>
          <radialGradient id="pepperoni" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="70%" stopColor="#B31E2A" />
            <stop offset="100%" stopColor="#6B0A12" />
          </radialGradient>
        </defs>
        <g filter="url(#food-shadow)">
          {/* Pizza Slice Body */}
          <path d="M18 28C38 18 64 18 84 28L51 90Z" fill="url(#cheese-slice)" />
          {/* Crust Top Edge */}
          <path d="M14 24C38 12 64 12 88 24C88 29 83 33 78 31C60 22 40 22 24 31C19 33 14 29 14 24Z" fill="url(#crust)" />
          <ellipse cx="50" cy="20" rx="30" ry="4" fill="#FCE3A1" opacity="0.4" />
          {/* Pepperoni Slices */}
          <g>
            <circle cx="42" cy="42" r="8" fill="url(#pepperoni)" />
            <circle cx="40" cy="40" r="6" fill="#D32F2F" opacity="0.6" />
            <circle cx="38" cy="38" r="1.5" fill="#FFE082" opacity="0.8" />
            <circle cx="62" cy="46" r="7.5" fill="url(#pepperoni)" />
            <circle cx="60" cy="44" r="5.5" fill="#D32F2F" opacity="0.6" />
            <circle cx="49" cy="65" r="7" fill="url(#pepperoni)" />
            <circle cx="47" cy="63" r="5" fill="#D32F2F" opacity="0.6" />
          </g>
          {/* Fresh Basil Leaves */}
          <path d="M52 35C58 32 62 38 60 42C54 44 50 38 52 35Z" fill="#388E3C" />
          <path d="M33 54C38 52 40 58 37 61C33 62 30 57 33 54Z" fill="#2E7D32" />
          <path d="M58 58C62 55 65 60 62 64C58 65 56 61 58 58Z" fill="#43A047" />
        </g>
      </g>
    ),
  },
  fries: {
    kind: "color",
    viewBox: "0 0 100 100",
    body: (
      <g>
        <defs>
          <linearGradient id="fry-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="50%" stopColor="#FFC83B" />
            <stop offset="100%" stopColor="#E69500" />
          </linearGradient>
          <linearGradient id="fry-box" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF3B47" />
            <stop offset="60%" stopColor="#E23744" />
            <stop offset="100%" stopColor="#9C1722" />
          </linearGradient>
        </defs>
        <g filter="url(#food-shadow)">
          {/* Golden Fries */}
          <rect x="25" y="16" width="9" height="52" rx="3" transform="rotate(-15 28 40)" fill="url(#fry-gold)" />
          <rect x="36" y="10" width="9" height="56" rx="3" transform="rotate(-6 40 38)" fill="url(#fry-gold)" />
          <rect x="47" y="8" width="9" height="58" rx="3" transform="rotate(3 51 37)" fill="url(#fry-gold)" />
          <rect x="58" y="12" width="9" height="54" rx="3" transform="rotate(12 62 39)" fill="url(#fry-gold)" />
          <rect x="68" y="20" width="9" height="46" rx="3" transform="rotate(22 72 43)" fill="url(#fry-gold)" />
          {/* Red Carton Back & Front */}
          <path d="M20 45L28 88C29 91 32 93 35 93H65C68 93 71 91 72 88L80 45C70 51 58 48 50 48C42 48 30 51 20 45Z" fill="url(#fry-box)" />
          {/* Zisti Golden Smile on Carton */}
          <path d="M36 68C42 75 58 75 64 68" stroke="#FFE066" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>
      </g>
    ),
  },
  donut: {
    kind: "color",
    viewBox: "0 0 100 100",
    body: (
      <g>
        <defs>
          <radialGradient id="donut-dough" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFE0B2" />
            <stop offset="60%" stopColor="#F5B061" />
            <stop offset="100%" stopColor="#B26514" />
          </radialGradient>
          <radialGradient id="donut-glaze" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FF9EBE" />
            <stop offset="50%" stopColor="#FF4081" />
            <stop offset="100%" stopColor="#C2185B" />
          </radialGradient>
        </defs>
        <g filter="url(#food-shadow)">
          {/* Dough base */}
          <path d="M50 12C29 12 12 29 12 50C12 71 29 88 50 88C71 88 88 71 88 50C88 29 71 12 50 12ZM50 63C43 63 37 57 37 50C37 43 43 37 50 37C57 37 63 43 63 50C63 57 57 63 50 63Z" fill="url(#donut-dough)" fillRule="evenodd" />
          {/* Strawberry Frosting Glaze */}
          <path d="M50 15C32 15 16 30 16 50C16 56 19 59 23 58C28 57 30 63 35 63C40 63 41 57 46 59C51 61 54 68 59 66C64 64 66 59 71 61C76 63 79 57 82 55C84 53 84 51 84 50C84 30 68 15 50 15ZM50 61C44 61 39 56 39 50C39 44 44 39 50 39C56 39 61 44 61 50C61 56 56 61 50 61Z" fill="url(#donut-glaze)" fillRule="evenodd" />
          {/* Glaze sheen */}
          <path d="M30 22C40 18 60 18 70 22" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.4" fill="none" />
          {/* Colorful Sprinkles */}
          <g strokeWidth="2.5" strokeLinecap="round">
            <line x1="28" y1="36" x2="34" y2="34" stroke="#FFF" />
            <line x1="42" y1="26" x2="46" y2="30" stroke="#FFEB3B" />
            <line x1="60" y1="28" x2="66" y2="26" stroke="#00E5FF" />
            <line x1="72" y1="42" x2="70" y2="48" stroke="#76FF03" />
            <line x1="26" y1="48" x2="28" y2="54" stroke="#FFD700" />
            <line x1="68" y1="56" x2="74" y2="58" stroke="#FFF" />
            <line x1="48" y1="62" x2="52" y2="65" stroke="#00E5FF" />
          </g>
        </g>
      </g>
    ),
  },
  taco: {
    kind: "color",
    viewBox: "0 0 100 100",
    body: (
      <g>
        <defs>
          <linearGradient id="taco-shell" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="60%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
        </defs>
        <g filter="url(#food-shadow)">
          <path d="M14 62C14 36 34 20 60 20C78 20 88 28 88 38C88 56 62 76 32 76C20 76 14 70 14 62Z" fill="url(#taco-shell)" />
          {/* Fillings */}
          <path d="M30 35C40 30 55 30 68 35C72 37 70 45 65 46C55 48 40 46 32 42Z" fill="#388E3C" />
          <circle cx="48" cy="36" r="4.5" fill="#E53935" />
          <circle cx="62" cy="38" r="4" fill="#E53935" />
          <path d="M40 40L55 42L65 40" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    ),
  },

  /* Feature & Functional Icons */
  restaurant: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M7 3v8a2 2 0 0 0 4 0V3M9 13v8M17 3c-2 1-3 4-3 8h3v10" />,
  },
  city: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  "delivery-bike": {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M9 17h5l-2-6H9M14 6h3l3 8M3 11h5" />
      </>
    ),
  },
  dining: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <circle cx="12" cy="13" r="5" />
        <path d="M3 4v5a2 2 0 0 0 2 2v9M5 4v4M21 4c-1.5 1-2 3-2 6h2v10" />
      </>
    ),
  },
  "live-tracking": {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  },
  offers: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </>
    ),
  },
  gold: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" />,
  },
  healthy: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M4 20c1-9 6-15 16-16-1 10-7 15-16 16zM4 20l9-9" />,
  },
  schedule: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  search: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4-4" />
      </>
    ),
  },
  "map-pin": {
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  phone: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm7 13h.01" />,
  },
  check: {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M20 6L9 17l-5-5" />,
  },
  "chevron-down": {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M6 9l6 6 6-6" />,
  },
  "arrow-right": {
    kind: "line",
    viewBox: "0 0 24 24",
    body: <path d="M5 12h14M13 6l6 6-6 6" />,
  },
  x: {
    kind: "solid",
    viewBox: "0 0 24 24",
    body: (
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z" />
    ),
  },
  instagram: {
    kind: "color",
    viewBox: "0 0 24 24",
    body: (
      <>
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad)" />
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="none" />
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="white" />
      </>
    ),
  },
  linkedin: {
    kind: "solid",
    viewBox: "0 0 24 24",
    body: (
      <path d="M5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" />
    ),
  },
  youtube: {
    kind: "color",
    viewBox: "0 0 24 24",
    body: (
      <>
        <rect width="24" height="24" rx="5" fill="#FF0000" />
        <path d="M9.8 15.1V8.9l5.4 3.1z" fill="white" fillRule="nonzero" />
        <path
          d="M21 7.2a3 3 0 0 0-2.1-2.1C17 4.6 12 4.6 12 4.6s-5 0-6.9.5A3 3 0 0 0 3 7.2 31 31 0 0 0 2.5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 21.5 12 31 31 0 0 0 21 7.2z"
          fill="white"
          fillRule="nonzero"
          opacity="0"
        />
        <path
          d="M20.5 7.2a2.5 2.5 0 0 0-1.8-1.8C17 5 12 5 12 5s-5 0-6.7.4A2.5 2.5 0 0 0 3.5 7.2 27 27 0 0 0 3 12a27 27 0 0 0 .5 4.8 2.5 2.5 0 0 0 1.8 1.8C7 19 12 19 12 19s5 0 6.7-.4a2.5 2.5 0 0 0 1.8-1.8A27 27 0 0 0 21 12a27 27 0 0 0-.5-4.8z"
          fill="none"
        />
      </>
    ),
  },
  whatsapp: {
    kind: "color",
    viewBox: "0 0 24 24",
    body: (
      <>
        <rect width="24" height="24" rx="5" fill="#25D366" />
        <path
          d="M12 4a8 8 0 0 0-6.94 11.97L4 20l4.16-1.05A8 8 0 1 0 12 4zm0 14.4A6.4 6.4 0 0 1 8.63 17l-.24-.14-2.47.63.66-2.39-.16-.25A6.4 6.4 0 1 1 12 18.4zm3.52-4.78c-.19-.1-1.14-.56-1.32-.63-.18-.06-.31-.1-.44.1-.13.18-.5.63-.62.76-.11.13-.22.14-.41.05a5.23 5.23 0 0 1-1.54-.95 5.8 5.8 0 0 1-1.07-1.33c-.11-.19-.01-.3.09-.39.09-.09.19-.23.29-.35.1-.12.13-.19.19-.32.06-.12.03-.24-.02-.33-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.62 0 .95.7 1.87.8 2s1.36 2.08 3.3 2.92c.46.2.82.32 1.1.41.46.15.88.13 1.21.08.37-.06 1.14-.46 1.3-.91.16-.45.16-.83.11-.91-.05-.09-.18-.14-.38-.24z"
          fill="white"
          fillRule="nonzero"
        />
      </>
    ),
  },
  email: {
    kind: "color",
    viewBox: "0 0 24 24",
    body: (
      <>
        <rect width="24" height="24" rx="5" fill="#EA4335" />
        <path
          d="M19 7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-1.5 2L12 13 6.5 9h11z"
          fill="white"
          fillRule="nonzero"
        />
      </>
    ),
  },
  facebook: {
    kind: "color",
    viewBox: "0 0 24 24",
    body: (
      <>
        <rect width="24" height="24" rx="5" fill="#1877F2" />
        <path
          d="M15.12 12.93h-2.07V20H9.87v-7.07H8.4v-2.8h1.47V8.37C9.87 6.64 10.75 5 13.2 5l2.2.01v2.71h-1.6c-.26 0-.63.13-.63.69v1.72h2.25l-.3 2.8z"
          fill="white"
          fillRule="nonzero"
        />
      </>
    ),
  },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;

const kindProps = {
  line: { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" },
  solid: { fill: "currentColor", fillRule: "evenodd" },
  color: {},
} as const;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const icon: IconDef = icons[name];
  if (!icon) return null;
  return (
    <svg aria-hidden="true" viewBox={icon.viewBox} className={className} {...kindProps[icon.kind]}>
      {icon.body}
    </svg>
  );
}
