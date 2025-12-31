"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "../card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel"

export function CarouselDemo() {
  return (
    <Carousel opts={{
      align:"start",
      loop:true,
    }}
     plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]
    } className="w-full">
      <CarouselContent className="-ml-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-0">
            <Card className="w-full h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full relative">
                <Image 
                  src="https://images.pexels.com/photos/34608529/pexels-photo-34608529.jpeg" 
                  alt="chat" 
                  fill 
                  className="object-fill"
                />
              </CardContent>
            </Card>
          </CarouselItem>

        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
