"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";

export default function Presidentmsg() {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <Card className="w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden space-y-">
        {/* Header */}
        <CardHeader className="text-center pb-">
          <CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
            President’s Message
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 sm:space-y-12 px-3 sm:px-6 pb-6">

          {/* ROW 1: Left TEXT | Right IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* TEXT */}
            <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed order-1 md:order-1">
              <p>
                Since its establishment in <strong>1950</strong>,{" "}
                <strong>Gondal Memon Association</strong> has been dedicated to
                fostering harmony, compassion, and social welfare within the
                Memon community.
              </p>
              <p>
                Our vision is rooted in the belief that true progress arises
                when individuals, families, and community members are supported
                holistically—emotionally, socially, and economically.
              </p>


              <p>
                As the President, I am honored to lead an organization that
                upholds the values of <strong>Akhlaq</strong>,{" "}
                <strong>Khidmat</strong>, and <strong>Insaniyat</strong>. Our
                commitment is to serve the community through initiatives that
                empower members and promote justice.
              </p>

              <p>
                Through the <strong>Imdad Board</strong>, aid is carefully
                assessed and distributed to ensure it reaches the most
                deserving.
              </p>
               <div className="pt-4">
                <p className="font-semibold">Shabbir Abdul Razzak Teli</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  President, Gondal Memon Association
                </p>
              </div>
              
            </div>

            {/* IMAGE with quotes */}
       <div className="flex justify-center order-2 md:order-2 w-full">
              <div className="w-full max-w-md bg-accent rounded-xl shadow-md p-4 sm:p-6 text-center">


                {/* English Quote */}
                <p className="text-black font-bold text-lg mt-2">
                  “My aim is to restore society’s <br />
                  belief in love”
                </p>

                {/* Urdu Quote */}
                <p className="text-black font-bold text-lg mt-4">
                  “Mein Mohabbat Peh Imaan <br />
                  Bahaal Karna Chahta Hoon.”
                </p>

                {/* Image + Text Row */}
                <div className="flex items-center justify-center gap-4 mt-8">

                  {/* Image */}
                  <Image
                    src="/images/president.jpg"
                    alt="Founder"
                    width={70}
                    height={70}
                    className="rounded-full object-fill shadow-lg sm:w-[90px] sm:h-[90px]"
                    priority
                  />

                  {/* Text beside image */}
                  <div className="text-left">
                    <p className="text-black font-semibold text-base">
                      Gondal Memon
                    </p>
                    <p className="text-gray-600 text-sm leading-tight">
                      Founder & President <br />
                      Gondal Memon Association
                    </p>
                  </div>

                </div>

              </div>
      </div>

          </div>
        {/* ROW 2: Left IMAGE | Right SHORT TEXT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                {/* IMAGE ONLY CARD */}
                <div className="flex justify-center order-1 md:order-1 w-full">
                  <div className="relative w-full max-w-md h-[200px] sm:h-[260px] md:h-[320px] rounded-xl overflow-hidden shadow-md">

                    <Image
                      src="/donation/3.jpg"
                      alt="President"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* SHORT TEXT (unchanged) */}
                <div className="text-left space-y-3 text-sm sm:text-base leading-relaxed order-2 md:order-2">
                  {/* Islamic Quote 1 */}
                        <p className="text-black font-semibold text-base sm:text-lg leading-snug">

                          “The example of those who spend their wealth <br />
                          in the way of Allah is like a seed which grows <br />
                          seven ears; in every ear a hundred grains.”
                        </p>
                        <p className="text-sm text-gray-600">
                          — Surah Al-Baqarah (2:261)
                        </p>
                  {/* Islamic Quote 2 */}
                    <p className="text-black font-semibold text-base sm:text-lg leading-snug">

                      “Charity does not decrease wealth.”
                    </p>
                    <p className="text-sm text-gray-600">
                      — Prophet Muhammad ﷺ (Muslim)
                    </p>
                    {/* Islamic Quote 3 */}
                    <p className="text-black font-semibold text-base sm:text-lg leading-snug">

                      “Whoever relieves a believer’s hardship, <br />
                      Allah will relieve his hardship on the Day of Judgment.”
                    </p>
                    <p className="text-sm text-gray-600">
                      — Prophet Muhammad ﷺ (Muslim)
                    </p>    

                </div>

              </div>

        </CardContent>
      </Card>
    </div>
  );
}
