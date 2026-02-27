"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/button";

interface GalleryModalProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  startIndex,
  onClose,
}: GalleryModalProps) {
  const [index, setIndex] = useState(startIndex);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 text-white"
        aria-label="Close gallery"
      >
        <X size={32} />
      </Button>

      {/* Prev */}
      <Button
        onClick={prev}
        variant="ghost"
        size="icon"
        className="absolute left-6 text-white"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </Button>

      {/* Image */}
      <div className="max-w-4xl w-full px-4">
        <Image
          src={images[index]}
          alt="Gallery Image"
          width={900}
          height={600}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>

      {/* Next */}
      <Button
        onClick={next}
        variant="ghost"
        size="icon"
        className="absolute right-6 text-white"
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </Button>
    </div>
  );
}
