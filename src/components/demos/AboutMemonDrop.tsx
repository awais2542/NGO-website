"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/button";
import { ChevronDown } from "lucide-react";
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
} from "@/components/dropdown-menu";

export function AboutMemonDropDown() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-card text-black border-0 px-3 py-1 flex items-center gap-1"
        >
          About Memon
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 p-2" align="start">
        {/* First Group */}
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem asChild>
            <Link href="/history-gma">History Of GMA</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/history-memons">History Of Memons</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/essence">The Essence</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/organizaitional">Organizaitional Philosophy</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/volunteer">Became a Volunteer</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Second Group */}
        <DropdownMenuGroup className="space-y-1">
          {isMobile ? (
            <>
              <DropdownMenuItem asChild>
                <Link href="/office-bearers">Office Bearers</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/committee">Managing Committee</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/youth-wing">Youth Wing</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/ladies-wing">Ladies Wing</Link>
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Who We Are
              </DropdownMenuSubTrigger>

              <DropdownMenuSubContent className="w-56 p-2">
                <DropdownMenuItem asChild>
                  <Link href="/office-bearers">Office Bearers</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/committee">Managing Committee</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/youth-wing">Youth Wing</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/ladies-wing">Ladies Wing</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
