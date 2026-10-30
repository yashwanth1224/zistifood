import { PhoneMockup } from "@/components/PhoneMockup";
import { QrCode } from "@/components/QrCode";
import { StoreButtons } from "@/components/StoreButtons";
import { download } from "@/content/site";

export function DownloadBanner() {
  return (
    <section id="download-banner" className="bg-white px-4 py-16 md:py-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 overflow-hidden rounded-[2.5rem] bg-blush px-6 py-12 text-center md:flex-row md:justify-between md:px-14 md:text-left">
        {/* Animated Dashed Curved Connector */}
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
            d="M400 290C510 380 570 100 690 180"
            stroke="#E23744"
            strokeWidth="2.5"
            strokeDasharray="4 8"
            strokeLinecap="round"
          />
        </svg>

        {/* Left Column: Heading and Store Buttons */}
        <div className="relative z-10 max-w-md">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            {download.heading}
          </h2>
          <p className="mt-3 text-sm text-neutral-600 md:text-base">
            {download.body}
          </p>

          {/* Store CTAs */}
          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              Download app from
            </p>
            <StoreButtons className="mt-3 justify-center md:justify-start" />
          </div>
        </div>

        {/* Right Column: Phone Mockup with Animated Laser Scanning QR Code */}
        <figure className="relative z-10 flex flex-col items-center gap-3">
          <PhoneMockup className="w-48 shadow-2xl">
            <div className="relative grid size-full place-items-center bg-white p-5">
              <div className="relative size-full">
                <QrCode className="size-full" />
                {/* Red Laser Scanner Bar */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 h-1 rounded-full bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_12px_#E23744] animate-scan"
                />
              </div>
            </div>
          </PhoneMockup>
          <figcaption className="max-w-48 text-center text-xs font-semibold text-neutral-700">
            {download.qrCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
