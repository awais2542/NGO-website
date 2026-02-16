import FooterSection from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen bg-gray-50'>

      {/* Heading + First Image Wrapper */}
      <div className="bg-primary">

        {/* Heading */}
        <div className="text-center px-4 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            History Of GMA
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Discover the journey and legacy
          </p>
        </div>

        {/* History Img 1 */}
        <div className="relative w-full h-[70vh] sm:h-[90vh] md:h-[110vh] bg-white flex items-center justify-center">
          <Image
            src="/HistoryGMA/1.png"
            alt="history img 1"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </div>

      </div>

      {/* History Img 2 */}
      <div className="relative w-full h-[70vh] sm:h-[90vh] md:h-[110vh] bg-white flex items-center justify-center mt-6">
        <Image
          src="/HistoryGMA/2.png"
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
