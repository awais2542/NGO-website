import React from 'react'
import FooterSection from '@/components/Footer'
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading';
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
      <div className="w-full py-10 sm:py-14 px-4 bg-primary/50">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <SectionHeading
            title="Appreciation Note"
          />
          {/* Content */}
          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 text-left">

            <p>
              Thank you for giving <strong>goread.pk</strong> the opportunity of reading stories
              to Primary School students at <strong>Memon Foundation</strong>.
              It was a privilege indeed.
            </p>

            <p>
              <strong>goread.pk</strong> is a non-profit organisation with a vision to eradicate
              illiteracy from society by providing joyful story read-aloud sessions to children
              in underprivileged communities across Pakistan. Stories are read aloud in the
              children’s mother tongue as well as in English. Research tells us that grit,
              self-control, zest, social intelligence, gratitude, optimism, curiosity and empathy
              are the character qualities that help children succeed. Through stories,
              goread.pk contributes towards developing these qualities in children.
            </p>

            <p>
              At <strong>Kiran Foundation</strong>, a group of goread.pk volunteers visited twice
              to read stories to children. <strong>Huda Ahmed</strong> was our point of contact
              and efficiently coordinated our visits. The story <em>“Olive and the Dreadful Plogre”</em>
              follows an endearing turtle named Olive who gets caught in a plastic sack in the
              Indian Ocean. The character of Plogre, created from the words Plastic and Ogre,
              raises awareness about the hazards of plastic pollution and develops social
              intelligence in children.
            </p>

            <p>
              The story <em>“Haathi Learns a Lesson”</em> encouraged children to reflect on the
              power of someone who may appear weak. Both stories resulted in meaningful
              discussions with the students about compassion, self-control and responsibility.
            </p>

            <p>
              Each one of us thoroughly enjoyed the experience of engaging with the children
              through stories and walked away optimistic and delighted with the positive and
              empowering environment at Kiran Foundation. We look forward to further
              collaboration in the future and will also be reaching out to the Art teacher
              regarding developing a set of illustrations created by the students.
            </p>

            <p>
              Unfortunately, administrative and official matters caused a delay, but we will be
              reconnecting soon.
            </p>

            {/* Signature */}
            <div className="pt-4 text-center">
              <p className="font-semibold">Nusser Abbas Sayeed</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Founder & CEO – goread.pk
              </p>
            </div>

          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
