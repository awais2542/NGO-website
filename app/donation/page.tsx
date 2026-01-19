"use client";

import Image from "next/image";
import { Copy } from "lucide-react";
import FooterSection from "@/components/Footer";

interface BankDetails {
  name: string;
  title: string;
  account: string;
  iban: string;
  branch: string;
}

const banks: BankDetails[] = [
  {
    name: "Meezan Bank",
    title: "GONDAL MEMON ASSOCIATION",
    account: "20311-101877",
    iban: "PK00MEZN000000000000",
    branch: "0123",
  },
  {
    name: "HBL Bank",
    title: "GONDAL MEMON ASSOCIATIONe",
    account: "179160001",
    iban: "PK00HABB000000000000",
    branch: "0456",
  },
  {
    name: "UBL Bank",
    title: "GONDAL MEMON ASSOCIATION",
    account: "20301-120655-38",
    iban: "PK00UNIL000000000000",
    branch: "0789",
  },
  {
    name: "Bank Alfalah",
    title: "GONDAL MEMON ASSOCIATION",
    account: "3216549870",
    iban: "PK00ALFH000000000000",
    branch: "0112",
  },
];

export default function DonationPage() {
  const copyDetails = (bank: BankDetails) => {
    const text = `Bank Name: ${bank.name}
Account Title: ${bank.title}
Account Number: ${bank.account}
IBAN: ${bank.iban}
Branch Code: ${bank.branch}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔹 Banner Image */}
      <div className="relative w-full h-[320px] md:h-[420px]">
        <Image
          src="/gallery/donation.jpg"
          alt="Donate Banner"
          fill
          className="object-cover brightness-75 contrast-90"
          priority
        />
      </div>

      {/* 🔹 Donation Banner */}
      <div className="w-full bg-accent py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Donate Now</h1>
        <p className="text-gray-700 mt-3">
          Aap ki madad kisi ki zindagi badal sakti hai.
        </p>
      </div>

      {/* 🔹 Bank Cards */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-2 gap-6">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4
             hover:transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {bank.name}
              </h2>

              {/* Copy Icon */}
              <button
                onClick={() => copyDetails(bank)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
                title="Copy bank details"
              >
                <Copy size={18} className="text-gray-600" />
              </button>
            </div>

            {/* Details */}
            <div className="space-y-1 text-gray-700 text-sm">
              <p><strong>Account Title:</strong> {bank.title}</p>
              <p><strong>Account Number:</strong> {bank.account}</p>
              <p><strong>IBAN:</strong> {bank.iban}</p>
              <p><strong>Branch Code:</strong> {bank.branch}</p>
            </div>
          </div>
        ))}
      </div>
          


          {/* 🔹 Next Level Collage Divider */}
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

              <div className="relative col-span-2 group hidden md:block">
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
        {/* footer section */}
        <div>
        <FooterSection />
        </div>

    </div>
  );
}
