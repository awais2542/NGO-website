"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/card";
import { cn } from "@/lib/utils";

export type MediaCardProps = {
  id?: string;
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  className?: string;
};

export function MediaCard({
  id,
  title,
  description,
  image,
  onClick,
  className,
}: MediaCardProps) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={cn("group", className)}
    >
      <Card className="py-0 h-full w-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardContent className="p-0 text-center">

          {/* IMAGE */}
          <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* TEXT AREA */}
          <div className="p-3 sm:p-4">
            <h3 className="text-xs sm:text-sm md:text-base font-semibold">
              {title}
            </h3>

            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">
              {description}
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}