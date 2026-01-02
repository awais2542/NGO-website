"use client"
import { Car } from "lucide-react"
import { Card, CardContent } from "./card"

import { CardHeader , CardFooter, CardTitle, CardDescription } from './card'



export default function Presidentmsg() {
  return (
   <>
      <Card className="w-full h-70  bg-secondary overflow-hidden border">
        <CardHeader className="align text-center">
          <CardTitle><h1>President Message</h1></CardTitle>
          <CardDescription>
            The President Message
          </CardDescription>
        </CardHeader>
        <p className="text-center pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto cum repellendus ut mollitia recusandae commodi ab aspernatur aliquid quo inventore, cupiditate minus perspiciatis, fugiat, at non nemo error ipsa?
        </p>
        <CardContent/>
          
      </Card>
   </>
  )
}
