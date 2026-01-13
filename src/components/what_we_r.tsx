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
  School,
} from "lucide-react";

const activities = [
  {
    title: "Health Support",
    desc: "Medical assistance and health support for deserving families.",
    icon: Stethoscope,
    href: "/health-support",
  },
  {
    title: "Education Aid",
    desc: "Helping students with fees, books and education support.",
    icon: GraduationCap,
    href: "/education-aid",
  },
  {
    title: "Monthly Cash Support",
    desc: "Financial help for needy families on monthly basis.",
    icon: HandCoins,
    href: "/cash-support",
  },
  {
    title: "Marriage Assistance",
    desc: "Support for marriages of deserving community members.",
    icon: HeartHandshake,
    href: "/marriage-assistance",
  },
  {
    title: "Rehabilitation",
    desc: "Helping families rebuild and stabilize their lives.",
    icon: Home,
    href: "/rehabilitation",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: School,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
  {
    title: "Community Welfare",
    desc: "Social welfare activities for overall community growth.",
    icon: Users,
    href: "/community-welfare",
  },
];

export default function WhatWeAreDoing() {
  return (
    <section className="w-full py-16 ">
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
                key={index}
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
