"use client";

import { useEffect, useState } from "react";
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
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem>Our History</DropdownMenuItem>
          <DropdownMenuItem>History Of Memons</DropdownMenuItem>
          <DropdownMenuItem>The Essence</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="space-y-1">
          {isMobile ? (
            <>
              <DropdownMenuItem>Office Bearers</DropdownMenuItem>
              <DropdownMenuItem>Managing Committee</DropdownMenuItem>
              <DropdownMenuItem>Youth Wing</DropdownMenuItem>
              <DropdownMenuItem>Ladies Wing</DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Who We Are
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-56 p-2">
                <DropdownMenuItem>Office Bearers</DropdownMenuItem>
                <DropdownMenuItem>Managing Committee</DropdownMenuItem>
                <DropdownMenuItem>Youth Wing</DropdownMenuItem>
                <DropdownMenuItem>Ladies Wing</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
