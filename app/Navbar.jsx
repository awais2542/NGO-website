"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuDemo } from "../components/ui/demos/dropdownMenuDemo";

export default function Navbar(){
    const[isClick, setisClick] =  useState(false);
    
    const toggleNavbar = ()  =>  {
        setisClick(!isClick);
    }
    return (
        <nav className="bg-accent-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <div className="flex items-center justify-between h-16">   
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a className="text-white" href=""><img src="./logo.png" alt="logo"></img></a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <a  href="/" className="nav-link text-white hover:bg-white hover:text-black rounded-lg p-2" >
                                Home
                            </a>
                            
                               <DropdownMenuDemo />
                           
                            <a  href="" className=" nav-link text-white hover:bg-white hover:text-black rounded-lg p-2" >
                                Services
                            </a>
                            <a  href="" className="nav-link text-white hover:bg-white hover:text-black rounded-lg p-2" >
                                Our Partners
                            </a> 
                            <a  href="" className="nav-link text-white hover:bg-white hover:text-black rounded-lg p-2" >
                                Our Work
                            </a><
                                a  href="" className="nav-link text-white hover:bg-white hover:text-black rounded-lg p-2" >
                                Contact
                            </a>
                            <a  href="" className="text-white rounded-lg p-2" >
                                <Button>Donate</Button>
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white
                         hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                        <a href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Home
                        </a>
                        <a href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">
                        About
                        </a>
                        <a href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Services
                        </a>
                        <a href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Our Partners
                        </a>
                        <a href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Contact
                        </a>

                        <Button className="w-full mt-2">Donate</Button>
                    </div>
                )}
        </nav>
    )
}