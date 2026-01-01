import { Button } from "@/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline" className="bg-card text-black hover:bg-muted border-0">About GMA</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Our History
          </DropdownMenuItem>
          <DropdownMenuItem>
            History Of Memons
          </DropdownMenuItem>
          <DropdownMenuItem>
            The Essence
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Who We Are</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Office Bearers</DropdownMenuItem>
                <DropdownMenuItem>Managing </DropdownMenuItem>
                <DropdownMenuItem>Committee </DropdownMenuItem>
                <DropdownMenuItem>Youth </DropdownMenuItem>
                <DropdownMenuItem>Wing </DropdownMenuItem>
                <DropdownMenuItem>Ladies Wing </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
