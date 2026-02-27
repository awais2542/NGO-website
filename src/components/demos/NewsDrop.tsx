"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
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

export function NewsDropDown() {
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
          News & Stories
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 p-2" align="start">
        {/* Top level */}
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem><Link href="/stories">Stories</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/documentaries">Documentaries</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/news">In The News</Link></DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* More Categories */}
        <DropdownMenuGroup className="space-y-1">
          {isMobile ? (
            <>
              <DropdownMenuItem>Press Releases</DropdownMenuItem>
              <DropdownMenuItem>Blog</DropdownMenuItem>
              <DropdownMenuItem>Media Coverage</DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                More Categories
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-56 p-2">
                <DropdownMenuItem>Press Releases</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Media Coverage</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
