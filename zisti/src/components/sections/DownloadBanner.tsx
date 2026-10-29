import { PhoneMockup } from "@/components/PhoneMockup";
import { QrCode } from "@/components/QrCode";
import { StoreButtons } from "@/components/StoreButtons";
import { download } from "@/content/site";

export function DownloadBanner() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 overflow-hidden rounded-[2rem] bg-blush px-6 py-12 text-center md:flex-row md:justify-between md:px-16 md:text-left">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden size-full md:block"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            className="animate-dash"
            vectorEffect="non-scaling-stroke"
            d="M420 300C520 390 560 90 680 170"
            stroke="#E23744"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
        </svg>
        <div className="relative max-w-sm">
          <h2 className="text-3xl font-bold md:text-4xl">{download.heading}</h2>
          <p className="mt-3 text-neutral-700">{download.body}</p>
          <StoreButtons className="mt-6 justify-center md:justify-start" />
        </div>
        <figure className="relative flex flex-col items-center gap-3">
          <PhoneMockup className="w-44">
            <div className="grid size-full place-items-center p-4">
              <QrCode className="w-full" />
            </div>
          </PhoneMockup>
          <figcaption className="max-w-44 text-center text-sm font-medium text-neutral-700">{download.qrCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
