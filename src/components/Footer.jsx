import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { StoreButtons } from "@/components/StoreButtons";

const COMPANY_MODALS = {
  about: {
    tag: "Our Story",
    title: "Who We Are",
    content: (
      <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
        <p>
          <strong className="text-neutral-900">Zisti</strong> is a next-generation food delivery startup founded in Bengaluru, Karnataka, on a mission to bring fresh, hot, and hygienic food directly from the best neighborhood kitchens to your doorstep.
        </p>
        <p>
          We believe good food shouldn't be complicated or overpriced. By working hand-in-hand with passionate local chefs, cloud kitchens, and beloved regional restaurants, we are building a faster, more dependable delivery network tailored for Indian food lovers.
        </p>
        <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-200">
          <p className="font-bold text-neutral-900">🚀 Founded in Bengaluru</p>
          <p className="mt-1 text-xs text-neutral-500">
            Headquartered in Koramangala, Bengaluru, expanding rapidly across premier culinary hubs.
          </p>
        </div>
      </div>
    ),
  },
  careers: {
    tag: "Join Our Fleet & Team",
    title: "Careers at Zisti",
    content: (
      <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
        <p>
          We are growing fast and looking for passionate problem solvers, builders, and delivery partners to shape the future of food delivery in India!
        </p>
        <div className="space-y-2.5">
          <div className="rounded-xl border border-neutral-200 p-3 hover:border-brand/40 transition">
            <p className="font-bold text-neutral-900 text-sm">🛵 Delivery Fleet Partners</p>
            <p className="text-xs text-neutral-500">Flexible shifts, instant weekly payouts, and rider safety coverage in Bengaluru.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-3 hover:border-brand/40 transition">
            <p className="font-bold text-neutral-900 text-sm">💻 Frontend & Backend Engineers (React / Node)</p>
            <p className="text-xs text-neutral-500">Build high-throughput dispatch algorithms, real-time live tracking, and sleek web apps.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-3 hover:border-brand/40 transition">
            <p className="font-bold text-neutral-900 text-sm">🤝 Restaurant Partnership Managers</p>
            <p className="text-xs text-neutral-500">Onboard local restaurants, cloud kitchens, and culinary entrepreneurs.</p>
          </div>
        </div>
        <p className="text-xs text-neutral-500 pt-1">
          Interested in joining? Email your resume or profile to{" "}
          <a href="mailto:zistifooddelivery@gmail.com?subject=Job%20Application%20at%20Zisti" className="font-semibold text-brand underline">
            zistifooddelivery@gmail.com
          </a>
        </p>
      </div>
    ),
  },
  blog: {
    tag: "Stories & Updates",
    title: "Zisti Blog & News",
    content: (
      <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
        <p>
          Welcome to the Zisti Dispatch! Here we share behind-the-scenes stories, engineering insights, and neighborhood food guides.
        </p>
        <div className="space-y-3">
          <div className="rounded-xl bg-neutral-50 p-3 border border-neutral-200">
            <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Latest Update</span>
            <p className="font-bold text-neutral-900 text-sm mt-0.5">Building Hyperlocal Delivery Under 25 Minutes in Bengaluru</p>
            <p className="text-xs text-neutral-500 mt-1">How our batching algorithms and kitchen dispatch coordination shave minutes off every delivery.</p>
          </div>
          <div className="rounded-xl bg-neutral-50 p-3 border border-neutral-200">
            <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Spotlight</span>
            <p className="font-bold text-neutral-900 text-sm mt-0.5">Empowering Small Kitchens: The Zisti Founding Partner Story</p>
            <p className="text-xs text-neutral-500 mt-1">Why lower commissions and dedicated rider support mean better food and happier chefs.</p>
          </div>
        </div>
      </div>
    ),
  },
  fraud: {
    tag: "Trust & Safety",
    title: "Report Fraud & Security Issues",
    content: (
      <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
        <p>
          Zisti takes customer protection, payment security, and ethical operations very seriously. Please review our fraud alert guidelines below:
        </p>
        <div className="rounded-xl bg-rose-50 p-3.5 border border-rose-200 text-rose-900 text-xs leading-relaxed">
          <p className="font-bold">⚠️ Warning to Users:</p>
          <p className="mt-1">
            Zisti representatives will <strong>never</strong> ask for your bank PIN, UPI MPIN, OTP, or demand money transfers to personal accounts for job offers or lucky draws.
          </p>
        </div>
        <p className="text-xs text-neutral-500">
          If you encounter any suspicious calls, emails, or fraudulent websites posing as Zisti, please notify our team immediately:
        </p>
        <div className="rounded-xl border border-neutral-200 p-3 text-xs space-y-1 bg-neutral-50">
          <p><strong>🚨 Fraud Support Desk:</strong></p>
          <p>📧 Email: <a href="mailto:zistifooddelivery@gmail.com?subject=Fraud%20Report" className="font-semibold text-brand underline">zistifooddelivery@gmail.com</a></p>
          <p>📞 Phone: +91 8884599231</p>
          <p>📍 Location: Bengaluru, Karnataka, India</p>
        </div>
      </div>
    ),
  },
};

