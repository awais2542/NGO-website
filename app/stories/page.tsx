"use client";

import FooterSection from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "A New Beginning for Ahmed",
    desc: "With your support, Ahmed received education sponsorship and is now pursuing his dream career.",
    img: "/stories/1.jpg",
  },
  {
    title: "Food Relief for 200 Families",
    desc: "Our Ramadan drive provided essential food supplies to over 200 deserving families.",
    img: "/stories/food.jpg",
  },
  {
    title: "Empowering Women Through Skills",
    desc: "Women in our vocational program are now financially independent and confident.",
    img: "/stories/sas.jpg",
  },
  {
    title: "Emergency Flood Relief",
    desc: "We delivered emergency kits and medical aid during recent flood crises.",
    img: "/stories/flood.jpg",
  },
  {
    title: "IT Training Success",
    desc: "Youth completed IT training and secured remote job opportunities.",
    img: "/stories/itt.jpg",
  },
  {
    title: "Healthcare Support Program",
    desc: "Free medical camps helped hundreds receive proper treatment.",
    img: "/stories/health.jpg",
  },
];

export default function StoriesPage() {
  return (
    <section className="w-full bg-gray-50 min-h-screen mt-3">
      {/* Banner Image */}
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[400px]">
        <Image  
          src="/stories/storie.jpg"
          alt="stories Banner"
          fill 
          className="object-fill"
          priority
        />  
      </div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Stories of Impact
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90">
          Real stories. Real change. Discover how your support is transforming lives.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={story.img}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {story.desc}
                </p>

                <Link
                  href="#"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
      <FooterSection />
    </section>
  );
}
