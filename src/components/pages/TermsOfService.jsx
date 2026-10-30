import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-12 sm:py-16 text-white selection:bg-brand selection:text-white">
      <div className="mx-auto max-w-3xl">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 sm:pb-8">
          <Link to="/" className="inline-block transition hover:opacity-90">
            <Logo className="h-10 sm:h-12 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 transition hover:text-white"
          >
            <span>← Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mt-8 sm:mt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Legal & Compliance
          </span>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-neutral-500">
            Last Updated: October 30, 2026 • Jurisdiction: Bengaluru, Karnataka, India
          </p>
        </header>

        {/* Content Body */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 text-sm leading-relaxed text-neutral-300">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or using the Zisti website, mobile applications, and online food ordering services ("Platform"), you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. Eligibility & Account Registration</h2>
            <p className="mt-2">
              You must be at least 18 years old or possess legal parental consent to register an account. You agree to provide accurate, current, and complete registration information (including phone number and name) and are responsible for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. Food Ordering & Pricing</h2>
            <p className="mt-2">
              Zisti acts as a technology platform connecting consumers with independent restaurant partners and independent delivery partners. All food preparation, packaging, and food quality are the direct responsibility of the respective restaurant partner. Prices, taxes, and delivery fees displayed are subject to confirmation at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">4. Cancellations & Refunds</h2>
            <p className="mt-2">
              Orders may be cancelled only before the restaurant has accepted and started food preparation. In cases of damaged packaging, missing items, or failed deliveries, refund requests will be investigated and processed in accordance with our standard refund policy through original payment methods or platform credits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">5. Intellectual Property Rights</h2>
            <p className="mt-2">
              All visual trademarks, logos, brand names, software code, graphic designs, and content on the Zisti platform are the proprietary intellectual property of Zisti Ltd. No part of the platform may be copied, reproduced, or exploited without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">6. Limitation of Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by applicable Indian law, Zisti shall not be liable for any indirect, incidental, or consequential damages resulting from platform downtime, delivery delays caused by traffic or severe weather, or food quality discrepancies originating from independent restaurant kitchens.
            </p>
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
            <h2 className="text-lg font-bold text-white">7. Governing Law & Contact</h2>
            <p className="mt-2 text-neutral-400">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
            </p>
            <div className="mt-4 space-y-1 text-neutral-300">
              <p><strong>Zisti Legal & Support Operations</strong></p>
              <p>📧 Email: <a href="mailto:zistifooddelivery@gmail.com" className="text-brand hover:underline">zistifooddelivery@gmail.com</a></p>
              <p>📞 Phone: +91 8884599231</p>
              <p>📍 Location: Bengaluru, Karnataka, India</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-neutral-800 pt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Zisti Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