export function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <footer className="bg-neutral-950 px-4 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top Header Row with Logo */}
        <div className="border-b border-neutral-800 pb-10">
          <Link to="/" className="inline-block transition hover:opacity-90">
            <Logo className="h-14 md:h-18 w-auto" />
          </Link>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("about")}
                  className="transition hover:text-white cursor-pointer text-left"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("blog")}
                  className="transition hover:text-white cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("fraud")}
                  className="transition hover:text-white cursor-pointer text-left"
                >
                  Report Fraud
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Learn More */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              Learn More
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  to="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="transition hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Support & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              Direct Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href="tel:+918884599231"
                  className="inline-flex items-center gap-1.5 transition hover:text-brand"
                >
                  <span>📞</span>
                  <span>+91 8884599231</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:zistifooddelivery@gmail.com"
                  className="inline-flex items-center gap-1.5 break-all transition hover:text-brand"
                >
                  <span>📧</span>
                  <span>zistifooddelivery@gmail.com</span>
                </a>
              </li>
              <li className="pt-2 text-xs text-neutral-500">
                Bengaluru, Karnataka, India
              </li>
            </ul>
          </div>

          {/* Column 5: Social Links & App Buttons */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              Social Links
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              <li>
                <a
                  href="https://www.instagram.com/zisti.fooddelivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zisti on Instagram"
                  className="grid size-9 place-items-center rounded-full overflow-hidden transition hover:scale-110 hover:shadow-lg"
                >
                  <Icon name="instagram" className="size-9" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/61595725027222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zisti on Facebook"
                  className="grid size-9 place-items-center rounded-full overflow-hidden transition hover:scale-110 hover:shadow-lg"
                >
                  <Icon name="facebook" className="size-9" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918884599231"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zisti on WhatsApp"
                  className="grid size-9 place-items-center rounded-full overflow-hidden transition hover:scale-110 hover:shadow-lg"
                >
                  <Icon name="whatsapp" className="size-9" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:zistifooddelivery@gmail.com"
                  aria-label="Email Zisti"
                  className="grid size-9 place-items-center rounded-full overflow-hidden transition hover:scale-110 hover:shadow-lg"
                >
                  <Icon name="email" className="size-9" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zisti on YouTube"
                  className="grid size-9 place-items-center rounded-full overflow-hidden transition hover:scale-110 hover:shadow-lg"
                >
                  <Icon name="youtube" className="size-9" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zisti on X"
                  className="grid size-9 place-items-center rounded-full bg-black text-white ring-1 ring-neutral-700 transition hover:scale-110 hover:shadow-lg"
                >
                  <Icon name="x" className="size-4" />
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <StoreButtons stacked />
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-800 pt-8 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Zisti Ltd. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/security"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* In-Page Company Info Modal (No Navigation Away) */}
      {activeModal && COMPANY_MODALS[activeModal] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 text-neutral-900 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 grid size-8 place-items-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-neutral-200 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-2">
              <Logo className="h-8 w-auto" />
            </div>

            <div className="mt-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                {COMPANY_MODALS[activeModal].tag}
              </span>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">
                {COMPANY_MODALS[activeModal].title}
              </h3>
            </div>

            <div className="mt-4">{COMPANY_MODALS[activeModal].content}</div>

            <div className="mt-6 border-t border-neutral-200 pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-xl bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
