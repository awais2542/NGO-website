"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo"; // Make sure path correct ho
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/Icons";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";



interface FooterLink {
  text: string;
  href: string;
}

interface FooterGroup {
  title: string;
  links?: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  companyName?: string;
  groups?: FooterGroup[];
  socialLinks?: SocialLink[];
  className?: string;
}

export default function FooterSection({
  companyName = "Your Company",
  groups = [
    {
      title: "", // Logo group
    },
    {
      title: "About Us",
      links: [
        { text: "Our History", href: "/HistoryGMA" },
        { text: "History of Memons ", href: "/HistoryMemons" },
        { text: "The Essence", href: "/Essence" },
        { text: "Who We Are", href: "" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { text: "Financial & Monthly Aid", href: "/OurWork#financial-aid" },
        { text: "Legal & Community Support", href: "OurWork#legal-support" },
        { text: "Housing & Assistance", href: "OurWork#housing-assistance" },
        { text: "Youth & Sports Program", href: "OurWork#youth-sports" },
        { text: "Information Technology(IT) Training & Support", href: "OurWork#it-training" },
      ],
    },
    {
      title: "Make A Difference",
      links: [
        { text: "Volunteer", href: "#" },
        { text: "Carrier", href: "#" },
        { text: "Donate", href: "/donation" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { text: "Email: info@gma.org.pk", href: "gmail:info@gma.org.pk" },
        { text: "Contact+92 (21) 34895177, 34855177", href: "#" },
        { text: "Address:Plot # 9/1, Street # 2, Muslimabad Co-Operative Housing Society,Adj. Faizan-e-Sunnat Masjid, Near Dawood Engineering Collage, New M.A Jinnah Road Karachi, Pakistan ", href: "#" },
      ],
    },
    {
      title: "Social Media",
      links: [], // Social links will go here
    },
  ],
  socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: (
      <MessageCircle
        size={20}
        className="text-[#25D366]"
        strokeWidth={1.8}
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourprofile",
    icon: (
      <Instagram
        size={20}
        className="text-[#E4405F]"
        strokeWidth={1.8}
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourpage",
    icon: (
      <Facebook
        size={20}
        className="text-[#1877F2]"
        strokeWidth={1.8}
      />
    ),
  },
  {
    label: "Youtube",
    href: "https://youtube.com/yourprofile",
    icon: (
      <Youtube
        size={20}
        className="text-[#FF0000]"
        strokeWidth={1.8}
      />
    ),
  },
],
  className,
}: FooterProps) {
  return (
    
    <footer
      className={cn("border-t text-gray-500 hover:text-primary w-full px-4", className)}
    >
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6
    gap-5">

          {groups.map((group, index) => (
            <div key={index}>
              {index === 0 ? (
                // FIRST GROUP: LOGO
                <div className="mb-3 flex justify-center md:justify-start items-center">

                  <Logo
                    src="/images/logo.png"
                    height={40}
                    width={120}
                    alt={companyName}
                   className="h-[35px] w-[110px] sm:h-[50px] sm:w-[150px]"

                  />


                </div>
              ) : group.title === "Social Media" ? (
                // SOCIAL LINKS GROUP
                <div className="mb-3">
                  <h4 className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h4>
                  <div className="flex gap-3 sm:gap-4 justify-center md:justify-start
">

                    {socialLinks.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                        className="text-xs sm:text-sm p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-primary transition duration-300 hover:scale-110"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                // NORMAL GROUP
                <>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {group.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        {/* <div className="mt-12 flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"> */}
        <div className="mt-8 border-t w-full text-center py-4 sm:py-5
          ">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
