import  {CarouselDemo}  from "@/components/demos/CarouselDemo";
import ImageDivider from "@/components/ImageDivider";
import Presidentmsg from "@/components/Presidentmsg";
import WhatWeAreDoing from "@/components/what_we_r";

export default function Home() {
  return (
   <> 
   <section className="">
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
  
   </>
  )
}
 