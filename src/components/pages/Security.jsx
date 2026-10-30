import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export function Security() {
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
            Safety & Infrastructure
          </span>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Security & Safety
          </h1>
          <p className="mt-2 text-xs text-neutral-500">
            Last Updated: October 30, 2026 • Platform Standards: ISO/IEC 27001 & PCI-DSS Aligned
          </p>
        </header>

        {/* Content Body */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 text-sm leading-relaxed text-neutral-300">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">1. Our Commitment to Security</h2>
            <p className="mt-2">
              At Zisti, safeguarding user data, payment transactions, and the physical safety of food deliveries is central to our platform. We implement industry-leading technical controls, secure architecture, and strict operational guidelines to protect every customer, restaurant partner, and delivery partner.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">2. Data Encryption & Cloud Architecture</h2>
            <p className="mt-2">
              We employ defense-in-depth security principles across our infrastructure:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-300">
              <li><strong>Encryption in Transit:</strong> All web and mobile communications use modern TLS 1.3 / HTTPS encryption, preventing interception or man-in-the-middle attacks.</li>
              <li><strong>Encryption at Rest:</strong> User database records and credentials are protected with industry-standard AES-256 encryption.</li>
              <li><strong>Strict Access Controls:</strong> Internal access to user records requires multi-factor authentication (MFA) and least-privilege role-based access controls (RBAC).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">3. Payment & Transaction Security</h2>
            <p className="mt-2">
              All financial transactions on Zisti are processed through certified, RBI-licensed and PCI-DSS Level 1 compliant payment gateways. Zisti never stores your credit/debit card numbers, CVV codes, or net banking passwords on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">4. Account Protection & OTP Verification</h2>
            <p className="mt-2">
              User logins, early access invites, and mobile verification utilize time-based One-Time Passwords (OTPs) sent directly to your verified phone number or WhatsApp. Our authentication endpoints feature automated rate limiting and bot detection to thwart credential stuffing and brute-force attempts.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">5. Food Safety & Delivery Hygiene</h2>
            <p className="mt-2">
              Safety extends beyond software to every meal we deliver:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-300">
              <li><strong>Tamper-Evident Packaging:</strong> Restaurant partners are required to use secure, tamper-evident seals on delivery bags.</li>
              <li><strong>Partner Background Verification:</strong> Delivery partners undergo identity and background verification before joining the fleet.</li>
              <li><strong>Contactless Delivery:</strong> Customers can select contactless drop-off for safety and peace of mind.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white">6. Vulnerability Disclosure & Bug Reporting</h2>
            <p className="mt-2">
              We welcome security researchers and developers to ethically discover and responsibly disclose potential vulnerabilities. If you identify a security defect on our website or applications, please report it immediately to our security response team before disclosing it publicly.
            </p>
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-white">7. Security Contact & Incident Response</h2>
            <p className="mt-2 text-neutral-400">
              For security inquiries, urgent incident reports, or suspected unauthorized activity on your account, contact our dedicated security team:
            </p>
            <div className="mt-4 space-y-1 text-neutral-300 text-xs sm:text-sm">
              <p><strong>Zisti Platform Security Team</strong></p>
              <p>📧 Security Desk: <a href="mailto:zistifooddelivery@gmail.com?subject=Security%20Inquiry" className="text-brand hover:underline">zistifooddelivery@gmail.com</a></p>
              <p>📞 Emergency Support: +91 8884599231</p>
              <p>📍 Operations: Bengaluru, Karnataka, India</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 sm:mt-14 border-t border-neutral-800 pt-6 sm:pt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Zisti Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Security;
