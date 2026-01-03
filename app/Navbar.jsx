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

export default function Navbar(){
    const[isClick, setisClick] =  useState(false);
    
    const toggleNavbar = ()  =>  {
        setisClick(!isClick);
    }
    return (
        <nav className="relative bg-card text-black ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <div className="flex items-center justify-between h-25">   
                    <div className="flex items-center">
                        <div className="logo flex mt-5 shrink-0 " >
                            <Logo src={"Images/logo.png"} height={40} width={100} alt="logo" />
                        </div>
                        </div>
                        <div className="hidden md:block items-center ">
                        <div className="ml-4 flex items-center-safe gap-6 md:ml-6">
                            <Link  href="/" className="nav-link text-black hover:bg-muted rounded-lg p-2" >
                                Home
                            </Link>
                            
                               <DropdownMenuDemo />
                           
                            <Link  href="" className=" nav-link text-black hover:bg-muted rounded-lg p-2" >
                                Services
                            </Link>
                            <Link  href="" className="nav-link text-black hover:bg-muted rounded-lg p-2" >
                                Our Partners
                            </Link> 
                            <Link  href="" className="nav-link text-black hover:bg-muted rounded-lg p-2" >
                                Our Work
                            </Link>
                            <Link  href="" className="nav-link text-black hover:bg-muted rounded-lg p-2" >
                                Contact
                            </Link>
                           
                        </div>
                        
                        </div>
                        <div className="flex fixed-right">
                             <Link href="/donate" >
                                <Button className=" bg-secondary size-lg hover:bg-primary ">Donate</Button>
                            </Link>
                        </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-xbg-muted                          hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                         onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                    <div className="md:hidden px-4 pb-4 space-y-2 bg-accent-foreground">
                        <Link href="#" className="block text-black hover:bg-muted rounded-lg p-2">
                        Home
                        </Link>
                        <DropdownMenuDemo />
                        <Link href="#" className="block text-black hover:bg-muted rounded-lg p-2">
                        Services
                        </Link>
                        <Link href="#" className="block text-black hover:bg-muted rounded-lg p-2">
                        Our Partners
                        </Link>
                        <Link href="#" className="block text-black hover:bg-muted rounded-lg p-2">
                        Our Work
                        </Link>
                        <Link href="#" className="block text-black hover:bg-muted rounded-lg p-2">
                        Contact
                        </Link>

                        <Button className="w-full mt-2">Donate</Button>
                    </div>
                )}
        </nav>
    )
}
