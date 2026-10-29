import { useState } from "react";
import { Icon } from "@/components/icons";
import { PhoneMockup } from "@/components/PhoneMockup";
import { QrCode } from "@/components/QrCode";
import { StoreButtons } from "@/components/StoreButtons";
import { download } from "@/content/site";

export function DownloadBanner() {
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    }, 700);
  };

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

        {/* Left Column: Heading, SMS/Email Input, and Store Buttons */}
        <div className="relative z-10 max-w-md">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            {download.heading}
          </h2>
          <p className="mt-3 text-sm text-neutral-600 md:text-base">
            We will send you a link, open it on your phone to download the app.
          </p>

          {/* Radio Buttons for Phone / Email */}
          <div className="mt-5 flex items-center justify-center gap-6 text-sm font-medium text-neutral-700 md:justify-start">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="send-method"
                checked={method === "phone"}
                onChange={() => setMethod("phone")}
                className="accent-brand size-4"
              />
              <span>Phone</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="send-method"
                checked={method === "email"}
                onChange={() => setMethod("email")}
                className="accent-brand size-4"
              />
              <span>Email</span>
            </label>
          </div>

          {/* Interactive Share Link Input */}
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-1 items-center rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm shadow-xs focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
              {method === "phone" && (
                <span className="mr-2 font-semibold text-neutral-500">+91</span>
              )}
              <input
                type={method === "phone" ? "tel" : "email"}
                placeholder={method === "phone" ? "Enter phone number" : "Enter your email"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-transparent text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark disabled:opacity-75"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Link Sent!" : "Share App Link"}
            </button>
          </form>

          {status === "sent" && (
            <p className="mt-2 text-xs font-semibold text-emerald-600">
              Check your messages! Download link sent successfully.
            </p>
          )}

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
