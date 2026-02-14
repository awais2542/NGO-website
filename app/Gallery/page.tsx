import Image from "next/image";
import FooterSection from "@/components/Footer";
import GalleryButton from "@/components/GalleryButton";

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "Details about Event 1...",
    img: "/gallery/1.jfif",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Details about Event 2...",
    img: "/gallery/2.jpg",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Details about Event 3...",
    img: "/gallery/3.jpg",
  },
  {
    id: 4,
    title: "Event 4",
    description: "Details about Event 4...",
    img: "/gallery/4.jpg",
  },
  {
    id: 5,
    title: "Event 5",
    description: "Details about Event 5...",
    img: "/gallery/5.jfif",
  },
  {
    id: 6,
    title: "Event 6",
    description: "Details about Event 6...",
    img: "/gallery/6.jpg",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* 🔹 Page Heading */}
      <div className="px-6 pt-14 pb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          NGO Events Gallery
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our recent activities and events captured with love and impact.
        </p>
      </div>

      {/* 🔹 Gallery Grid */}
      <div className="flex-1 px-6 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl bg-black"
            >
              {/* Image */}
              <Image
                src={event.img}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 contrast-90"
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
              <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                <div
                  className="
                    transform translate-y-0 opacity-100
                    md:translate-y-10 md:opacity-0
                    md:group-hover:translate-y-0 md:group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  <h3 className="text-white text-lg sm:text-xl font-bold">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-sm mt-1 sm:mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
                
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Footer */}
      <FooterSection />
    </div>
  );
}
