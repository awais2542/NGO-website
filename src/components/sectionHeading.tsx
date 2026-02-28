import * as React from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
    title: string
    subtitle?: string
    align?: "left" | "center"
    className?: string
}

export function SectionHeading({
    title,
    subtitle,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-4 lg:mb-8",
                align === "center" && "text-center",
                align === "left" && "text-left",
                className
            )}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-3  text-sm sm:text-base max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    )
}