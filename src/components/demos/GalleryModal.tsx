"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
      <button onClick={onClose} className="absolute top-6 right-6 text-white">
        <X size={32} />
      </button>

      {/* Prev */}
      <button onClick={prev} className="absolute left-6 text-white">
        <ChevronLeft size={40} />
      </button>

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
      <button onClick={next} className="absolute right-6 text-white">
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
