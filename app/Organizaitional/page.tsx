"use client";

import FooterSection from "@/components/Footer";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";

const SECTION_HEADINGS = [
  "Organizaitional Philosophy",
  "AIMS & OBJECTIVES",
  "VALUES",
  //   "CONTRIBUTION TO PAKISTAN",
  //   "PROMINENT MEMONS (PAST & PRESENT)",
];

const memonText = `
Organizaitional Philosophy
The Organizaitional Philosophy of the Gondal Memon Jamat, is to work for the welfare of its members, at Karachi, to promote, brotherhood amongst the members of Jamat, and to help needy and poor members, in all possible manners, encourage and promote sense of education amongst the children of its members, to create and maintain good relation with other Memon Jamats and their members, to encourage and promote the feeling of children forward education and interest of education.


AIMS & OBJECTIVES
The Aims and Objects for which the Jamat is formed are under:
a) To establish social and institutional unity and to regulateâ€š constitute and conduct the social life of the Gondal Memon Community who migrated to Pakistan settled mostly in Pakistan.
b) To solve the disputes and differences among the members of the Jamat in their social life through domestic forum of arbitration or otherwise and to make rules and regulation to administer the occasions marriagesâ€š death and such other events of social nature in a simple manner and in accordance with the principles of Quran and Sunnah. To strive to remove un-Islamic and unbearable amongst the members of the community.
c) To establishâ€š assistâ€š run or take under its supervisionâ€š Madressahsâ€š Schoolsâ€š Collegesâ€š Boarding Housesâ€š Librariesâ€š Reading Roomsâ€š Industrial Homes and Medical Facilities among its members in particular and public in general and similarly assistâ€š superviseâ€š run or take care of such educationalâ€š or social institutions or establishments.
d) Establishâ€š assistâ€š run or take under its supervisionâ€š Dispensariesâ€š Hospitalsâ€š Mateity Homesâ€š Musafir Khanasâ€š Marriage Centers at Karachi or at any other place or places in Pakistanâ€š whenever necessary and possible.
e) To establishâ€š assistâ€š run or take under its supervision Coloniesâ€š Housing Societiesâ€š Consumer Societies for general welfare and such other organizationsâ€š wherever necessary and possible.
f) To establish trust or trusts for the welfare and well-being of the community members in particular and public in general after getting permission from Authority conceed.
g) To safeguard and protect the commercialâ€š industrial and other interest of the communityâ€š to cultivate the public opinion for that purpose and to spread education and to publishâ€š take overâ€š maintain and help dailiesâ€š periodicals and pamphletsâ€š wherever necessary and possible.
h) To establish close contact with the entire Memon Community of Pakistan and to be interested in co-operate withâ€š take part in and in and to help make successful all the activities pertaining to betterment of the entire Memon Community and its social and collective unity.
i) To strive and to remove unemployment from the members of the community in particular and other in general and to provide possible help to the needy members of the community.
j) To strive and to take organized steps for the general welfare of the members of Gondal Memen Jamat in particular and entire Muslim community of Pakistan In general and in this connection to take interest in their welfare and to solve all their problems by helping them directly or indirectlyâ€š wherever necessary and possible.
k) To take organized steps with keen interest in respect of socialâ€š religiousâ€š culturalâ€š economicalâ€š commercialâ€š industrialâ€š educational and such other problems of the member of the community and to give proper assistance to solve all such problemsâ€š wherever necessary and possible.
l) In order to strengthen the financial position of the Jamat and to increase its incomeâ€š to run Decoration service and for this purposeâ€š to purchase and give on hire fuitureâ€š utensilsâ€š and other articlesâ€š to expandâ€š exchangeâ€š sellâ€š lease all the aforesaid articles and to take all necessary measures for the benefits of the jamat.
m) To increase the income of the Jamatâ€š it shall utilize its funds by investing. Its funds in the shares and securities of the Govementâ€š semi Govementâ€š Autonomous Bodiesâ€š Public Limited Companiesâ€š Modarbas etc.â€š and by purchase and sale thereof and by dealing in the scheduled banks.
n) To Sellâ€š purchaseâ€š take on lease or in exchangeâ€š or hire immovable properties and any rights and privilegesâ€š whatsoeverâ€š and to buildâ€š contactâ€š demolish and maintain buildingsâ€š housesâ€š or other constructions required of convenient for any of the objects stated here in above and deemed beneficial in the interest of the Jamat.
o) To obtain contributionsâ€š to raise conditional and unconditional funds and Zakat funds etc.â€š to carry out the aims and object of the Jamat.
p) The Jamat shall confine its activities only to achieve the Aims & Object of the Jamat and the income and property of the Jamat from whatsoever source derived shall be applied solely towards the promoting of the object of the society and no portion thereof shall paid by way of dividendâ€š profitâ€š bonus to any memberâ€š office bearers of the society of otherwise violation of this condition will be personnel responsibility of the office bearers of member conceed.

VALUES
â€¢ Integrity
â€¢ Empathy
â€¢ Respect
â€¢ Collaboration
â€¢ Synergy
â€¢ Accountability
â€¢ Transparency

`;

export default function Organizaitional() {

  const handleDownload = () => {
    const blob = new Blob([memonText], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Organizaitional_Philosophy.txt"; // file name
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen mt-3">
      <div className="max-w-5xl mx-auto px-4 py-3 text-gray-800">

        {/* Heading */}
        {/* <h1 className="text-3xl md:text-4xl bg-primary text-white  text-center">
          History of Memons
        </h1> */}


        <SectionHeading
          title="Organizaitional Philosophy"
          subtitle="Discover the journey and legacy"
          className="mb-0 lg:mb-0 bg-primary text-white"
        />


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
