import { Icon, type IconName } from "@/components/icons";
import { valueProp } from "@/content/site";

const foods: { icon: IconName; className: string }[] = [
  { icon: "burger", className: "left-[3%] top-6 w-14 sm:w-20 md:top-16 md:w-28" },
  { icon: "pizza", className: "right-[4%] top-4 w-12 sm:w-16 md:top-12 md:w-24 [animation-delay:-2s]" },
  { icon: "fries", className: "bottom-10 left-[7%] hidden w-24 md:block [animation-delay:-4s]" },
  { icon: "donut", className: "bottom-16 right-[7%] hidden w-16 sm:block md:w-20 [animation-delay:-1s]" },
];

export function ValueProp() {
  return (
    <section id="value-prop" className="relative isolate overflow-x-clip bg-white px-4 py-24 md:py-32">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 size-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        fill="none"
        stroke="#FFC2CB"
        strokeWidth="1.5"
        strokeDasharray="8 12"
      >
        <path className="animate-dash" vectorEffect="non-scaling-stroke" d="M-20 120C200 20 400 220 640 110S1100 40 1460 160" />
        <path className="animate-dash [animation-delay:-2s]" vectorEffect="non-scaling-stroke" d="M-20 300C240 420 460 200 720 320S1180 460 1460 280" />
        <path className="animate-dash [animation-delay:-4s]" vectorEffect="non-scaling-stroke" d="M-20 500C260 420 520 600 820 480S1240 400 1460 520" />
      </svg>
      {foods.map((food) => (
        <Icon key={food.icon} name={food.icon} className={`absolute -z-10 animate-float drop-shadow-lg ${food.className}`} />
      ))}

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-brand md:text-5xl">{valueProp.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600">{valueProp.body}</p>
        <ul className="mx-auto mt-12 flex flex-col divide-y divide-neutral-200 rounded-3xl bg-white shadow-xl ring-1 ring-black/5 md:flex-row md:divide-x md:divide-y-0 md:rounded-full">
          {valueProp.stats.map((stat) => (
            <li key={stat.label} className="flex flex-1 items-center justify-center gap-3 px-6 py-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush text-brand">
                <Icon name={stat.icon} className="size-6" />
              </span>
              <span className="text-left">
                <span className="block text-xl font-bold md:text-2xl">{stat.value}</span>
                <span className="block text-sm text-neutral-500">{stat.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
