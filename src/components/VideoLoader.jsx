import { useState, useRef } from "react";

export function VideoLoader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef(null);

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete?.();
    }, 700);
  };

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-black transition-opacity duration-700 ease-out select-none ${
        isFadingOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ margin: 0, padding: 0 }}
    >
      {/* 100% Full-View Edge-to-Edge Video covering entire viewport */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        className="h-full w-full object-cover"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          display: "block",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  );
}

export default VideoLoader;
