"use client";

import Link from "next/link";
import { useState } from "react";

import { Card, CardContent } from "@/components/card";
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
    icon: HandCoins,
    href: "/OurWork#financial-aid",
  },
  {
    title: "Legal & Community Support",
    desc: "Offering legal guidance and community support services.",
    icon: Briefcase,
    href: "/OurWork#legal-support",
  },
  {
    title: "Housing & Assistance",
    desc: "Helping families with housing and shelter support.",
    icon: Home,
    href: "/OurWork#housing-assistance",
  },
  {
    title: "Youth & Sports Program",
    desc: "Engaging youth in sports and leadership activities.",
    icon: Users,
    href: "/OurWork#youth-sports",
  },
  {
    title: "IT Training & Support",
    desc: "Providing IT education and technical support.",
    icon: Laptop,
    href: "/OurWork#it-training",
  },
  {
    title: "Healthcare Services",
    desc: "Medical aid and healthcare facilities for the needy.",
    icon: Stethoscope,
    href: "/OurWork#healthcare",
  },
  {
    title: "Education Scholarships",
    desc: "Scholarships and educational support for students.",
    icon: GraduationCap,
    href: "/OurWork#education-scholarships",
  },
  {
    title: "Women Empowerment",
    desc: "Programs to empower women socially and economically.",
    icon: HeartHandshake,
    href: "/OurWork#women-empowerment",
  },
  {
    title: "Food Distribution",
    desc: "Distributing food to families in need.",
    icon: Utensils,
    href: "/OurWork#food-distribution",
  },
  {
    title: "Disaster Relief",
    desc: "Emergency relief during natural disasters.",
    icon: AlertTriangle,
    href: "/OurWork#disaster-relief",
  },
  {
    title: "Shadi Events",
    desc: "Organizing events for community bonding and growth.",
    icon: Calendar,
    href: "/OurWork#shadi-events",
  },
  {
    title: "Skill Development",
    desc: "Training programs to develop professional skills.",
    icon: Wrench,
    href: "/OurWork#skill-development",
  },
  {
    title: "Entrepreneurship Support",
    desc: "Helping entrepreneurs with resources and guidance.",
    icon: Briefcase,
    href: "/OurWork#entrepreneurship-support",
  },
  {
    title: "Graveyard Cleanup",
    desc: "Initiatives to protect and sustain the environment.",
    icon: Leaf,
    href: "/OurWork#graveyard-cleanup",
  },
];

export default function WhatWeAreDoing() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What We Are Doing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our initiatives focus on improving lives through welfare, education,
            healthcare, and community support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">

          {activities.map((item, index) => {

            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group focus:outline-none ${!showAll && index >= 4 ? "hidden sm:block" : ""
                  }`}

              >
                <Card className="h-full w-full cursor-pointer transition-all duration-300 hover:bg-accent hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-2 sm:p-3 text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        {/* Show More Button - Mobile Only */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

      </div>
    </section>
  );
}
