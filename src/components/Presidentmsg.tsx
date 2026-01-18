"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";

export default function Presidentmsg() {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <Card className="w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden space-y-8">
        {/* Header */}
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
            President’s Message
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-12 px-4 sm:px-6 pb-8">
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
            </div>

            {/* IMAGE */}
            <div className="flex justify-center order-2 md:order-2">
              {/* <div className="relative w-full max-w-90 aspect-square rounded-xl overflow-hidden shadow-md"> */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/president.jpg"
                  alt="President Gondal Memon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ROW 2: Left IMAGE | Right SHORT TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* IMAGE */}
            <div className="flex justify-center order-1 md:order-1">
              {/* <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-xl overflow-hidden shadow-md"> */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/carousel/image3.jpg"
                  alt="President Gondal Memon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* SHORT TEXT */}
            <div className="text-left space-y-3 text-sm sm:text-base leading-relaxed order-2 md:order-2">
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
