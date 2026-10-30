import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-zisti-pink px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        {/* Pre-launch Badge */}
        <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zisti-red shadow-sm">
          Pre-Launch Waitlist
        </span>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-zisti-red md:text-5xl">
          Something Delicious is Coming Soon
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Zisti is preparing to launch fast, hot, and hygienic food delivery in your city. Be the first to get early access and enjoy exclusive founding-member perks when our doors open!
        </p>

        {/* Waitlist Form Card */}
        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-rose-100/60 bg-white p-6 shadow-xl sm:p-8">
          {isSubmitted ? (
            <div className="py-4 text-center">
              <span className="text-4xl">🎉</span>
              <h3 className="mt-2 text-xl font-bold text-neutral-900">
                You're on the list!
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                We'll email you at <span className="font-semibold text-neutral-800">{email}</span> the moment Zisti launches.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                  <Mail className="size-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-2xl border border-neutral-200 py-3.5 pr-4 pl-11 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-zisti-red focus:outline-none focus:ring-2 focus:ring-zisti-red/20"
                />
              </div>
              <button
                type="submit"
                className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-zisti-red px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 hover:opacity-90"
              >
                <span>Notify Me</span>
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>

        {/* Restaurant Partner CTA */}
        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-center text-white shadow-xl sm:flex-row sm:p-8 sm:text-left">
          <div>
            <h3 className="text-lg font-bold">
              Own a Restaurant? Partner with Zisti.
            </h3>
            <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
              Expand your kitchen's reach and serve thousands of hungry customers from day one.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:zistifooddelivery@gmail.com?subject=Restaurant%20Partnership%20Inquiry"
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-bold text-black shadow-md transition duration-200 hover:bg-neutral-100 sm:text-sm"
            >
              <span>Partner With Us</span>
              <ArrowRight className="size-4" />
            </a>
            <a
              href="tel:+918884599231"
              className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-xs font-semibold text-white transition duration-200 hover:bg-neutral-800 sm:text-sm"
            >
              <span>📞</span>
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* Social and Direct Contact Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600">
          <a
            href="tel:+918884599231"
            className="flex items-center gap-1.5 font-medium transition hover:text-zisti-red"
          >
            <span>📞</span>
            <span>+91 8884599231</span>
          </a>
          <span>•</span>
          <a
            href="mailto:zistifooddelivery@gmail.com"
            className="flex items-center gap-1.5 font-medium transition hover:text-zisti-red"
          >
            <span>📧</span>
            <span>zistifooddelivery@gmail.com</span>
          </a>
          <span>•</span>
          <a
            href="https://www.instagram.com/zisti.fooddelivery/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-neutral-700 transition hover:text-pink-600"
          >
            <span>📸 Instagram</span>
          </a>
          <span>•</span>
          <a
            href="https://www.facebook.com/profile.php?id=6159572502722"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-neutral-700 transition hover:text-blue-600"
          >
            <span>👍 Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
