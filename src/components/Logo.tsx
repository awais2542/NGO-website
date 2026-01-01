"use client";

import React from "react";
import Image from "next/image";


type LogoProps = {
  children?: React.ReactNode;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export default function Logo({
  children,
  src,
  width,
  height,
  alt,
}: LogoProps) {
  return (
    <>
      {src && (
        <Image
          src={"/images/logo.png"}
          width={width ?? 40}
          height={height ?? 40}
          alt={alt ?? "Logo"}
        />
      )}
      {children}
    </>
  );
}
