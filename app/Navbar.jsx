"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/dropdown-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink =
    "relative text-black px-2 py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between relative">

          {/* LEFT: LOGO */}
          <div className="flex-shrink-0">
            <Logo src="/Images/logo.png" height={40} width={100} alt="logo" />
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            <Link href="/" className={navLink}>Home</Link>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={`bg-card text-black hover:bg-muted border-0 ${navLink}`}
                >
                  About GMA
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-card border border-gray-200 shadow-lg" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-primary hover:text-white">Our History</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary hover:text-white">History Of Memons</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary hover:text-white">The Essence</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="hover:bg-primary hover:text-white">Who We Are</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-card border border-gray-200 shadow-lg">
                        <DropdownMenuItem className="hover:bg-primary hover:text-white">Office Bearers</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-primary hover:text-white">Managing</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-primary hover:text-white">Committee</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-primary hover:text-white">Youth</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-primary hover:text-white">Wing</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-primary hover:text-white">Ladies Wing</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#" className={navLink}>Services</Link>
            <Link href="#" className={navLink}>Our Partners</Link>
            <Link href="#" className={navLink}>Our Work</Link>
            <Link href="#" className={navLink}>Contact</Link>
          </div>

          {/* RIGHT: DONATE + MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            {/* Donate button always visible */}
            <Link href="/donate">
              <Button className="bg-secondary hover:bg-primary transition">
                Donate
              </Button>
            </Link>

            {/* Mobile Toggle */}
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
          <Link href="/" className="block text-black px-2 py-1 hover:bg-muted rounded">Home</Link>

          {/* Dropdown Menu Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full bg-card text-black hover:bg-muted border-0">About GMA</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-card border border-gray-200 shadow-lg">
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-primary hover:text-white">Our History</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary hover:text-white">History Of Memons</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary hover:text-white">The Essence</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary hover:text-white">Who We Are</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-card border border-gray-200 shadow-lg">
                      <DropdownMenuItem className="hover:bg-primary hover:text-white">Office Bearers</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-primary hover:text-white">Managing</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-primary hover:text-white">Committee</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-primary hover:text-white">Youth</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-primary hover:text-white">Wing</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-primary hover:text-white">Ladies Wing</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#" className="block text-black px-2 py-1 hover:bg-muted rounded">Services</Link>
          <Link href="#" className="block text-black px-2 py-1 hover:bg-muted rounded">Our Partners</Link>
          <Link href="#" className="block text-black px-2 py-1 hover:bg-muted rounded">Our Work</Link>
          <Link href="#" className="block text-black px-2 py-1 hover:bg-muted rounded">Contact</Link>
        </div>
      )}
    </nav>
  );
}
