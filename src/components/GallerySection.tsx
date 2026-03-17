"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import GalleryModal from "./demos/GalleryModal";
import { OverlayCard } from "./overlayCard";
import { SectionHeading } from "./sectionHeading";

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
       {/* Button  */}
        <div className="w-full flex items-center justify-center mt-10 sm:mt-16">
              <Link href="/Gallery">
                <Button
                  size="lg"
                  className="
                  px-5
                  bg-secondary text-primary-foreground
                  transition-all duration-300 ease-in-out transform-gpu
                  hover:bg-secondary/90
                  hover:scale-105
                  active:scale-95
                "
                >
                  View All
                </Button>
              </Link>
            </div>

            


      </div>
    </section>
  );
}
