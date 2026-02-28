"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/sectionHeading"

type BannerProps = {
    image: string
    title: string
    subtitle?: string
    height?: string
    overlayOpacity?: string
    className?: string
}

export function Banner({
    image,
    title,
    subtitle,
    height = "h-[160px] sm:h-[250px] md:h-[30vh] lg:h-[40vh] xl:h-[50vh]",
    overlayOpacity = "brightness-75 contrast-90",
    className,
}: BannerProps) {
    return (
        <div className={cn("relative w-full", height, className)}>
            <Image
                src={image}
                alt={title}
                fill
                priority
                className={cn("object-cover", overlayOpacity)}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <SectionHeading
                    title={title}
                    subtitle={subtitle}
                    align="center"
                    className="text-white drop-shadow-lg"
                />
            </div>
        </div>
    )
}