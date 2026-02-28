"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./demos/GalleryModal";
import Link from "next/link";
import { Button } from "./button";
import { SectionHeading } from "./section-heading";
import { OverlayCard } from "./OverlayCard";

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
      <div className="max-w-7xl mx-auto px-4 pb-16 sm:pb-24 pt-12 sm:pt-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <SectionHeading
            title="Our Gallery"
            subtitle="A glimpse of our ongoing welfare activities"
          />

        </div>

        {/* Marquee */}

        <div className="relative overflow-hidden">
          <div className="marquee flex w-max">
            {[...images, ...images].map((item, index) => (
              <OverlayCard
                key={index}
                src={item.src}
                title={item.title}
                desc={item.desc}
                onClick={() => setSelectedImage(index % images.length)}
              />
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
        <div className="w-full flex mt-10 sm:mt-16 justify-start md:justify-center lg:justify-start">
          <Link href="/Gallery" className="block w-full">
            <Button
              size="lg"
              className="
            w-full lg:w-auto px-5
            bg-secondary text-primary-foreground
            transition-all duration-300 ease-in-out transform-gpu
            hover:bg-secondary/90
            hover:scale-105
            active:scale-95
          "
            >
              Donate Now
            </Button>
          </Link>
        </div>


      </div>
    </section>
  );
}
