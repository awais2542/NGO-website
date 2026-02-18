"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "../card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../carousel"

const slides = [
  {
    image: "/carousel/1.jpg",
    title: "Together We Can Make a Difference",
    subtitle: "Your donation brings hope to those in need",
  },
  {
    image: "/carousel/2.jpg",
    title: "Support Humanity",
    subtitle: "Every contribution counts",
  },
  {
    image: "/carousel/3.jpg",
    title: "Donate for a Better Tomorrow",
    subtitle: "Be the reason someone smiles today",
  },
]

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setActiveIndex(api.selectedScrollSnap())
    api.on("select", () => setActiveIndex(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="w-full m-0 p-0">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="w-full h-[200px] sm:h-[260px] md:h-[380px] lg:h-[480px] xl:h-[520px] overflow-hidden">
                <CardContent className="p-0 h-full relative">
                  {/* Image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover "
                    priority={index === 0}
                    quality={100}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 md:bg-black/40
" />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex items-end justify-center text-center px-6 pb-10 sm:pb-16 md:pb-24">
                        <div
                          className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
                            activeIndex === index
                              ? "opacity-100 translate-y-0 scale-100"
                              : "opacity-0 translate-y-10 scale-95"
                          }`}
                        >
                          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl
                        text-white drop-shadow-lg">
                            {slide.title}
                          </h1>
                          <p className="text-sm sm:text-base md:text-lg text-white/90 mt-4 max-w-md sm:max-w-xl md:max-w-2xl
                         mx-auto drop-shadow-md">
                            {slide.subtitle}
                          </p>
                        </div>
                    </div>

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
