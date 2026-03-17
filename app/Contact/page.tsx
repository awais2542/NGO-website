"use client";

import FooterSection from "@/components/footer";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SectionHeading } from "@/components/sectionHeading";
import { useState } from "react";

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
      <Banner
        image="/partners/2.jpg"
        title="Contact Us"
        subtitle="A small donation can create a big change."
      />


      {/* Form Section */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-gray-100">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT: FORM */}
    <form
  onSubmit={handleSubmit}
  className="w-full bg-white border rounded-xl p-5 sm:p-7 md:p-8 shadow-lg"
>
      <SectionHeading
        title="Contact Us"
        className="text-gray-800 text-left mb-6"
      />

      <Input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border rounded-md p-3 mb-4 h-11 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border rounded-md p-3 mb-4 h-11  focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <Input
        name="contact"
        type="tel"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        required
        className="w-full border rounded-md p-3 mb-4 h-11  focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <textarea
        name="query"
        placeholder="Your Query"
        rows={4}
        value={formData.query}
        onChange={handleChange}
        required
        className="w-full border rounded-md p-3 mb-4  focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>

    {/* RIGHT: TEXT CONTENT */}
    <div className="text-gray-700 text-center md:text-left">
      <SectionHeading
        title="Let’s Start a Conversation"
        className="text-gray-800 text-left"
      />

      <p className="mt-4 text-sm md:text-base max-w-md">
        Whether you want to support our mission, ask a question,
        or collaborate with us — we’re here to listen.
      </p>

      <p className="mt-4 text-sm md:text-base max-w-md">
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