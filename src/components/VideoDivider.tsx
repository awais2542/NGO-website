"use client";

interface VideoDividerProps {
  videoSrc: string; // Video file path or URL
  className?: string;
}

export default function VideoDivider({ videoSrc, className }: VideoDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-120 object-cover"
      />
    </div>
  );
}
