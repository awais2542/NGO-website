import Image from "next/image";
import { cn } from "@/lib/utils"

export type OverlayCardProps = {
    src: string;
    title: string;
    desc?: string;
    onClick?: () => void;
    className?: string;
};

export function OverlayCard({
    src,
    title,
    desc,
    onClick,
    className,
}: OverlayCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative w-[220px] sm:w-[260px] md:w-[360px] mx-2 sm:mx-3 cursor-pointer group",
                className
            )}
        >
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={src}
                    alt={title}
                    width={400}
                    height={300}
                    className="h-40 sm:h-52 md:h-60 w-full object-cover
            transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">
                    {title}
                </h3>
                {desc && (
                    <p className="text-white/80 text-sm">{desc}</p>
                )}
            </div>
        </div>
    );
}