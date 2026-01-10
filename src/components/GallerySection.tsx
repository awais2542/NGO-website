"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "../GalleryModal";

const images = [
  "/gallery/1.jfif",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jfif",
  "/gallery/6.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Gallery</h2>
          <p className="text-muted-foreground mt-2">
            A glimpse of our ongoing welfare activities
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee-rtl hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[360px] mx-3 cursor-pointer"
                onClick={() => setSelectedImage(index % images.length)}
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt="Gallery"
                    width={400}
                    height={300}
                    className="h-60 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <GalleryModal
            images={images}
            startIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
}
