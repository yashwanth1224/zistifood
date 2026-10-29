import type { ReactNode } from "react";

type IconDef = { kind: "line" | "solid" | "color"; viewBox: string; body: ReactNode };

const icons = {
  burger: {
    kind: "color",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M8 28c0-11 10.7-18 24-18s24 7 24 18z" fill="#F4A340" />
        <g fill="#FFF3D6">
          <ellipse cx="22" cy="18" rx="2" ry="1.2" />
          <ellipse cx="32" cy="15" rx="2" ry="1.2" />
          <ellipse cx="42" cy="19" rx="2" ry="1.2" />
          <ellipse cx="27" cy="23" rx="2" ry="1.2" />
          <ellipse cx="38" cy="24" rx="2" ry="1.2" />
        </g>
        <path d="M6 28h52l-3 6-4-3-4 3-4-3-4 3-4-3-4 3-4-3-4 3-4-3-4 3-4-3z" fill="#5BBF4A" />
        <rect x="7" y="34" width="50" height="10" rx="5" fill="#7A3E1D" />
        <path d="M9 34h46l-6 6-5-4-5 5-6-5-5 5-5-5-6 5-5-5z" fill="#FFC93C" />
        <path d="M8 46h48v2a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8z" fill="#F4A340" />
      </>
    ),
  },
  pizza: {
    kind: "color",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M13 20c12-5 26-5 38 0L32 58z" fill="#FFC93C" />
        <path d="M10 14c14-6 30-6 44 0l-3 6c-12-5-26-5-38 0z" fill="#D98A3D" />
        <g fill="#E23744">
          <circle cx="26" cy="28" r="4" />
          <circle cx="38" cy="30" r="3.5" />
          <circle cx="32" cy="42" r="3.5" />
        </g>
        <g fill="#3F7D2C">
          <circle cx="33" cy="25" r="1.4" />
          <circle cx="28" cy="36" r="1.4" />
          <circle cx="37" cy="38" r="1.4" />
        </g>
      </>
    ),
  },
  fries: {
    kind: "color",
    viewBox: "0 0 64 64",
    body: (
      <>
        <g fill="#FFC93C">
          <rect x="18" y="10" width="5" height="30" rx="1.5" transform="rotate(-10 20 25)" />
          <rect x="25" y="6" width="5" height="32" rx="1.5" transform="rotate(-4 27 22)" />
          <rect x="32" y="5" width="5" height="33" rx="1.5" transform="rotate(3 34 22)" />
          <rect x="39" y="8" width="5" height="31" rx="1.5" transform="rotate(9 41 24)" />
        </g>
        <path d="M14 26h36l-5 32H19z" fill="#E23744" />
        <path d="M17 34c9 4 21 4 30 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  },
  donut: {
    kind: "color",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path
          d="M8 32a24 24 0 1 0 48 0a24 24 0 1 0-48 0zM26 32a6 6 0 1 0 12 0a6 6 0 1 0-12 0z"
          fill="#E9A960"
          fillRule="evenodd"
        />
        <path
          d="M12 31c0-11 9-19 20-19s20 8 20 19c-2 3-4 1-6 4s-5 1-7 4-6 0-7 3-6-1-8 1-5-1-6-3-6 0-6-9zM24 32a8 8 0 1 0 16 0a8 8 0 1 0-16 0z"
          fill="#FF8FB1"
          fillRule="evenodd"
        />
        <g strokeWidth="2" strokeLinecap="round">
          <path d="M20 22l3 2" stroke="#FFF3D6" />
          <path d="M30 17l3-1" stroke="#5BC0EB" />
          <path d="M42 21l2 3" stroke="#FFC93C" />
          <path d="M44 32l1 3" stroke="#FFF3D6" />
          <path d="M18 33l2 3" stroke="#5BC0EB" />
          <path d="M37 42l3 1" stroke="#FFC93C" />
        </g>
      </>
    ),
  },
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
    kind: "line",
    viewBox: "0 0 24 24",
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
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
    kind: "solid",
    viewBox: "0 0 24 24",
    body: (
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.4 3.1z" />
    ),
  },
  facebook: {
    kind: "solid",
    viewBox: "0 0 24 24",
    body: (
      <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V12h2.8v10h3.7V12h2.8l.4-3.5z" />
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
  return (
    <svg aria-hidden="true" viewBox={icon.viewBox} className={className} {...kindProps[icon.kind]}>
      {icon.body}
    </svg>
  );
}
