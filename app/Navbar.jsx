"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/button";
import Logo from "@/components/Logo";
import { DropdownMenuDemo } from "@/components/demos/dropdownMenuDemo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink =
    "relative text-black px-2 py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between relative">

          {/* LEFT: LOGO */}
          <div className="flex-shrink-0">
            <Logo src="/Images/logo.png" height={40} width={100} alt="logo" />
          </div>

          {/* CENTER: NAV LINKS (DESKTOP) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            <Link href="/" className={navLink}>Home</Link>
            <DropdownMenuDemo />
            <Link href="#" className={navLink}>Services</Link>
            <Link href="#" className={navLink}>Our Partners</Link>
            <Link href="#" className={navLink}>Our Work</Link>
            <Link href="#" className={navLink}>Contact</Link>
          </div>

          {/* RIGHT: DONATE + TOGGLER */}
          <div className="flex items-center gap-3">
            <Link href="/donate" className="hidden md:block">
              <Button className="bg-secondary hover:bg-primary transition">
                Donate
              </Button>
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-muted"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-card px-4 pb-4 space-y-3 shadow-md">
          <Link href="/" className="block nav-item">Home</Link>
          <DropdownMenuDemo />
          <Link href="#" className="block nav-item">Services</Link>
          <Link href="#" className="block nav-item">Our Partners</Link>
          <Link href="#" className="block nav-item">Our Work</Link>
          <Link href="#" className="block nav-item">Contact</Link>

          <Link href="/donate">
            <Button className="w-full mt-2">Donate</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
