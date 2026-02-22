import React from 'react'
import FooterSection from '@/components/Footer'
import Image from 'next/image'

const partners= [
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
      <div className='relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[400px]'>
  <Image
    src="/partners/3.jpg"
    alt="partner Banner"
    fill
    className="object-cover brightness-75 contrast-90"
    priority
  />
</div>

      {/* Banner Our Partners */}
      <div className="w-full bg-primary text-white py-6 sm:py- text-center">
        <h1 className="text-4xl ">Our Partners</h1>
      </div>
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
        <h1 className="text-4xl">
          OUR PRIDE
        </h1>
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
        <h1 className="text-4xl ">
         Partner Schools & Colleges
        </h1>
      </div>
      {/* schools colleges img */}
      <div className='relative w-full h-[250px] sm:h-[280px] md:h-[380px] mt-5'>
        <Image
                  src="/partners/partners-sch.webp"
                  alt="partner Banner"
                  fill
                  className="object-fill "
                  priority
                />
      </div>
      {/* Text Thankyou! */}
            <div className="w-full py-10 sm:py-14 px-4 bg-primary/50">
          <div className="max-w-4xl mx-auto text-center">

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Appreciation Note
            </h2>

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
