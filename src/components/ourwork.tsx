"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  HeartHandshake,
  Building,
  Users,
  Laptop,
  Stethoscope,
  GraduationCap,
  Venus,
  Utensils,
  AlertTriangle,
  Calendar,
  Wrench,
  Briefcase,
  Leaf,
} from "lucide-react";

const works = [
  { text: "Financial & Monthly Aid", href: "/work/financial-aid", icon: <HeartHandshake className="w-8 h-8 text-indigo-600" /> },
  { text: "Legal & Community Support", href: "/work/legal-support", icon: <Building className="w-8 h-8 text-indigo-600" /> },
  { text: "Housing & Assistance", href: "/work/housing", icon: <Home className="w-8 h-8 text-indigo-600" /> },
  { text: "Youth & Sports Program", href: "/work/youth-sports", icon: <Users className="w-8 h-8 text-indigo-600" /> },
  { text: "IT Training & Support", href: "/work/it-training", icon: <Laptop className="w-8 h-8 text-indigo-600" /> },
  { text: "Healthcare Services", href: "/work/healthcare", icon: <Stethoscope className="w-8 h-8 text-indigo-600" /> },
  { text: "Education Scholarships", href: "/work/education", icon: <GraduationCap className="w-8 h-8 text-indigo-600" /> },
  { text: "Women Empowerment", href: "/work/women", icon: <Venus className="w-8 h-8 text-indigo-600" /> },
  { text: "Food Distribution", href: "/work/food", icon: <Utensils className="w-8 h-8 text-indigo-600" /> },
  { text: "Disaster Relief", href: "/work/disaster", icon: <AlertTriangle className="w-8 h-8 text-indigo-600" /> },
  { text: "Community Events", href: "/work/events", icon: <Calendar className="w-8 h-8 text-indigo-600" /> },
  { text: "Skill Development", href: "/work/skills", icon: <Wrench className="w-8 h-8 text-indigo-600" /> },
  { text: "Entrepreneurship Support", href: "/work/entrepreneurship", icon: <Briefcase className="w-8 h-8 text-indigo-600" /> },
  { text: "Environmental Projects", href: "/work/environment", icon: <Leaf className="w-8 h-8 text-indigo-600" /> },
];

export default function WorkGrid() {
  return (
    <div className="relative py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/work-bg.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-white">
        <h2 className="text-center text-3xl font-bold mb-12">Our Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {works.map((work, index) => {
            const isLastTwo = index >= works.length - 2;
            return (
              <div
                key={work.href}
                className={`relative flex flex-col items-center ${
                  isLastTwo ? "md:col-span-2 md:justify-self-center" : ""
                }`}
              >
                {/* ICON */}
                <div className="mb-2">{work.icon}</div>

                {/* Connector line */}
                <div className="w-1 h-6 bg-indigo-300"></div>

                {/* Work Item */}
                <Link
                  href={work.href}
                  className="flex flex-col items-center gap-2 rounded-xl border border-indigo-200 bg-white/90 px-5 py-6 text-center shadow-md hover:shadow-lg transition hover:text-indigo-600 text-black"
                >
                  <span className="text-gray-700 font-medium">{work.text}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
