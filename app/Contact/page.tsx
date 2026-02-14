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
    <div className="flex flex-col min-h-screen">
      
      {/* FORM + TEXT SECTION */}
      <div className="flex-1 px-4 py-10 bg-amber-200 mt-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="
                  w-full
                  bg-white/20
                  backdrop-blur-lg
                  border border-white/30
                  rounded-xl
                  p-6 sm:p-8
                  shadow-xl   
                "
          >
            <h2 className="text-2xl text-white font-bold mb-6 text-center md:text-left">
              Contact Us
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            className="w-full mb-4 px-4 py-3 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="query"
              placeholder="Your Query"
              value={formData.query}
              onChange={handleChange}
              rows={4}
              required
            className="w-full mb-4 px-4 py-3 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
            className="w-full bg-black/90 text-white py-3 rounded-lg hover:bg-black transition"
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

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}
