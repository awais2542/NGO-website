"use client";

import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import FooterSection from "@/components/Footer";

const SECTION_HEADINGS = [
  "ORIGIN",
  "REGIONS & GROUPS",
  "CHARITY & MOSQUES",
  "CONTRIBUTION TO PAKISTAN",
  "PROMINENT MEMONS (PAST & PRESENT)",
];

const memonText = `
ORIGIN
The Memon community is a peace-loving, business-oriented people with a rich past and a promising future (inshaAllah). Their exact origin is unclear. One account holds that in the 15th century about 700 Lohana families embraced Islam at Nagar Thatta at the hands of Pir Yusufuddin; they were first called Momins, and in time the name became Memons—as stated by Hussain Kassim Dada at the first All India Memon Conference in Rajkot (1931). Other accounts place conversion at Mansura under Hazrat Umar bin Abdul Aziz (RA), in Kutch (per British historian Richard Burton), or during the era of Muhammad bin Qasim. Some link the name to the Banu Tamim tribe in Memna who settled in Thatta. Halai Memons left Hala (Sindh) for livelihood and spread abroad; Okhai Memons from Okha port travelled by sea for trade—hence the term "sailor businessmen."

REGIONS & GROUPS
In the Indo-Pak subcontinent, Memons lived mainly in Sindh, Gujarat, and Kathiawar—hence Sindhi, Gujarati, and Kathiawari Memons. Those in Kenya are Nasarpuria Memons. The community divides into three main groups: Kutchi Memons (Kutch ancestry, Kutchi dialect), Kathiawadi/Halai Memons (Kathiawar ancestry, Memon language), and Sindhi Memons (remained in Sindh, Sindhi language). Kathiawadi Memons further split into sub-groups by ancestral town (e.g. Kutiyana, Bantva, Dhoraji, Rajkot, Bombaywala, Deeplai). Halari Memon—18 Jamaats including Rajkot, Dhoraji, Jetpur—is the largest Jamaat in Pakistan. Worldwide, Kathiawadi Memons (excluding Kutchi and Sindhi) number over one million.

Notable Jamaats/organizations (by ancestral town): Amreli, Bantva, Bagasra, Bombay, Dhoraji, Deeplai, Gondal, Halari Memon, Jetpur, Jamnagar Memon Jamaat, Kutiyana, Kathiawar, Ladhubhai, M.T.M.A (Morbi-Tankara), Nasserpuria Memon Jamaat (Kenya), Okhai, Porbandar, Rajkot, Sourashtra, Tharti, Upleta, Vanthli, Vasawad, Walakh.

These Jamaats run central bodies for social welfare: marriage licenses, dispute resolution, healthcare, education, housing and financial aid for the needy (members and sometimes non-members).

CHARITY & MOSQUES
Memons are known for generosity and charity. They support their own through allowances and scholarships and fund hospitals, maternity homes, orphanages, schools, and industrial homes—open to all regardless of caste or creed. They are among the top donors to national causes. Where they settle, they build mosques and schools and often form a Jamaat. Memon-built mosques such as Zakaria Masjid (Calcutta), Minara Masjid (Bombay), New Memon Masjid (Karachi), and Baitul Muqarram (Dhaka) are landmarks. The Jama Masjid of Durban, built by Memons, is the largest mosque in the Southern Hemisphere.

CONTRIBUTION TO PAKISTAN
Memons are soft-spoken, kind, and patriotic. Beyond trade, their role in industry and society has been exemplary. After Partition they set up major units in East Pakistan (e.g. Bawa Jute Mills, Adamji Jute Mills, Dawood Rayon). After 1971 many rebuilt their lives and helped develop West Pakistan's industry—household names include Adamji, Pakola, Dawood, Fecto, Al-Noor, Dada, Bawany, Tabani, and others. Rough estimates: ~600,000 Memons in Pakistan, ~700,000 in India, ~1.5 million abroad (including ~13,000 in America, ~25,000 in England).

PROMINENT MEMONS (PAST & PRESENT)
Haji Sir Abdullah Haroon, Haji Abdul Sattar, Seth Adamji, Haji Dawood, Abdul Sattar Edhi, Yusuf Haroon, Mahmood Haroon, Zain Noorani, Hussain Dawood, Ahmad Dawood, Abdul Qadir Lakhani, Hussain Lawai, Justices A. Hafeez Memon, Rahim Bux Memon, M. Bachal Memon, and many others.
`;

export default function HistoryOfMemons() {

  const handleDownload = () => {
    const blob = new Blob([memonText], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "History_of_Memons.txt"; // file name
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen mt-3">
      <Banner
        image="/partners/1.jpg"
        title="History Of Memons"
        subtitle="Discover the journey and legacy"
      />
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">



        {/* Text Content */}
        <div className="whitespace-pre-line text-sm md:text-base leading-relaxed p-5 bg-gray-50">
          {memonText.split("\n").map((line, i, arr) =>
            SECTION_HEADINGS.includes(line.trim()) ? (
              <strong key={i} className="font-bold block first:mt-0">{line}</strong>
            ) : (
              <span key={i}>{line}{i < arr.length - 1 ? "\n" : ""}</span>
            )
          )}
        </div>

        {/* Download Button */}
        <div className="text-center mt-6">
          <Button
            onClick={handleDownload}
            className="px-5 py-2 rounded-lg"
          >
            Download Document
          </Button>
        </div>

      </div>

      <FooterSection />
    </div>

  );
}
