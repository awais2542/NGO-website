"use client";

import FooterSection from "@/components/Footer";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);
};


  return (
    <section className="w-full min-h-screen py-6 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Volunteer Registration Form
            </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join Gondal Jamat Association and help us serve the community
            through your valuable time and skills.
        </p>

        </div>
        {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-slideIn">
            ✅ Application Submitted Successfully!
        </div>
        )}

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-10 space-y-6"
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <Input
              label="Full Name"
              name="fullName"
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

            <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
            <Input label="CNIC" name="cnic" value={formData.cnic} onChange={handleChange} />

            <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
            <Input label="City" name="city" value={formData.city} onChange={handleChange} />

            <Input label="Landline Number" name="landline" value={formData.landline} onChange={handleChange} />
            <Input label="Cell Number" name="cell" value={formData.cell} onChange={handleChange} />

            <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
            <Input label="Education" name="education" value={formData.education} onChange={handleChange} />

            <Input label="How many hours per day can you work?" name="hours" value={formData.hours} onChange={handleChange} />
            <Input label="Volunteering Duration" name="duration" value={formData.duration} onChange={handleChange} />
          </div>

          {/* Full Width Fields */}
          <Textarea
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <Textarea
            label="Previous Experience in Social Sector"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <Textarea
            label="Skills Proficiency"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <Textarea
            label="Why are you interested in volunteering?"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <FooterSection />
    </section>
  );
}

/* Reusable Input Component */
type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  );
}

/* Reusable Textarea Component */
type TextareaProps = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>
      <textarea
        {...props}
        rows={4}
        className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  );
}
