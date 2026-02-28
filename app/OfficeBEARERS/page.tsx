"use client"
import { Banner } from '@/components/Banner';
import FooterSection from '@/components/Footer';
import { MediaCard } from '@/components/mediaCard';

const officers = [
  {
    id: 1,
    name: "Mr. Shabbir Abdul Razzak Teli",
    position: "Chairman",
    image: "/officers/chairman.jpg",
  },
  {
    id: 2,
    name: "Mr. Muhammad Shabbir Noorsumar",
    position: "SR.Vice Chairman",
    image: "/officers/sr.jfif",
  },
  {
    id: 3,
    name: "Mr. Muhammad Mushtaq Ahmedani",
    position: "Vice Chairman",
    image: "/officers/vice1.jpg",
  },
  {
    id: 4,
    name: "Mr.Abdul Aziz",
    position: "Vice Chairman",
    image: "/officers/vice2.jpg",
  },
  {
    id: 5,
    name: "Mr. Asif Abdul Ghaffar Davani",
    position: "General Secretary",
    image: "/officers/general.jpg",
  },
  {
    id: 6,
    name: "Muhammad Raif Sheikha",
    position: "JOINT  Secretary",
    image: "/officers/joint.jpg",
  },
  {
    id: 7,
    name: "Abdul Jabbar Ahmedani",
    position: "TREASURER",
    image: "/officers/treasurer.jpg",
  }
]

export default function OfficeBearersPage() {
  return (
    <div className='min-h-screen mt-2'>
      <Banner
        image="/essence/1.jpg"
        title="Office Bearers"
        subtitle="A small donation can create a big change."
      />
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5 md:gap-6 mb-3">
        {officers.map((item) => (
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
