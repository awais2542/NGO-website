"use client";

import { useEffect, useRef } from "react";

interface VideoDividerProps {
  videoSrc: string;
  className?: string;
}

export default function VideoDivider({
  videoSrc,
  className,
}: VideoDividerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force replay on mobile if paused
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        className="w-full h-[60vh] md:h-[80vh] object-cover"
      />
    </div>
  );
}
