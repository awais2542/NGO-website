import React from 'react'
import FooterSection from '@/components/footer'
import Image from 'next/image'
import { SectionHeading } from '@/components/sectionHeading';
import { Banner } from '@/components/banner';

const partners = [
  { img: "/pride/1.jpg", link: "http://www.gulfminerals.com/" },
  { img: "/pride/2.jpg", link: "https://designanddepth.com/" },
  { img: "/pride/3.jpg", link: "http://manalinternational.com/" },
  { img: "/pride/4.jpg", link: "http://www.elegance3.com/main.html" },
  { img: "/pride/5.png", link: "https://systologic.com/systologic/" },
  { img: "/pride/6.png", link: "http://www.nua.com.pk/about.html" },
  { img: "/pride/7.png", link: "https://ttigroup.com.pk/" },
];

export default function page() {
  return (
    <div className='min-h-screen bg-gray-50 mt-2'>

      {/* Banner Imag */}
      <Banner
        image="/partners/3.jpg"
        title="Our Partners"
        subtitle="A small donation can create a big change."
      />



      {/* Text */}
      <div className="w-full py-10 sm:py-14 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-5">

            <span className="block">
              <strong>Memon Foundation</strong> works with the government, private companies, non-profits and individuals to address complex challenges faced by the people of Lyari.
            </span>

            <span className="block">
              Our journey would’ve been short and unsustainable without the support of our pride and collaborators. They contribute not only financially, but also with their wisdom, experience and expertise in building a stronger and progressive Lyari.
            </span>

            <span className="block">
              In the spirit of entrepreneurship, mothers are encouraged to set up home-made food stalls to initiate financial independence.
            </span>

          </p>

        </div>
      </div>

      {/* Banner Donors and Collaborators */}
      <div className="w-full bg-primary text-white py-6 sm:py- text-center">
        <SectionHeading
          title="OUR PRIDE"
          className='mb-0 lg:mb-0'
        />
      </div>
      {/* Donors Img */}
      <div className="px-4 mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-[120px] sm:h-[140px] md:h-[160px] 
                            rounded-xl overflow-hidden shadow-md hover:scale-105 
                            transition-transform duration-300"
            >
              <Image
                src={partner.img}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain bg-white p-3"
              />
            </a>
          ))}

        </div>
      </div>

      {/* Banner Schools and colleges */}
      <div className="w-full bg-primary text-white py-6 sm:py- text-center mt-3">
        <SectionHeading
          title="Our Personalities"
          className='mb-0 lg:mb-0'
        />
      </div>
      {/* personality  */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Profile 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-2xl shadow-md">

            {/* Image */}
            {/* <div className="relative w-full md:w-1/3 h-[250px] rounded-xl overflow-hidden">
        <Image
          src="/profiles/ghayas.jpg"
          alt="Squadron Leader Muhammad Ghayas Ahmedani"
          fill
          className="object-cover"
        />
      </div> */}

            {/* Content */}
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-bold text-destructive">
                Squadron Leader Muhammad Ghayas Ahmedani
              </h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Pakistan Air Force Squadron Leader Muhammad Ghayas Ahmedani is a proud
                for Gondal Memon Jamat to be among the few Memons and the first Memon
                in Pakistan Air Force.
              </p>
            </div>
          </div>


          {/* Profile 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-2xl shadow-md">

            {/* Image */}
            <div className="relative w-full md:w-1/3 h-[250px] rounded-xl overflow-hidden">
              <Image
                src="/images/M_ali.jpg"
                alt="Muhammad Ali Patel"
                fill
                className="object-fill"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-bold text-destructive">
                Muhammad Ali Patel
              </h3>

              <p className="mt-2 font-medium text-gray-800">
                Associate Manager - Software (Martin Dow Pakistan)
              </p>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Muhammad Ali Patel is currently working as Associate Manager - Software
                at Martin Dow Pakistan. Previously, he served at IBEX Global TRG Pakistan
                for 3 years as Assistant Manager Business Intelligence.

                His versatility reflects in his qualifications in Software Engineering,
                Computer Science, and Business Administration. He has worked on web projects
                internationally as a freelancer and led several internal projects for
                foreign companies.

                With 7 years of corporate IT experience, he has actively contributed to
                social reform initiatives through World Memon Organization, Gondal Memon
                Association, ILM Society, Memon Youth Forum, IMCHF Pakistan, and AZFAM
                Technologies.

                He believes: “Sky is not the limit, your imagination is.”
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* Text Thankyou! */}
      

      <FooterSection />
    </div>
  )
}
