import { Banner } from '@/components/banner'
import FooterSection from '@/components/footer'
import Image from 'next/image'

export default function page() {
  return (
    <div className='min-h-screen bg-gray-50 mt-2'>

      <Banner
        image="/partners/1.jpg"
        title="History Of GMA"
        subtitle="Discover the journey and legacy"

      />


      {/* Heading + First Image Wrapper */}


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
