"use client";

import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
} from "react-icons/fa";
import { Button } from "@/components/button";

const socials = [
    { name: "Facebook", Icon: FaFacebookF, href: "https://facebook.com" },
    { name: "X", Icon: FaTwitter, href: "https://x.com" },
    { name: "YouTube", Icon: FaYoutube, href: "https://youtube.com" },
    { name: "Instagram", Icon: FaInstagram, href: "https://instagram.com" },
    { name: "LinkedIn", Icon: FaLinkedinIn, href: "https://linkedin.com" },
    { name: "TikTok", Icon: FaTiktok, href: "https://tiktok.com" },
];

export function SocialButtons() {
    return (
        <div className="flex gap-3">
            {socials.map(({ name, Icon, href }) => (
                <Button
                    key={name}
                    variant="outline"
                    size="icon-sm"
                    asChild
                >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="size-5 text-current" />
                    </a>
                </Button>
            ))}
        </div>
    );
}