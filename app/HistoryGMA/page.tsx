import FooterSection from '@/components/Footer'
import { SectionHeading } from '@/components/section-heading'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen bg-gray-50 mt-2'>

      {/* Heading + First Image Wrapper */}
      <div className="bg-primary">

        {/* Heading */}
        <div className="text-center bg-primary text-white px-4 ">
          <SectionHeading
            title="History Of GMA"
            subtitle="Discover the journey and legacy"
            className="mb-0 lg:mb-0"
          />
        </div>

        {/* History Img 1 */}
        <div className="relative w-full h-[70vh] sm:h-[90vh] md:h-[110vh] bg-white flex items-center justify-center">
          <Image
            src="/historygma/1.png"
            alt="history img 1"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </div>

      </div>

      {/* History Img 2 */}
      <div className="relative w-full h-[70vh] sm:h-[90vh] md:h-[110vh] bg-white flex items-center justify-center ">
        <Image
          src="/historygma/2.png"
          alt="history Img 2"
          fill
          className="object-contain"
          priority
          quality={100}
        />
      </div>

      <FooterSection />
    </div>
  )
}
