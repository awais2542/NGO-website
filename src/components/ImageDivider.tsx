"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageDivider() {
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!isHovering) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPosition({ x, y })
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[230px] sm:h-[300px] md:h-[400px]
                 overflow-hidden object-cover cursor-pointer"
    >
      {/* FRONT / BASE IMAGE (ALWAYS VISIBLE) */}
      <Image
        src="/carousel/image3.jpg"
        alt="Base Image"
        fill
        priority
        className="object-cover brightness-75 contrast-90"
      />

      {/* HOVER IMAGE (CIRCULAR REVEAL) */}
      {isHovering && (
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            clipPath: `circle(140px at ${position.x}% ${position.y}%)`,
            willChange: "clip-path",
          }}
        >
          <Image
            src="/carousel/image2.jpg"
            alt="Hover Image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* MOBILE FALLBACK */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/carousel/image2.jpg"
          alt="Mobile Image"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* OPTIONAL TEXT */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="bg-black/50 text-white px-4 py-2 rounded-lg text-xs sm:text-sm">
          Hover to reveal
        </p>
      </div> */}
    </div>
  )
}
