"use client";
import Image from "next/image";
import FooterSection from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/button";

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

      {/* 🔹 Page Heading */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5 bg-primary text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Events Gallery
        </h1>
        <p className="mt-1 sm:mt-2 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Our recent activities and events captured with love and impact.
        </p>
      </div>

      {/* 🔹 Gallery Grid */}
      <div className="flex-1 px-3 sm:px-6 pb-10 sm:pb-14 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg bg-black"
            >
              {/* Image */}
             <Image
                  src={event.images && event.images.length > 0 
                        ? event.images[0] 
                        : "/placeholder.jpg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />

              {/* Gradient Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-100 md:opacity-0
                  md:group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* Text Content */}
              <div className="absolute inset-0 flex items-end p-3 sm:p-5">
                <div
                  className="
                    transform translate-y-0 opacity-100
                    md:translate-y-10 md:opacity-0
                    md:group-hover:translate-y-0 md:group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  <h3 className="text-white text-sm sm:text-lg md:text-xl font-bold">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1">
                    {event.description}
                  </p>
                </div>
              </div>

            </div>
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
