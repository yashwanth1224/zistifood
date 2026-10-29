import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoLoader } from "./components/VideoLoader";
import { Hero } from "./components/Hero";
import { ValueProp as Stats } from "./components/sections/ValueProp";
import { AppFeatures } from "./components/sections/AppFeatures";
import { ComingSoon } from "./components/ComingSoon";
import { DownloadBanner } from "./components/sections/DownloadBanner";
import { Footer } from "./components/Footer";
import { Placeholder } from "./components/Placeholder";
import { Logo } from "./components/Logo";

function AuthModal({ mode, onClose, onSwitch }) {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 text-neutral-900 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 grid size-8 place-items-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-neutral-200 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-2">
          <Logo className="h-10 w-auto" />
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight">
          {mode === "login" ? "Log in" : "Sign up"}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">
          Enter your phone number to receive an early access invite
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-center text-emerald-800">
            <p className="font-bold">🎉 Verification Code Sent!</p>
            <p className="mt-1 text-xs text-emerald-600">
              We've sent an early access confirmation to +91 {phone}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-3 text-xs font-semibold text-emerald-700 underline cursor-pointer"
            >
              Change number
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (phone) setSubmitted(true);
            }}
            className="mt-6 space-y-4"
          >
            {mode === "signup" && (
              <div>
                <label className="text-xs font-semibold text-neutral-600">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-neutral-600">Phone Number</label>
              <div className="mt-1 flex items-center rounded-xl border border-neutral-300 px-3 py-2 focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
                <span className="mr-2 text-sm font-semibold text-neutral-500">🇮🇳 +91</span>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter 10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full bg-transparent text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-dark cursor-pointer"
            >
              Get Early Access Invite
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-neutral-500">
          {mode === "login" ? (
            <>
              New to Zisti?{" "}
              <button
                type="button"
                onClick={() => onSwitch("signup")}
                className="font-bold text-brand hover:underline cursor-pointer"
              >
                Join Waitlist
              </button>
            </>
          ) : (
            <>
              Already requested invite?{" "}
              <button
                type="button"
                onClick={() => onSwitch("login")}
                className="font-bold text-brand hover:underline cursor-pointer"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function HomePage({ onOpenAuth }) {
  return (
    <main>
      <Hero onOpenAuth={onOpenAuth} />
      <Stats />
      <AppFeatures />
      <ComingSoon />
      <DownloadBanner />
    </main>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authMode, setAuthMode] = useState(null);

  return (
    <BrowserRouter>
      {isLoading && <VideoLoader onComplete={() => setIsLoading(false)} />}

      <Routes>
        <Route
          path="/"
          element={<HomePage onOpenAuth={(mode) => setAuthMode(mode)} />}
        />
        <Route
          path="/privacy"
          element={<Placeholder title="Privacy Policy" />}
        />
        <Route
          path="/security"
          element={<Placeholder title="Security & Safety" />}
        />
        <Route
          path="/terms"
          element={<Placeholder title="Terms of Service" />}
        />
        <Route
          path="/careers"
          element={<Placeholder title="Careers at Zisti" />}
        />
        <Route
          path="/partner"
          element={<Placeholder title="Partner With Zisti" />}
        />
        <Route
          path="/about"
          element={<Placeholder title="About Zisti" />}
        />
        <Route
          path="/blog"
          element={<Placeholder title="Zisti Blog & News" />}
        />
      </Routes>

      <Footer />

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSwitch={(mode) => setAuthMode(mode)}
        />
      )}
    </BrowserRouter>
  );
}
