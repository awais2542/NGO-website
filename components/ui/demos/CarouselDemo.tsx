"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { start } from "repl"

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
    } className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className=" p-1">
              <Card className="w-">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className=" text-4xl font-semibold">{index + 1}
                    <Image src="https://images.pexels.com/photos/34608529/pexels-photo-34608529.jpeg" alt="chati" fill></Image>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
