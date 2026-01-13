"use client";

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
  DropdownMenuPortal,
} from "@/components/dropdown-menu";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-card text-foreground/80 hover:text-primary
           text-black border-0 relative px-3 py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          About Memon
           <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 bg-card border border-gray-200 shadow-lg p-2" align="start">
        {/* Top level links */}
        <DropdownMenuGroup className="flex flex-col space-y-1">
          <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
            Our History
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
            History Of Memons
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
            The Essence
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1" />

        {/* Submenu */}
        <DropdownMenuGroup className="flex flex-col space-y-1">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="px-2 py-1 hover:bg-primary hover:text-white rounded">
              Who We Are
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-56 bg-card border border-gray-200 shadow-lg p-2">
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Office Bearers
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Managing
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Committee
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Youth
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Wing
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Ladies Wing
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
