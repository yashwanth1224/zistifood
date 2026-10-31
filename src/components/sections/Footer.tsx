import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { StoreButtons } from "@/components/StoreButtons";

export function Footer() {
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
                <Link to="/about" className="transition hover:text-white">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="mailto:zistifooddelivery@gmail.com?subject=Report%20Fraud"
                  className="transition hover:text-white"
                >
                  Report Fraud
                </a>
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
    </footer>
  );
}

export default Footer;
