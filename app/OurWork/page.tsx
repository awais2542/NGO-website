"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import FooterSection from '@/components/Footer'
import { Card, CardContent } from "@/components/card";
import Image from 'next/image';
import {
  HeartHandshake,
  GraduationCap,
  HandCoins,
  Stethoscope,
  Home,
  Users,
  Laptop,
  Utensils,
  AlertTriangle,
  Calendar,
  Wrench,
  Briefcase,
  Leaf,
} from "lucide-react";

const activities = [
  {
    title: "Financial & Monthly Aid",
    desc: "Providing monthly financial assistance to deserving families.",
    image: "/ourwork/imdad.jpg",
    href: "/financial-aid",
  },
  {
    title: "Legal & Community Support",
    desc: "Offering legal guidance and community support services.",
   image: "/ourwork/aid.jpg",
    href: "/legal-support",
  },
  {
    title: "Housing & Assistance",
    desc: "Helping families with housing and shelter support.",
    image: "/ourwork/housing.jpg",
    href: "/housing-assistance",
  },
  {
    title: "Youth & Sports Program",
    desc: "Engaging youth in sports and leadership activities.",
   image: "/ourwork/youth.jpg",
    href: "/youth-sports",
  },
  {
    title: "IT Training & Support",
    desc: "Providing IT education and technical support.",
    image: "/ourwork/it.jpg",
    href: "/it-training",
  },
  {
    title: "Healthcare Services",
    desc: "Medical aid and healthcare facilities for the needy.",
    image: "/ourwork/medical.jpg",
    href: "/healthcare",
  },
  {
    title: "Education Scholarships",
    desc: "Scholarships and educational support for students.",
    image: "/ourwork/it.jpg",
    href: "/education-scholarships",
  },
  {
    title: "Women Empowerment",
    desc: "Programs to empower women socially and economically.",
    image: "/gallery/6.jpg",
    href: "/women-empowerment",
  },
  {
    title: "Food Distribution",
    desc: "Distributing food to families in need.",
    image: "/gallery/2.jpg",
    href: "/food-distribution",
  },
  {
    title: "Disaster Relief",
    desc: "Emergency relief during natural disasters.",
    image: "/gallery/3.jpg",
    href: "/disaster-relief",
  },
  {
    title: "Shadi Events",
    desc: "Organizing events for community bonding and growth.",
    image: "/ourwork/shadi.jpg",
    href: "/community-events",
  },
  {
    title: "Skill Development",
    desc: "Training programs to develop professional skills.",
    image: "/gallery/2.jpg",
    href: "/skill-development",
  },
  {
    title: "Entrepreneurship Support",
    desc: "Helping entrepreneurs with resources and guidance.",
    image: "/ourwork/membership.jpg",
    href: "/entrepreneurship-support",
  },
  {
    title: "Graveyard Cleanup",
    desc: "Initiatives to protect and sustain the environment.",
    image: "/ourwork/graveyard.jpg",
    href: "/environmental-projects",
  },
];

export default function page() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='min-h-screen bg-gray-50 mt-2'>
    {/* Banner Img */}
    <div className='relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[400px]'>
      <Image
        src="/partners/1.jpg"
        alt="partner Banner"
        fill
        className="object-cover brightness-75 contrast-90"
        priority
      />
    </div>
     {/* Banner Our Work */}
      <div className="w-full bg-primary text-white py-6 sm:py- text-center">
        <h1 className="text-4xl ">Our Work</h1>
      </div>
      {/* Cards */}
      <div className="grid w-full mt-2 p-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        gap-3 sm:gap-5 md:gap-6">

      {activities.map((item, index) => {

            const image = item.image;
            return (
             <div
                key={item.href}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >

           <Card className="h-full w-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-0 text-center">

                {/* IMAGE */}
                <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover absolute inset-0 bg-black/10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* TEXT AREA */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">
                    {item.desc}
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
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                      {selectedItem.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-3">
                      {selectedItem.desc}
                    </p>
                  </div>
                </div>
              </div>
            )}


        
      <FooterSection />
      
    </div>
  )
}
