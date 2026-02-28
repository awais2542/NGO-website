import { CarouselDemo } from "@/components/demos/CarouselDemo";
import ImageDivider from "@/components/imageDivider";
import Presidentmsg from "@/components/presidentMessage";
import WhatWeAreDoing from "@/components/whatWeAreDoing";
import GallerySection from "@/components/gallerySection";
import FooterSection from "@/components/footer";
import VideoDivider from "@/components/videoDivider";


export default function Home() {
   return (
      <>
         <section>
            <CarouselDemo />
         </section>
         <section>
            <Presidentmsg />
         </section>
         <section>
            <ImageDivider />
         </section>
         <section>
            <WhatWeAreDoing />
         </section>
         <section>
            <GallerySection />
         </section>
         <section>
            <VideoDivider videoSrc="/Videos/dev.mp4" />
         </section>
         <section>
            <FooterSection />
         </section>

      </>
   )
}
