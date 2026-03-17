import { CarouselDemo } from "@/components/demos/CarouselDemo";
import ImageDivider from "@/components/ImageDivider";
import Presidentmsg from "@/components/presidentMessage";
import WhatWeAreDoing from "@/components/whatWeAreDoing";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/Footer";
import VideoDivider from "@/components/VideoDivider";


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
