import React from "react";
import Link from "next/link";
import { Button } from "./button";

export default function GalleryButton() {
  return (
    <div className="w-full flex justify-center">
      <Link href="/Gallery" className="inline-block">
        <Button
          size="lg"
          className="
            w-full md:w-auto px-8
            bg-accent text-black
            transition-all duration-300 ease-in-out transform-gpu
            hover:bg-secondary/90
            hover:scale-105
            active:scale-95
          "
        >
          View All
        </Button>
      </Link>
    </div>
  );
}
