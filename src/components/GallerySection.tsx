"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./demos/GalleryModal";
import GalleryButton from "./GalleryButton";
import Link from "next/link";

const images = [
  {
    src: "/gallery/1.jfif",
    title: "Food Distribution",
    desc: "Helping families with meals",
  },
  {
    src: "/gallery/2.jpg",
    title: "Medical Camp",
    desc: "Free health checkups",
  },
  {
    src: "/gallery/3.jpg",
    title: "Education Support",
    desc: "Books for children",
  },
  {
    src: "/gallery/4.jpg",
    title: "Winter Drive",
    desc: "Warm clothes distribution",
  },
  {
    src: "/gallery/5.jfif",
    title: "Clean Water",
    desc: "Safe water facilities",
  },
  {
    src: "/gallery/6.jpg",
    title: "Community Care",
    desc: "Serving humanity",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    // <section className="py-16 bg-input overflow-hidden">
    <section className="bg-input overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pb-44 pt-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Gallery</h2>
          <p className="text-muted-foreground mt-2">
            A glimpse of our ongoing welfare activities
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="marquee flex w-max">
            {[...images, ...images].map((item, index) => (
              <div
                key={index}
                className="relative w-[280px] md:w-[360px] mx-3 cursor-pointer group"
                onClick={() => setSelectedImage(index % images.length)}
              >
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <GalleryModal
            images={images.map((i) => i.src)}
            startIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
        {/* Button */}
    <div className="w-full flex mt-16 justify-start md:justify-center lg:justify-start">
  <GalleryButton />
</div>


      </div>
    </section>
  );
}
