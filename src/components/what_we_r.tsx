"use client";

import Link from "next/link";
import { useState } from "react";

import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
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
import { SectionHeading } from "./section-heading";



const activities = [
  {
    title: "Financial & Monthly Aid",
    desc: "Providing monthly financial assistance to deserving families.",
    icon: HandCoins,
    href: "/our-work#financial-aid",
  },
  {
    title: "Legal & Community Support",
    desc: "Offering legal guidance and community support services.",
    icon: Briefcase,
    href: "/our-work#legal-support",
  },
  {
    title: "Housing & Assistance",
    desc: "Helping families with housing and shelter support.",
    icon: Home,
    href: "/our-work#housing-assistance",
  },
  {
    title: "Youth & Sports Program",
    desc: "Engaging youth in sports and leadership activities.",
    icon: Users,
    href: "/our-work#youth-sports",
  },
  {
    title: "IT Training & Support",
    desc: "Providing IT education and technical support.",
    icon: Laptop,
    href: "/our-work#it-training",
  },
  {
    title: "Healthcare Services",
    desc: "Medical aid and healthcare facilities for the needy.",
    icon: Stethoscope,
    href: "/our-work#healthcare",
  },
  {
    title: "Education Scholarships",
    desc: "Scholarships and educational support for students.",
    icon: GraduationCap,
    href: "/our-work#education-scholarships",
  },
  {
    title: "Women Empowerment",
    desc: "Programs to empower women socially and economically.",
    icon: HeartHandshake,
    href: "/our-work#women-empowerment",
  },
  {
    title: "Food Distribution",
    desc: "Distributing food to families in need.",
    icon: Utensils,
    href: "/our-work#food-distribution",
  },
  {
    title: "Disaster Relief",
    desc: "Emergency relief during natural disasters.",
    icon: AlertTriangle,
    href: "/our-work#disaster-relief",
  },
  {
    title: "Shadi Events",
    desc: "Organizing events for community bonding and growth.",
    icon: Calendar,
    href: "/our-work#shadi-events",
  },
  {
    title: "Skill Development",
    desc: "Training programs to develop professional skills.",
    icon: Wrench,
    href: "/our-work#skill-development",
  },
  {
    title: "Entrepreneurship Support",
    desc: "Helping entrepreneurs with resources and guidance.",
    icon: Briefcase,
    href: "/our-work#entrepreneurship-support",
  },
  {
    title: "Graveyard Cleanup",
    desc: "Initiatives to protect and sustain the environment.",
    icon: Leaf,
    href: "/our-work#graveyard-cleanup",
  },
];

export default function WhatWeAreDoing() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <SectionHeading
            title="What We Are Doing"
            subtitle="Our initiatives focus on improving lives through welfare, education, healthcare, and community support."
          />
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
          <Button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 rounded-lg text-sm font-medium"
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>

      </div>
    </section>
  );
}
