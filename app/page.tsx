import {CarouselDemo} from "@/components/demos/CarouselDemo";
import ImageDivider from "@/components/ImageDivider";
import Presidentmsg from "@/components/Presidentmsg";
import WhatWeAreDoing from "@/components/what_we_r";
import GallerySection from "@/components/GallerySection";
import  Footer  from "@/components/Footer";
import FooterSection from "@/components/Footer";
import VideoDivider from "@/components/VideoDivider";


export default function Home() {
  return (
   <> 
   <section>
      <CarouselDemo /> 
   </section>
   <section>
      <Presidentmsg/>
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
      <VideoDivider videoSrc="/videos/dev.mp4" />
   </section>
  <section>
      <FooterSection />
  </section>
   </>
  )
}
 