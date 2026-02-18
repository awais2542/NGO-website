import Image from "next/image";
import FooterSection from "@/components/Footer";

const events = [
  { id: 1, title: "Event 1", description: "Details about Event 1...", img: "/gallery/1.jfif" },
  { id: 2, title: "Event 2", description: "Details about Event 2...", img: "/gallery/2.jpg" },
  { id: 3, title: "Event 3", description: "Details about Event 3...", img: "/gallery/3.jpg" },
  { id: 4, title: "Event 4", description: "Details about Event 4...", img: "/gallery/4.jpg" },
  { id: 5, title: "Event 5", description: "Details about Event 5...", img: "/gallery/5.jfif" },
  { id: 6, title: "Event 6", description: "Details about Event 6...", img: "/gallery/6.jpg" },
];

export default function EventsPage() {
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
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-black"
            >
              {/* Image */}
              <Image
                src={event.img}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-[180px] sm:h-[220px] md:h-[240px] object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 contrast-90"
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

      {/* 🔹 Footer */}
      <FooterSection />
    </div>
  );
}
