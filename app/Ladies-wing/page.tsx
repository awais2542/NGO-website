"use client"
import { Banner } from '@/components/banner';
import FooterSection from '@/components/Footer';
import { MediaCard } from '@/components/mediaCard';

const Ladies = [
  {
    id: 1,
    name: "Mrs.Wafa Anis",
    position: "Chair Person Ladies Wing",
    image: "/Ladies/mrs-wafa.jpg",
  },
]
export default function LadiesWingPage() {
  return (
    <div className='min-h-screen mt-2'>
      <Banner
        image="/essence/1.jpg"
        title="Ladies Member"
        subtitle="A small donation can create a big change."
      />
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5 md:gap-6 mb-3">
        {Ladies.map((item) => (
          <MediaCard
            key={item.id}
            title={item.name}
            description={item.position}
            image={item.image}
          />
        ))}
      </div>
      <FooterSection />
    </div>
  )
}
