"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import FooterSection from '@/components/Footer'
import { Card, CardContent } from "@/components/card";
import Image from 'next/image';

const Ladies = [
    {
        id: 1,
        name: "Mrs.Wafa Anis",
        position: "Chair Person Ladies Wing",
        image: "/Ladies/mrs-wafa.jpg",
    },
    // {
    //     id:2,
    //     name: "Mr. KAMRAN TABAN",
    //     position: "SR.Vice Chairman",
    //     image: "/Ladies/mr-kamran.jpeg",
    // },
    // {
    //     id:3,
    //     name: "Mr. Zain Fattani",
    //     position: "Vice Chairman",
    //     image: "/Ladies/mr-zain.jpeg",
    // },
    
   
]
export default function page() {
    const [selectedItem, setSelectedItem] = useState<typeof Ladies[number] | null>(null);
  return (
    <div className='min-h-screen mt-2'>
          {/* Banner */}
      <div className="w-full text-primary py-6 sm:py- text-center">
        <h1 className="text-4xl  font-bold underline">Ladies Member</h1>
      </div>
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5 md:gap-6 mb-3">

        {Ladies.map((item,) => {

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
                      className="object-fill w-full h-60 sm:h-72 md:h-96"
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
