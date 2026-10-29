import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { PhoneMockup } from "@/components/PhoneMockup";
import { appFeatures, type Feature } from "@/content/site";

const positionClass: Record<Feature["position"], string> = {
  tl: "lg:left-[8%] lg:top-6",
  ml: "lg:left-0 lg:top-[42%]",
  bl: "lg:bottom-6 lg:left-[8%]",
  tr: "lg:right-[8%] lg:top-6",
  mr: "lg:right-0 lg:top-[42%]",
  br: "lg:bottom-6 lg:right-[8%]",
};

function AppScreen() {
  const { screen } = appFeatures;
  return (
    <div aria-hidden="true" className="flex size-full flex-col gap-3 bg-white px-3 pb-3 pt-8 text-left text-[10px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-black">{screen.locationLabel}</p>
          <p className="text-neutral-500">{screen.address}</p>
        </div>
        <Logo className="text-base text-brand" />
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-2 py-1.5 text-neutral-500 shadow-sm">
        <Icon name="search" className="size-3 text-brand" />
        {screen.search}
      </div>
      <div className="flex gap-1.5">
        {screen.chips.map((chip, i) => (
          <span
            key={chip}
            className={`rounded-full border px-2 py-0.5 ${i === 0 ? "border-brand bg-blush text-brand" : "border-neutral-200 text-neutral-700"}`}
          >
            {chip}
          </span>
        ))}
      </div>
      {screen.dishes.map((dish) => (
        <div key={dish.name} className="overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
          <div className={`grid h-20 place-items-center ${dish.bg}`}>
            <Icon name={dish.icon} className="size-14" />
          </div>
          <div className="px-2 py-1.5">
            <p className="font-semibold text-black">{dish.name}</p>
            <p className="text-neutral-500">{dish.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AppFeatures() {
  return (
    <section className="relative overflow-x-clip bg-blush px-4 py-20 md:py-28">
      <h2 className="text-center text-3xl font-bold text-brand md:text-5xl">{appFeatures.heading}</h2>
      <div className="relative mx-auto mt-14 max-w-5xl lg:h-[560px]">
        <PhoneMockup className="mx-auto w-60 lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2">
          <AppScreen />
        </PhoneMockup>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-0 lg:block">
          {appFeatures.features.map((feature, i) => (
            <li
              key={feature.title}
              style={{ animationDelay: `-${i * 1.1}s` }}
              className={`flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center font-semibold shadow-md lg:absolute lg:w-44 lg:animate-float ${positionClass[feature.position]}`}
            >
              <span className="grid size-12 place-items-center rounded-full bg-blush text-brand">
                <Icon name={feature.icon} className="size-6" />
              </span>
              {feature.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
