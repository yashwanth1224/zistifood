import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-neutral-500">
            Last Updated: October 30, 2026 • Governing Law: Digital Personal Data Protection Act, 2023 (India)
          </p>
        </header>

        {/* Content Body */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 text-sm leading-relaxed text-neutral-300">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">1. Introduction</h2>
            <p className="mt-2">
              Welcome to Zisti ("Zisti", "we", "our", or "us"), based in Bengaluru, Karnataka, India. We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs your use of our website, mobile applications, and online food ordering platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p className="mt-2">
              When you visit our site, join our waitlist, or use our services, we collect:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-300">
              <li><strong>Personal Identifiers:</strong> Your phone number, full name, and email address when you register or request early access.</li>
              <li><strong>Delivery Information:</strong> Delivery address and location coordinates for order routing.</li>
              <li><strong>Technical & Usage Data:</strong> Device type, browser details, IP address, and platform usage analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
            <p className="mt-2">We process your personal data for legitimate business purposes:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-300">
              <li>To provide early access invites and verify accounts via phone or WhatsApp.</li>
              <li>To manage restaurant orders, assign delivery partners, and provide live delivery tracking.</li>
              <li>To communicate important service announcements, security alerts, and customer support.</li>
              <li>To prevent fraud and maintain the security of our ordering systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">4. Data Sharing & Third Parties</h2>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or trade your personal data. We only share necessary data with trusted service providers:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-300">
              <li><strong>Restaurant Partners:</strong> Dish details and order notes needed to prepare your food.</li>
              <li><strong>Delivery Partners:</strong> Your delivery address and phone number to fulfill delivery.</li>
              <li><strong>Legal Compliance:</strong> When required by governing Indian law, regulatory authority, or court order.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">5. Data Protection & Security</h2>
            <p className="mt-2">
              We employ strict technical and organizational safeguards including encrypted data transmission (HTTPS/TLS) and restricted database access to safeguard your personal information against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">6. Your Rights</h2>
            <p className="mt-2">
              Under India's Digital Personal Data Protection Act, 2023, you have the right to request access to the personal data we hold about you, request corrections, or request deletion of your account and personal information at any time by contacting our support team.
            </p>
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
            <h2 className="text-lg font-bold text-white">7. Grievance Officer & Contact Us</h2>
            <p className="mt-2 text-neutral-400">
              If you have any questions, concerns, or grievances regarding this Privacy Policy or our data practices, please reach out to our designated Grievance Officer:
            </p>
            <div className="mt-4 space-y-1 text-neutral-300">
              <p><strong>Zisti Support & Grievance Cell</strong></p>
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

export default PrivacyPolicy;
