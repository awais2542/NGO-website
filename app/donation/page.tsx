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
<div className="min-h-screen bg-gray-50 mt-2 overflow-x-hidden">

     {/* 🔹 Banner Image */}
<div className="relative w-full h-[220px] sm:h-[300px] md:h-[60vh] lg:h-[75vh]">

  <Image
    src="/donation/4.jpg"
    alt="Donate Banner"
    fill
    className="object-cover brightness-75 contrast-90"
    priority
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
  Donate Now
</h1>

<p className="text-white/90 mt-2 text-xs sm:text-sm md:text-lg drop-shadow-md max-w-xl">
 “A small donation can create a big change.”
</p>

  </div>
</div>


            {/* 🔹 Donation Banner */}
<div className="w-full bg-primary text-white py-2 sm:py-4 text-center">

        <h1 className="text-2xl  sm:text-3xl md:text-4xl">
          Donate Now
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-1 sm:mt-2">
          Aap ki madad kisi ki zindagi badal sakti hai.
        </p>
      </div>


      {/* 🔹 Bank Cards */}
<div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
  {banks.map((bank, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col gap-3 sm:gap-4
       hover:transform hover:scale-105 transition duration-300 ease-in-out"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
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
      <div className="space-y-1 text-gray-700 text-xs sm:text-sm md:text-base">
        <p>
          <strong>Account Title:</strong> {bank.title}
        </p>
        <p>
          <strong>Account Number:</strong> {bank.account}
        </p>
        <p>
          <strong>IBAN:</strong> {bank.iban}
        </p>
        <p>
          <strong>Branch Code:</strong> {bank.branch}
        </p>
      </div>
    </div>
  ))}
</div>

          


          {/* 🔹 Next Level Collage Divider */}
          <div className="relative w-full overflow-hidden">

            {/* Grid */}
            <div className="
              grid 
              grid-cols-2 
              sm:grid-cols-4 
              auto-rows-[100px] 
              sm:auto-rows-[140px] 
              md:auto-rows-[200px] 
              gap-2
            ">

              {/* Big Image */}
       <div className="relative col-span-2 sm:col-span-2 row-span-1 sm:row-span-2 group">
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
              <div className="bg-black/40 backdrop-blur-sm px-4 py-3 rounded-xl">
                <h2 className=" text-white text-xs sm:text-lg md:text-3xl font-bold">
                    Together We Can Make a Difference
                  </h2>

                  <p className="text-white text-[10px] sm:text-sm md:text-base">
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
