import { useState, useRef, useEffect } from "react";

export function VideoLoader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef(null);

  const handleFinish = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isFadingOut) return;
    setIsFadingOut(true);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      onComplete?.();
    }, 600);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    // Safety fallback: ensure user never gets stuck if video stalls
    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 6500);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-50 flex h-dvh w-screen items-center justify-center overflow-hidden bg-black transition-opacity duration-600 ease-out select-none ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ margin: 0, padding: 0 }}
    >
      {/* Skip Button */}
      <button
        type="button"
        onClick={handleFinish}
        className="absolute right-5 top-5 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md transition hover:bg-black/90 active:scale-95 cursor-pointer"
      >
        Skip
        <span aria-hidden="true">&rarr;</span>
      </button>

      {/* Fully responsive uncropped video centered on all screens */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        className="max-h-full max-w-full object-contain"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  );
}

export default VideoLoader;
