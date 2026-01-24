"use client";

import FooterSection from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your query has been submitted successfully!");
    setFormData({ name: "", email: "", contact: "", query: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      {/* FORM + TEXT SECTION */}
      <div className="flex-1 px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Contact Us
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="query"
              placeholder="Your Query"
              value={formData.query}
              onChange={handleChange}
              rows={4}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>

          {/* RIGHT: TEXT CONTENT */}
          <div className="text-white text-center md:text-left px-2">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Let’s Start a Conversation
            </h3>

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

      {/* IMAGE COLLAGE */}
      <div className="relative w-full overflow-hidden">
      
                  {/* Grid */}
                  <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[280px] md:h-[420px] brightness-75 contrast-90">
      
                    {/* Big Image */}
                    <div className="relative col-span-2 row-span-2 group">
                      <Image
                        src="/donation/1.jpg"
                        alt="Donation img"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-black/10" />
                    </div>
      
                    {/* Small Images */}
                    <div className="relative group">
                      <Image
                        src="/donation/donation.jpg"
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
      
                    <div className="relative group">
                      <Image
                        src="/donation/2.jpg"
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
      
                    <div className="relative col-span-2 group block">
      
                      <Image
                        src="/donation/3.jpg"
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-black/10" />
                    </div>
                  </div>
      
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none">
                    <div>
                      <h2 className="text-white text-2xl md:text-4xl font-bold tracking-wide">
                        Together We Can Make a Difference
                      </h2>
                      <p className="text-white/90 mt-2 max-w-xl mx-auto text-sm md:text-base">
                        Your support brings hope, dignity, and a better tomorrow.
                      </p>
                    </div>
                  </div>
      
                </div>

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}
