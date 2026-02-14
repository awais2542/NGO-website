"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageDivider() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering || window.innerWidth < 1024) return; // lg se pehle off

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      onMouseEnter={() => window.innerWidth >= 1024 && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="
        relative w-full
        h-[180px] sm:h-[240px] md:h-[320px] lg:h-[480px]
        overflow-hidden cursor-pointer
      "
    >
      {/* BASE IMAGE */}
      <Image
        src="/carousel/image3.jpg"
        alt="Base Image"
        fill
        priority
        className="object-cover brightness-75 contrast-90"
      />

      {/* HOVER IMAGE — ONLY DESKTOP */}
      {isHovering && (
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            clipPath: `circle(140px at ${position.x}% ${position.y}%)`,
            willChange: "clip-path",
          }}
        >
          <Image
            src="/donation/donation.jpg"
            alt="Hover Image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* MOBILE + TABLET FALLBACK */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/carousel/image3.jpg"
          alt="Mobile Image"
          fill
          className="object-cover opacity-25"
        />
      </div>
    </div>
  );
}
