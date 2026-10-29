import type { ReactNode } from "react";
import { stores, type Store } from "@/content/site";

const marks: Record<Store["id"], ReactNode> = {
  "google-play": (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0">
      <path d="M3.6 2.3 13.5 12l-9.9 9.7A1.3 1.3 0 0 1 3 20.6V3.4c0-.5.2-.9.6-1.1z" fill="#00D7FE" />
      <path d="m16.8 8.7-3.3 3.3-9.9-9.7c.3-.2.8-.2 1.2 0z" fill="#00F076" />
      <path d="m16.8 15.3-12 6.4c-.4.2-.9.2-1.2 0l9.9-9.7z" fill="#FF3A44" />
      <path d="m20.4 10.7-3.6-2-3.3 3.3 3.3 3.3 3.6-2c1-.6 1-2 0-2.6z" fill="#FFD500" />
    </svg>
  ),
  "app-store": (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0" fill="currentColor">
      <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.5-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.4z" />
    </svg>
  ),
};

export function StoreButtons({ stacked = false, className = "" }: { stacked?: boolean; className?: string }) {
  return (
    <ul className={`flex gap-3 ${stacked ? "flex-col items-start" : "flex-wrap"} ${className}`}>
      {stores.map((store) => (
        <li key={store.id}>
          <a
            href={store.href}
            className="flex w-40 items-center gap-2.5 rounded-lg border border-white/80 bg-black px-3 py-1.5 text-white transition hover:bg-neutral-800 focus-visible:outline-brand"
          >
            {marks[store.id]}
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[10px]">{store.kicker}</span>
              <span className="text-base font-semibold">{store.label}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
