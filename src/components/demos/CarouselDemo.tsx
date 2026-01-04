"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
const images = [
  "/carousel/image1.jpg",
  "/carousel/image2.jpg",
  "/carousel/image3.jpg",
]

import { Card, CardContent } from "../card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <Card className="w-full h-[630px] overflow-hidden">
              <CardContent className="p-0 h-full relative">
                <Image 
                  src={image}
                  alt="chat" 
                  fill 
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>

        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
