"use client"
import { Banner } from '@/components/banner';
import FooterSection from '@/components/Footer';
import { MediaCard } from '@/components/mediaCard';

const youth = [
  {
    id: 1,
    name: "Mr. Abdul Qadir Noorani",
    position: "Youth Chairman",
    image: "/youth/mr-qadir.jpg",
  },
  {
    id: 2,
    name: "Mr. KAMRAN TABAN",
    position: "SR.Vice Chairman",
    image: "/youth/mr-kamran.jpeg",
  },
  {
    id: 3,
    name: "Mr. Zain Fattani",
    position: "Vice Chairman",
    image: "/youth/mr-zain.jpeg",
  },
  {
    id: 4,
    name: "Mr. Zain Ghaziani",
    position: "GENERAL SECRETARY ",
    image: "/youth/mr-zain-ghaziani.jpg",
  },
  {
    id: 5,
    name: "Mr. Umer Tabani",
    position: "JOINT SECRETARY",
    image: "/youth/mr-umer.jpg",
  },
  {
    id: 6,
    name: "Mr. Muhammad Rizwan Teli",
    position: "TREASURER",
    image: "/youth/mr-rizwan.jpeg",
  },

]
export default function YouthPage() {
  return (
    <div className='min-h-screen mt-2'>
      <Banner
        image="/essence/1.jpg"
        title="Youth Members"
        subtitle="A small donation can create a big change."
      />
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5 md:gap-6 mb-3">
        {youth.map((item) => (
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
