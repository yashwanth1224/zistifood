import { Icon, type IconName } from "@/components/icons";
import { valueProp } from "@/content/site";

const foods: { icon: IconName; className: string; delay: string; size: string }[] = [
  { icon: "burger", className: "left-[2%] top-8 sm:left-[5%] md:top-14", delay: "0s", size: "w-20 sm:w-28 md:w-36" },
  { icon: "pizza", className: "right-[2%] top-6 sm:right-[6%] md:top-12", delay: "-2.5s", size: "w-18 sm:w-24 md:w-32" },
  { icon: "fries", className: "bottom-8 left-[4%] hidden sm:block md:bottom-14 md:left-[8%]", delay: "-4.5s", size: "w-16 sm:w-22 md:w-28" },
  { icon: "donut", className: "bottom-12 right-[4%] hidden sm:block md:bottom-16 md:right-[8%]", delay: "-1.5s", size: "w-16 sm:w-20 md:w-26" },
  { icon: "taco", className: "top-1/2 left-[1%] hidden lg:block -translate-y-1/2 opacity-85", delay: "-3.5s", size: "w-24" },
];

export function ValueProp() {
  return (
    <section id="value-prop" className="relative isolate overflow-x-clip bg-white px-4 py-24 md:py-32">
      {/* Looping decorative pink dashed ribbons */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 size-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        fill="none"
        stroke="#FFB6C1"
        strokeWidth="1.5"
        strokeDasharray="8 12"
      >
        <path className="animate-dash" vectorEffect="non-scaling-stroke" d="M-20 120C200 20 400 220 640 110S1100 40 1460 160" />
        <path className="animate-dash [animation-delay:-2s]" vectorEffect="non-scaling-stroke" d="M-20 300C240 420 460 200 720 320S1180 460 1460 280" />
        <path className="animate-dash [animation-delay:-4s]" vectorEffect="non-scaling-stroke" d="M-20 500C260 420 520 600 820 480S1240 400 1460 520" />
      </svg>

      {/* Floating 3D Food Illustrations */}
      {foods.map((food) => (
        <div
          key={food.icon}
          style={{ animationDelay: food.delay }}
          className={`absolute -z-10 animate-float transition-transform duration-300 hover:scale-110 ${food.className} ${food.size}`}
        >
          <Icon name={food.icon} className="size-full drop-shadow-xl" />
        </div>
      ))}

      {/* Center Value Proposition Content */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-brand md:text-5xl">
          {valueProp.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          {valueProp.body}
        </p>

        {/* 3-Part Pill Stats Bar */}
        <ul className="mx-auto mt-14 flex flex-col divide-y divide-neutral-200 rounded-3xl bg-white p-2 shadow-2xl ring-1 ring-black/5 transition hover:shadow-brand/5 md:flex-row md:divide-x md:divide-y-0 md:rounded-full md:p-3">
          {valueProp.stats.map((stat) => (
            <li
              key={stat.label}
              className="group flex flex-1 items-center justify-center gap-4 px-6 py-4 transition hover:bg-neutral-50/80 md:rounded-full"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush text-brand shadow-sm transition group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Icon name={stat.icon} className="size-6 transition-colors" />
              </span>
              <span className="text-left">
                <span className="block text-xl font-extrabold tracking-tight text-neutral-900 md:text-2xl">
                  {stat.value}
                </span>
                <span className="block text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {stat.label}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
