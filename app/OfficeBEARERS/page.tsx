"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import FooterSection from '@/components/Footer'
import { Card, CardContent } from "@/components/card";
import Image from 'next/image';

const officers = [
    {
        id: 1,
        name: "Mr. Shabbir Abdul Razzak Teli",
        position: "Chairman",
        image: "/officers/chairman.jpg",
    },
    {
        id:2,
        name: "Mr. Muhammad Shabbir Noorsumar",
        position: "SR.Vice Chairman",
        image: "/officers/sr.jfif",
    },
    {
        id:3,
        name: "Mr. Muhammad Mushtaq Ahmedani",
        position: "Vice Chairman",
        image: "/officers/vice1.jpg",
    },
    {
        id:4,
        name: "Mr.Abdul Aziz",
        position: "Vice Chairman",
        image: "/officers/vice2.jpg",
    },
    {
        id:5,
        name: "Mr. Asif Abdul Ghaffar Davani",
        position: "General Secretary",
        image: "/officers/general.jpg",
    },
    {
        id:6,
        name: "Muhammad Raif Sheikha",
        position: "JOINT  Secretary",
        image: "/officers/joint.jpg",
    },
    {
        id:7,
        name: "Abdul Jabbar Ahmedani",
        position: "TREASURER",
        image: "/officers/treasurer.jpg",
    }
]
export default function OfficeBearersPage() {
    const [selectedItem, setSelectedItem] = useState<typeof officers[number] | null>(null);
  return (
    <div className='min-h-screen mt-2'>
          {/* Banner */}
      <div className="w-full text-primary py-6 sm:py- text-center">
        <h1 className="text-4xl  font-bold underline">Managing Committee</h1>
      </div>
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5 md:gap-6 mb-3">

        {officers.map((item,) => {

          const image = item.image;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >

              <Card className="py-0 h-full w-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0 text-center">

                  {/* IMAGE */}
                  <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-full absolute inset-0 bg-black/10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* TEXT AREA */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">
                      {item.position}
                    </p>
                  </div>

                </CardContent>
              </Card>

            </div>

          );
        })}
        

      </div>
      {/* Modal for Selected Item */}
            {selectedItem && (
              <div
                className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"
                onClick={() => setSelectedItem(null)}
              >
                <div
                  className="relative bg-white w-full max-w-3xl rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-50 bg-black/70 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center"
                  >
                    ✕
                  </button>
      
                  <div className="relative w-full h-60 sm:h-72 md:h-96">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      fill
                      className="object-full w-full h-60 sm:h-72 md:h-96"
                    />
                  </div>
      
                  <div className="p-4 sm:p-6 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                      {selectedItem.name}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-3">
                      {selectedItem.position}
                    </p>
                  </div>
                </div>
              </div>
            )}

      <FooterSection />
    </div>
  )
}
