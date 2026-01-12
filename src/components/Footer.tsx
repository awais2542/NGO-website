import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
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
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Cookie Policy", href: "#" },
        { text: "Data Protection", href: "#" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { text: "GDPR", href: "#" },
        { text: "CCPA", href: "#" },
        { text: "SOC 2", href: "#" },
        { text: "ISO 27001", href: "#" },
      ],
    },
    {
      title: "Security",
      links: [
        { text: "Security Overview", href: "#" },
        { text: "Responsible Disclosure", href: "#" },
        { text: "Incident Response", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Careers", href: "#" },
      ],
    },
  ],

  socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7-.8 1.7-.8s.3-.6.6-1c-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.6.1 2.9.7.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.7.9.7 1.8v2.7c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9 0-6.35-5.15-11.5-11.5-11.5z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.95-2.48c-.88.52-1.86.9-2.9 1.1A4.52 4.52 0 0016.5 2c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.1 1.03C8.7 7.45 5.07 5.7 2.55 3.1a4.48 4.48 0 00-.61 2.27c0 1.56.8 2.95 2 3.76a4.48 4.48 0 01-2-.55v.06c0 2.2 1.56 4 3.64 4.42a4.52 4.52 0 01-2 .08c.56 1.74 2.16 3 4.06 3a9.03 9.03 0 01-5.56 1.9c-.36 0-.72-.02-1.08-.06a12.74 12.74 0 006.88 2.03c8.26 0 12.78-6.86 12.78-12.78l-.02-.58A9.14 9.14 0 0023 3z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm13.5 11.5h-3v-5.5c0-1.3-1-1.5-1-1.5s-1 .2-1 1.5v5.5h-3v-10h3v1.3c.4-.7 1.6-1.3 3-1.3 2.3 0 4 1.5 4 4.7v5.3z" />
        </svg>
      ),
    },
  ],

  className,
}: FooterProps) {
  return (
    <footer className={cn("border-t bg-muted mt-3 w-full px-4", className)}>
      <div className="max-w-7xl mx-auto py-12">
        
        {/* Legal disclaimer */}
        {/* <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
          This website and its services are provided by {companyName}. By
          accessing or using this site, you agree to be bound by applicable
          laws, regulations, and our published policies. Content is provided
          for informational purposes only and does not constitute legal advice.
        </p> */}

        {/* Groups */}
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {groups.map((group, index) => (
            <div key={index}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {group.title}
              </h4>

              <ul className="flex flex-col gap-2">
                {group.links.map((link, linkIndex) => (
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
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
