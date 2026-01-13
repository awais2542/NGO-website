import React from "react";

export const WhatsAppIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M23.364 21.18c-.43-2.03-1.63-3.35-3.36-3.86-1.1-.34-1.66-.52-2.37.52-.37.46-1.26 1.88-1.55 2.27-.28.39-.57.44-1.06.15-2.09-.65-3.46-1.9-4.59-3.62-.32-.56.32-.52.91-1.72.1-.26.05-.49-.02-.68-.07-.18-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01s-.68.1-1.03.49c-.35.39-1.33 1.3-1.33 3.17s1.36 3.67 1.55 3.92c.19.25 2.68 4.1 6.5 5.74.91.39 1.61.62 2.16.79.91.28 1.74.24 2.39.15.73-.11 2.25-.92 2.57-1.81.32-.89.32-1.65.23-1.81z"
      fill="white"
    />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="instaGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="10%" stopColor="#fa7e1e" />
        <stop offset="30%" stopColor="#d62976" />
        <stop offset="50%" stopColor="#962fbf" />
        <stop offset="70%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="6" fill="url(#instaGrad)" />
    <circle cx="16" cy="16" r="5.5" fill="white" />
    <circle cx="16" cy="16" r="3.5" fill="#000" />
    <circle cx="22" cy="10" r="1.44" fill="white" />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#1877F2" />
    <path
      d="M20 11h-2c-.6 0-1 .4-1 1v2h3l-.5 3h-2.5v8h-3v-8H12v-3h2v-2c0-1.1.9-2 2-2h2v3z"
      fill="white"
    />
  </svg>
);
