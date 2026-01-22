import React from 'react'
import Link from 'next/link'
import { Button } from './button'

export default function DonationButton() {
  return (
    <div className="w-full">
      <Link href="/donation" className="block w-full">
        <Button
          size="lg"
          className="
            w-full md:w-auto px-5
            bg-secondary text-primary-foreground
            transition-all duration-300 ease-in-out transform-gpu
            hover:bg-secondary/90
            hover:scale-105
            active:scale-95
          "
        >
          Donate Now
        </Button>
      </Link>
    </div>
  )
}
