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

export function NewsDropDown() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
          <DropdownMenuItem>Stories</DropdownMenuItem>
          <DropdownMenuItem>Documentaries</DropdownMenuItem>
          <DropdownMenuItem>In The News</DropdownMenuItem>
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
