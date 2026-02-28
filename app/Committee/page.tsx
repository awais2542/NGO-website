"use client"
import { Banner } from '@/components/banner';
import FooterSection from '@/components/footer';
import { MediaCard } from '@/components/mediaCard';

const committee = [
  {
    id: 1,
    name: "Mr. Muhammad Asif Ghaziani",
    position: "Mc Member",
    image: "/committee/mr-asif.jpg",
  },
  {
    id: 2,
    name: "Mr Muhammad Shahid Salat",
    position: "Mc Member",
    image: "/committee/mr-shahid.jpg",
  },
  {
    id: 3,
    name: "Mr. Muhammad Asif Bakali",
    position: "Mc Member",
    image: "/committee/mr-asif-bakali.jpg",
  },
  {
    id: 4,
    name: "Mr. Kamran Iqbal Dayala",
    position: "Mc Member",
    image: "/committee/mr-kamran.jpeg",
  },
  {
    id: 5,
    name: "Mr. Ishtyaq Ahmed Makda",
    position: "Mc Member",
    image: "/committee/mr-ishtaq.jpg",
  },
  {
    id: 6,
    name: "Mr. Ismail Patel",
    position: "Mc Member",
    image: "/committee/mr-ismail.jpg",
  },
  {
    id: 7,
    name: "Mr. FAISAL PUNJANI",
    position: "Mc Member",
    image: "/committee/mr-faisal.jfif",
  }, {
    id: 8,
    name: "Mr. Muhammad Ali Patel",
    position: "Mc Member",
    image: "/committee/mr-ali.jpg",
  }
]
export default function CommitteePage() {
  return (
    <div className='min-h-screen mt-2'>
      <Banner
        image="/essence/1.jpg"
        title="Managing Committee"
        subtitle="A small donation can create a big change."
      />
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5 md:gap-6 mb-3">
        {committee.map((item) => (
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
