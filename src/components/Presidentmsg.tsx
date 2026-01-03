"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./card"
import Image from "next/image"

export default function Presidentmsg() {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <Card className="w-full max-w-6xl bg-secondary rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
            President Message
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 sm:px-6 pb-8">
          
          {/* IMAGE (TOP ON MOBILE, RIGHT ON DESKTOP) */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/carousel/image1.jpg"
                alt="President Message"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT (BOTTOM ON MOBILE, LEFT ON DESKTOP) */}
          <div className="order-2 md:order-1 text-left space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The main aim and objective of establishing{" "}
              <strong>GONDAL Memon Jamat</strong> is to create harmony among all the
              members of jamat and to work for the welfare of its members in all
              possible manners.
            </p>

            <p>
              It is a matter of great pleasure that GONDAL Memon Jamat association
              is playing an outstanding role in the social welfare of the Memon
              community.
            </p>

            <p>
              The managing committee is committed to solving problems related to
              health, education, rehabilitation, marriage, and monthly cash
              support for deserving families through continuous effort and hard
              work.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
