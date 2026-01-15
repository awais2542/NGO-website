"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo"; // Make sure path correct ho
import { WhatsAppIcon, InstagramIcon, FacebookIcon ,YouTubeIcon } from "@/components/Icons";


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
        { text: "Our History", href: "#" },
        { text: "History of Memons ", href: "#" },
        { text: "The Essence", href: "#" },
        { text: "Who We Are", href: "#" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { text: "Financial & Monthly Aid", href: "#" },
        { text: "Legal & Community Support", href: "#" },
        { text: "Housing & Assistance", href: "#" },
        { text: "Youth & Sports Program", href: "#" },
        { text: "Information Technology(IT) Training & Support", href: "#" },
      ],
    },
    {
      title: "Make A Difference",
      links: [
        { text: "Volunteer", href: "#" },
        { text: "Carrier", href: "#" },
        { text: "Donate", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { text: "Gmail", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Address", href: "#" },
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
      icon: <WhatsAppIcon />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/yourprofile",
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/yourpage",
      icon: <FacebookIcon />,
    },
    {
      label: "Youtube",
      href: "https://youtube.com/yourprofile",
      icon: <YouTubeIcon />,
    },
  ],
  className,
}: FooterProps) {
  return (
    <footer
      className={cn("border-t border-gray-500 bg-muted w-full px-4", className)}
    >
      <div className="max-w-7xl mx-auto py-12">
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
          {groups.map((group, index) => (
            <div key={index}>
              {index === 0 ? (
                // FIRST GROUP: LOGO
                <div className="mb-3 flex items-center">
                  <Logo
                    src="/images/logo.png"
                    height={50}
                    width={150}
                    alt={companyName}
                  />
                </div>
              ) : group.title === "Social Media" ? (
                // SOCIAL LINKS GROUP
                <div className="mb-3">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                        className="text-muted-foreground hover:text-foreground transition hover:transform hover:scale-120"
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
                          className="text-sm text-muted-foreground hover:text-foreground transition"
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
        <div className="mt-12  border-t w-full text-center py-4">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
