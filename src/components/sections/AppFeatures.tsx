import { useState } from "react";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { PhoneMockup } from "@/components/PhoneMockup";
import { appFeatures, type Feature } from "@/content/site";

const positionClass: Record<Feature["position"], string> = {
  tl: "lg:left-[6%] lg:top-8",
  ml: "lg:left-0 lg:top-[44%]",
  bl: "lg:bottom-8 lg:left-[6%]",
  tr: "lg:right-[6%] lg:top-8",
  mr: "lg:right-0 lg:top-[44%]",
  br: "lg:bottom-8 lg:right-[6%]",
};

function AppScreen() {
  const [activeChip, setActiveChip] = useState("All");
  const { screen } = appFeatures;

  return (
    <div aria-hidden="true" className="flex size-full flex-col bg-neutral-50 text-left text-[11px]">
      {/* iOS Status Bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-neutral-800">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px]">5G</span>
          <div className="h-2 w-4 rounded-sm border border-neutral-800 p-0.5">
            <div className="size-full bg-neutral-800" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3 pb-3 pt-1">
        {/* Header with location */}
        <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
          <div>
            <div className="flex items-center gap-1 font-bold text-neutral-900">
              <Icon name="map-pin" className="size-3 text-brand" />
              <span>{screen.locationLabel}</span>
              <span className="text-[9px] text-neutral-400">▾</span>
            </div>
            <p className="text-[9px] text-neutral-500">{screen.address}</p>
          </div>
          <Logo className="h-6 w-auto" />
        </div>

        {/* Mini Search Bar */}
        <div className="flex items-center gap-2 rounded-xl border border-neutral-200/80 bg-white px-2.5 py-1.5 text-neutral-400 shadow-xs">
          <Icon name="search" className="size-3 text-brand" />
          <span className="text-[10px] text-neutral-500">{screen.search}</span>
        </div>

        {/* Promo Banner */}
        <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-brand to-rose-500 px-2.5 py-1.5 text-white shadow-sm">
          <div>
            <p className="font-extrabold text-[10px] leading-tight">50% OFF up to ₹100</p>
            <p className="text-[8px] text-white/80">Use code: ZISTIFIRST</p>
          </div>
          <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-[8px] font-semibold">CLAIM</span>
        </div>

        {/* Interactive Filter Chips */}
        <div className="flex gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
          {screen.chips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveChip(chip)}
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-medium transition ${
                activeChip === chip
                  ? "border border-brand bg-blush text-brand"
                  : "border border-neutral-200 bg-white text-neutral-600"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Live Order Tracker mini widget */}
        <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/80 p-2 text-emerald-900">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <div className="flex-1 text-[9px] leading-tight">
            <p className="font-bold">Live Tracking Active</p>
            <p className="text-[8px] text-emerald-700">Delivery partner 8 mins away</p>
          </div>
        </div>

        {/* Food Dish Cards */}
        <div className="space-y-2">
          {screen.dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex items-center gap-2.5 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1.5 shadow-sm"
            >
              <div className={`grid size-14 shrink-0 place-items-center rounded-lg ${dish.bg}`}>
                <Icon name={dish.icon} className="size-10 drop-shadow-sm" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-neutral-900">{dish.name}</p>
                <p className="text-[9px] text-neutral-500">{dish.meta}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-bold text-neutral-900">₹249</span>
                  <span className="rounded-md border border-brand/30 bg-blush px-2 py-0.5 text-[8px] font-bold text-brand">
                    + ADD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppFeatures() {
  return (
    <section className="relative overflow-x-clip bg-blush px-4 py-20 md:py-28">
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[min(80vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/40 blur-3xl"
      />

      <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand md:text-5xl">
        {appFeatures.heading}
      </h2>

      <div className="relative mx-auto mt-14 max-w-5xl lg:h-[580px]">
        {/* Central Phone Mockup */}
        <PhoneMockup className="mx-auto w-64 shadow-2xl transition hover:shadow-brand/20 lg:absolute lg:left-1/2 lg:top-2 lg:-translate-x-1/2">
          <AppScreen />
        </PhoneMockup>

        {/* 6 Floating Feature Badges */}
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-0 lg:block">
          {appFeatures.features.map((feature, i) => (
            <li
              key={feature.title}
              style={{ animationDelay: `-${i * 1.2}s` }}
              className={`group flex flex-col items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 p-4 text-center font-bold text-neutral-800 shadow-[0_10px_25px_rgba(226,55,68,0.08)] backdrop-blur-xs transition hover:-translate-y-1 hover:shadow-xl lg:absolute lg:w-48 lg:animate-float ${positionClass[feature.position]}`}
            >
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-blush to-rose-100 text-brand shadow-xs transition group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Icon name={feature.icon} className="size-6 transition-colors" />
              </span>
              <span className="text-sm font-semibold">{feature.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
