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

export function NewsDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
           className="bg-card text-black border-0 text-foreground/80 hover:text-primary
           relative px-3 py-1 "
        >
          News & Stories
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 bg-card border border-gray-200 shadow-lg p-2" align="start">
        {/* Top level links */}
        <DropdownMenuGroup className="flex flex-col space-y-1">
          <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
            Stories
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
            Documentaries
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
            In The News
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1" />

        {/* Submenu example */}
        <DropdownMenuGroup className="flex flex-col space-y-1">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="px-2 py-1 hover:bg-primary hover:text-white rounded">
              More Categories
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-56 bg-card border border-gray-200 shadow-lg p-2">
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Press Releases
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Blog
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 hover:bg-primary hover:text-white rounded">
                  Media Coverage
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
