"use client";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import FooterSection from "@/components/footer";
import { OverlayCard } from "@/components/overlayCard";
import Image from "next/image";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Eid Milan 2007",
    description: "Nov 18, 2007",
    images: [
      "/gallery/milad/5.jfif",
      "/gallery/milad/2.jfif",
      "/gallery/milad/3.jfif",
    ],
  },
  {
    id: 2,
    title: "Event 2",
    description: "Details about Event 2...",
    images: [
      "/gallery/4.jpg",
      "/gallery/5.jfif",
      "/gallery/6.jpg",
    ],
  },
  {
    id: 3,
    title: "Event 3",
    description: "Details about Event 2...",
    images: [
      "/gallery/4.jpg",
      "/gallery/5.jfif",
      "/gallery/6.jpg",
    ],
  },
  {
    id: 4,
    title: "Event 4",
    description: "Details about Event 2...",
    images: [
      "/gallery/4.jpg",
      "/gallery/5.jfif",
      "/gallery/6.jpg",
    ],
  },
  {
    id: 5,
    title: "Event 5",
    description: "Details about Event 2...",
    images: [
      "/gallery/4.jpg",
      "/gallery/5.jfif",
      "/gallery/6.jpg",
    ],
  },
  {
    id: 6,
    title: "Event 6",
    description: "Details about Event 2...",
    images: [
      "/gallery/4.jpg",
      "/gallery/5.jfif",
      "/gallery/6.jpg",
    ],
  },
];


type EventType = (typeof events)[number];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen mt-2 bg-gray-100 flex flex-col overflow-hidden">

      <Banner
        image="/partners/1.jpg"
        title="Events Gallery"
        subtitle="Our recent activities and events captured with love and impact."
      />

      {/* 🔹 Gallery Grid */}
      <div className="flex-1 px-3 sm:px-6 pb-10 sm:pb-14 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {events.map((item, index) => (
                <OverlayCard
                  key={index}
                  src={item.images[0]}
                  title={item.title}
                  desc={item.description}
                  onClick={() => setSelectedEvent(item)}
                />
              ))}
            </div>
      </div>

      {/* event modle */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 overflow-y-auto p-6">

          {/* Close Event */}
          <Button
            onClick={() => setSelectedEvent(null)}
            variant="ghost"
            size="icon"
            className="absolute top-5 right-5 text-white text-2xl"
            aria-label="Close event"
          >
            ✕
          </Button>

          <h2 className="text-white text-2xl font-bold mb-6">
            {selectedEvent.title}
          </h2>

          {/* Event Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {selectedEvent.images.map((img, index) => (
              <div key={index} className="cursor-pointer">
                <Image
                  src={img}
                  alt="event image"
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover rounded-lg"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Full img Modle */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4">

          {/* Close Image */}
          <Button
            onClick={() => setSelectedImage(null)}
            variant="ghost"
            size="icon"
            className="absolute top-5 right-5 text-white text-3xl"
            aria-label="Close image"
          >
            ✕
          </Button>

          <Image
            src={selectedImage}
            alt="Full Image"
            width={1000}
            height={700}
            className="max-h-[90vh] w-auto object-contain rounded-xl"
          />
        </div>
      )}


      {/* 🔹 Footer */}
      <FooterSection />
    </div>
  );
}
