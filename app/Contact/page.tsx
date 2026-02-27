"use client";

import { useState } from "react";
import Image from "next/image";
import FooterSection from "@/components/Footer";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SectionHeading } from "@/components/section-heading";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your query has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      contact: "",
      query: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Banner Image */}
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px]">
        <Image
          src="/partners/2.jpg"
          alt="Partner Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 px-4 py-12 bg-amber-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 sm:p-8 shadow-xl"
          >
            <SectionHeading
              title="Contact Us"
              className="text-white text-left"
            />

            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mb-4"
            />

            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-4"
            />

            <Input
              name="contact"
              type="tel"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="mb-4"
            />

            <Input
              as="textarea"
              name="query"
              placeholder="Your Query"
              rows={4}
              value={formData.query}
              onChange={handleChange}
              required
              className="mb-6 resize-none"
            />

            <Button
              type="submit"
              className="w-full"
            >
              Submit
            </Button>
          </form>

          {/* RIGHT: TEXT CONTENT */}
          <div className="text-white text-center md:text-left">
            <SectionHeading
              title="Let’s Start a Conversastion"
              className="text-white text-left"
            />

            <p className="mt-4 text-white/80 text-sm md:text-base max-w-md">
              Whether you want to support our mission, ask a question,
              or collaborate with us — we’re here to listen.
            </p>

            <p className="mt-4 text-white/70 text-sm md:text-base max-w-md">
              Every message matters. Together, we can bring hope,
              dignity, and positive change to lives that need it most.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}