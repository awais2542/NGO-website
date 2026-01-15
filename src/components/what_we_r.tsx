"use client";

import Link from "next/link";
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
    href: "/financial-aid",
  },
  {
    title: "Legal & Community Support",
    desc: "Offering legal guidance and community support services.",
    icon: Briefcase,
    href: "/legal-support",
  },
  {
    title: "Housing & Assistance",
    desc: "Helping families with housing and shelter support.",
    icon: Home,
    href: "/housing-assistance",
  },
  {
    title: "Youth & Sports Program",
    desc: "Engaging youth in sports and leadership activities.",
    icon: Users,
    href: "/youth-sports",
  },
  {
    title: "IT Training & Support",
    desc: "Providing IT education and technical support.",
    icon: Laptop,
    href: "/it-training",
  },
  {
    title: "Healthcare Services",
    desc: "Medical aid and healthcare facilities for the needy.",
    icon: Stethoscope,
    href: "/healthcare",
  },
  {
    title: "Education Scholarships",
    desc: "Scholarships and educational support for students.",
    icon: GraduationCap,
    href: "/education-scholarships",
  },
  {
    title: "Women Empowerment",
    desc: "Programs to empower women socially and economically.",
    icon: HeartHandshake,
    href: "/women-empowerment",
  },
  {
    title: "Food Distribution",
    desc: "Distributing food to families in need.",
    icon: Utensils,
    href: "/food-distribution",
  },
  {
    title: "Disaster Relief",
    desc: "Emergency relief during natural disasters.",
    icon: AlertTriangle,
    href: "/disaster-relief",
  },
  {
    title: "Community Events",
    desc: "Organizing events for community bonding and growth.",
    icon: Calendar,
    href: "/community-events",
  },
  {
    title: "Skill Development",
    desc: "Training programs to develop professional skills.",
    icon: Wrench,
    href: "/skill-development",
  },
  {
    title: "Entrepreneurship Support",
    desc: "Helping entrepreneurs with resources and guidance.",
    icon: Briefcase,
    href: "/entrepreneurship-support",
  },
  {
    title: "Environmental Projects",
    desc: "Initiatives to protect and sustain the environment.",
    icon: Leaf,
    href: "/environmental-projects",
  },
];

export default function WhatWeAreDoing() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What We Are Doing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our initiatives focus on improving lives through welfare, education,
            healthcare, and community support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {activities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group focus:outline-none"
              >
                <Card className="h-full cursor-pointer transition-all duration-300 hover:bg-accent hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-3 text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-white">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
