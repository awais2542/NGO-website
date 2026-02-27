"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/button";
import { AboutMemonDropDown } from "@/components/demos/AboutMemonDrop";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { NewsDropDown } from "@/components/demos/NewsDrop";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Partners", href: "/OurPartner" },
  { name: "Our Work", href: "/OurWork" },
  { name: "Gallery", href: "/Gallery" },
  { name: "Contact Us", href: "/Contact" },
  { name: <AboutMemonDropDown />, },
  { name: <NewsDropDown />, },
  {
    name: (
      <>
        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <span className="hidden lg:block h-6 w-px bg-border" />

          <Link href="/donation" className="block">
            <Button
              size="lg"
              className="px-5 bg-secondary text-primary-foreground transition-all duration-300 ease-in-out transform-gpu hover:bg-secondary/90 hover:scale-105 active:scale-95"
            >
              Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile view */}
        <div className="md:hidden w-full scale-90">
          <Link href="/donation" className="block w-full">
            <Button
              size="lg"
              className="w-full px-5 bg-secondary text-primary-foreground transition-all duration-300 ease-in-out transform-gpu hover:bg-secondary/90 hover:scale-105 active:scale-95"
            >
              Donate Now
            </Button>
          </Link>
        </div>
      </>
    )
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== TOP BAR ===== */}
        <div className="relative h-16 sm:h-18 md:h-20
           flex items-center md:grid md:grid-cols-[auto_1fr_auto]">

          {/* LEFT: LOGO */}
          <div className="flex-shrink-0 md:w-[140px]">
            <Logo
              src="/images/logo.png"
              height={40}
              width={65}
              className="sm:h-[50px] sm:w-[80px] md:h-[60px] md:w-[90px]"
            />
          </div>

          {/* CENTER: MENU (DESKTOP ONLY) */}
          <div className="hidden lg:flex justify-center items-center gap-2 sm:gap-3 md:gap-5">

            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              // If item has no href, render it directly (for dropdown components)
              if (!item.href) {
                return (
                  <div key={index}>
                    {item.name}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href || index}
                  href={item.href}
                  className={clsx(
                    "relative  text-xs sm:text-sm md:text-base font-medium transition",
                    "bg-card text-black border-0 relative px-3 py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-destructive after:transition-all after:duration-300 hover:after:w-full",
                    isActive
                      ? "text-primary after:w-full"
                      : "text-foreground/80 hover:text-primary",
                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-destructive after:transition-all after:w-0"
                  )}

                >
                  {item.name}

                </Link>

              );
            })}


          </div>


          {/* MOBILE TOGGLE (FORCED RIGHT) */}
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setOpen(!open)}
            className="lg:hidden absolute right-0"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="lg:hidden bg-background px-4 py-6 space-y-4">

          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            // If item has no href, render it directly (for dropdown components)
            if (!item.href) {
              return (
                <div key={index} onClick={() => setOpen(false)}>
                  {item.name}
                </div>
              );
            }

            return (
              <Link
                key={item.href || index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "block text-base font-medium",
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}


        </div>
      )}
    </nav>
  );
}
