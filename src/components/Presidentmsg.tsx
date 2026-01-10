"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./card"
import Image from "next/image"

export default function Presidentmsg() {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <Card className="w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
            President’s Message
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 sm:px-6 pb-8">
          
          {/* IMAGE */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/president.png"
                alt="President Gondal Memon"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-2 md:order-1 text-left space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Since its establishment in <strong>1950</strong>,{" "}
              <strong>Gondal Memon Association</strong> has been dedicated to fostering
              harmony, compassion, and social welfare within the Memon community.
              Our vision is rooted in the belief that true progress arises when
              individuals, families, and community members are supported
              holistically—emotionally, socially, and economically.
            </p>

            <p>
              As the President, I am honored to lead an organization that upholds
              the values of <strong>Akhlaq</strong>, <strong>Khidmat</strong>, and{" "}
              <strong>Insaniyat</strong>. Our commitment is to serve the community
              through initiatives that empower members, promote justice, and
              ensure well-being for all.
            </p>

            <p>
              From graveyard services, medical and marriage aid, monthly financial
              support, and zakat distribution to legal aid, housing assistance,
              IT training, youth welfare programs, sports activities, and community
              arbitration, we strive to address diverse needs with dedication and
              transparency.
            </p>

            <p>
              Through the <strong>Imdad Board</strong>, aid is carefully assessed and
              distributed to ensure it reaches the most deserving. Our work is
              rooted in collaboration with families, volunteers, and partners to
              strengthen community bonds.
            </p>

            <p>
              Our mission goes beyond assistance—it is about nurturing a culture
              of responsibility, empathy, and empowerment. By supporting youth
              and facilitating growth opportunities, we aim to preserve dignity
              and instill hope for a brighter future.
            </p>

            {/* SIGNATURE */}
            <div className="pt-4">
              <p className="font-semibold">Shabbir Abdul Razzak Teli</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                President, Gondal Memon Association
              </p>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
