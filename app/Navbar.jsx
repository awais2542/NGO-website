"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/button";
import { AboutMemonDropDown } from "@/components/demos/AboutMemonDrop";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import {NewsDropDown} from "@/components/demos/NewsDrop";

const navItems = [
  { name: "Home", href: "/" }, 
  { name: "Our Partners", href: "/partners" },
  { name: "Our Work", href: "/work" },
  { name: "Gallery", href: "/Gallery" },
  { name: "Contact Us", href: "/contact" },
  { name: <AboutMemonDropDown />, },
  { name: <NewsDropDown />,  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ===== TOP BAR ===== */}
        <div className="relative h-20 flex items-center md:grid md:grid-cols-[auto_1fr_auto]">
          
          {/* LEFT: LOGO */}
          <div className="flex-shrink-0 md:w-[140px]">
            <Logo
              src="/logo.png"
              height={60}
              width={90}
              alt="logo"
            />
          </div>

          {/* CENTER: MENU (DESKTOP ONLY) */}
          <div className="hidden md:flex justify-center items-center gap-5">
            {navItems.map((item , index) => {
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
                    "relative text-sm font-medium transition",
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

          {/* RIGHT: DESKTOP BUTTON */}
          <div className="hidden md:flex justify-end md:w-[140px]">

            <Link href="/donation">
            <Button size={"lg"} className="px-5  bg-secondary text-primary-foreground hover:bg-secondary/90">
              Donate Now
            </Button>
           </Link>
          </div>

          {/* MOBILE TOGGLE (FORCED RIGHT) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden absolute right-0 p-2 rounded-lg border border-border text-foreground"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden bg-background px-4 py-6 space-y-4">
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

        <Link href="/donation">
          <Button className="w-full mt-4 rounded-full bg-accent text-primary-foreground">
            Donate Now
          </Button>
         </Link>
        </div>
      )}
    </nav>
  );
}
