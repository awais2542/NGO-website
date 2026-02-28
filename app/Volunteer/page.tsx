"use client";

import { Banner } from "@/components/Banner";
import { Button } from "@/components/button";
import FooterSection from "@/components/Footer";
import { Input } from "@/components/input";
import { useState } from "react";

export default function Page() {
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    cnic: "",
    address: "",
    education: "",
    experience: "",
    hours: "",
    skills: "",
    country: "",
    city: "",
    landline: "",
    cell: "",
    email: "",
    duration: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="w-full min-h-screen py-6 bg-gray-50">
      <Banner
        image="/essence/1.jpg"
        title="Volunteer Registration Form"
        subtitle="Join Gondal Jamat Association and help us serve the community through your valuable time and skills."
      />
      <div className="max-w-5xl mx-auto px-4">


        {/* Toast */}
        {showToast && (
          <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
            ✅ Application Submitted Successfully!
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-10 space-y-6"
        >
          {/* Grid Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Gender
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>

            <Input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <Input
              name="cnic"
              placeholder="CNIC"
              value={formData.cnic}
              onChange={handleChange}
            />

            <Input
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <Input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <Input
              name="landline"
              placeholder="Landline Number"
              value={formData.landline}
              onChange={handleChange}
            />

            <Input
              name="cell"
              placeholder="Cell Number"
              value={formData.cell}
              onChange={handleChange}
            />

            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
            />

            <Input
              name="hours"
              placeholder="How many hours per day can you work?"
              value={formData.hours}
              onChange={handleChange}
            />

            <Input
              name="duration"
              placeholder="Volunteering Duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>

          {/* Full Width Textareas */}

          <Input
            as="textarea"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            rows={4}
          />

          <Input
            as="textarea"
            name="experience"
            placeholder="Previous Experience in Social Sector"
            value={formData.experience}
            onChange={handleChange}
            rows={4}
          />

          <Input
            as="textarea"
            name="skills"
            placeholder="Skills Proficiency"
            value={formData.skills}
            onChange={handleChange}
            rows={4}
          />

          <Input
            as="textarea"
            name="reason"
            placeholder="Why are you interested in volunteering?"
            value={formData.reason}
            onChange={handleChange}
            rows={4}
          />

          {/* Submit Button */}
          <div className="text-center pt-4">
            <Button type="submit" className="px-8 py-3">
              Submit Application
            </Button>
          </div>
        </form>
      </div>

      <FooterSection />
    </section>
  );
}