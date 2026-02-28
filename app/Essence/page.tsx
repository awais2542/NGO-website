import { Banner } from "@/components/banner";
import FooterSection from "@/components/Footer";
import { SectionHeading } from "@/components/section-heading";
import { GraduationCap, HandCoins, Heart, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";


export default function Page() {
  return (
    <div className="min-h-screen bg-white mt-2">

      {/* Banner Image */}
      <Banner
        image="/essence/1.jpg"
        title="Our Vision"
        subtitle="A small donation can create a big change."
      />

      {/* OUR VISION */}
      <div className="text-center py-8 px-4">
        <SectionHeading
          title="Our Vision"
        />

        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
          Envisioning a Compassionate Society
        </p>

        <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
          ایک شفقت بھرے معاشرے کا تصور
        </p>
      </div>

      {/* OUR MISSION */}
      <div className=" py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <SectionHeading
            title="Our Mission"
          />

          <div className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-6 text-left">

            <p>
              To restore society’s faith in love and peace by strengthening
              relationships within families and communities through holistic
              education for all.
            </p>

            <p>
              To bridge the socio-economic gap by providing equal opportunities
              in Education, Empowerment, and Engagement for all.
            </p>

            <p>
              To strengthen belief in the power of motherhood as the most
              impactful source of character building by working closely with
              mothers and caregivers.
            </p>

            <p>
              To raise awareness and understanding of mental health, emotional
              wellbeing, character building, and humanitarian values.
            </p>

          </div>
        </div>
      </div>
      {/* our function  */}
      <div className="text-center py-8 px-4">
        <SectionHeading
          title="Our Functions"
          subtitle="All our functions are operating through the understanding of emotional wellbeing and positive mental health."
          className="mb-0 lg:mb-0"
        />

      </div>
      {/* icon imgs  */}



      <div className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex sm:grid sm:grid-cols-3 gap-5 text-center overflow-x-auto sm:overflow-visible">


            {/* Icon 1 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-red-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <Heart className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-red-500">
                Compassion
              </h3>
            </div>

            {/* Icon 2 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-blue-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <Users className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-500">
                Community
              </h3>
            </div>

            {/* Icon 3 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-green-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <GraduationCap className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-green-500">
                Education
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* our Values  */}
      <div className="text-center py-8 px-4">
        <SectionHeading
          title="Our Values"
          subtitle="All our functions are operating through the understanding of emotional wellbeing and positive mental health."
          className="mb-0 lg:mb-0"
        />
      </div>
      {/* icons  four */}
      <div className="py-12 px-4 bg-white mb-2">
        <div className="max-w-5xl mx-auto">
          <div className="flex sm:grid sm:grid-cols-4 gap-3 text-center  sm:gap-0">



            {/* Icon 1 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-pink-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <HeartHandshake className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-red-500">
                Courage
              </h3>
            </div>

            {/* Icon 2 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-teal-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <HandCoins className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-500">
                Ownership
              </h3>
            </div>

            {/* Icon 3 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-orange-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-green-500">
                Resilience
              </h3>
            </div>
            {/* Icon 4 */}
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300">
              <div className="bg-purple-500 p-3 sm:p-5 rounded-full text-white shadow-lg
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-2xl">

                <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-green-500">
                Empathy
              </h3>
            </div>

          </div>
        </div>
      </div>
      {/* img divider   */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px]">
        <Image
          src="/essence/2.jpg"
          alt="history img 1"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <FooterSection />
    </div>
  );
}
