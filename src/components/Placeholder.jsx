import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export function Placeholder({ title }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4 py-20 text-center text-white">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[min(80vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl"
      />

      <div className="mx-auto flex max-w-lg flex-col items-center">
        <Link to="/" className="transition hover:opacity-90">
          <Logo className="h-16 w-auto" />
        </Link>

        <span className="mt-8 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Page Under Construction
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
          We are currently preparing this section as part of the Zisti pre-launch rollout. Detailed policies, job listings, and partner onboarding forms will be published here soon.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-2xl bg-zisti-red px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-dark cursor-pointer"
          >
            <span>← Go Back Home</span>
          </Link>
          <a
            href="mailto:zistifooddelivery@gmail.com"
            className="flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
          >
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Placeholder;
