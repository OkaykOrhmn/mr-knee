import localFont from "next/font/local";

export const dana = localFont({
  src: [
    {
      path: '../assets/fonts/dana-reg.ttf',
      weight: "400",
      style: "normal",
    },
    {
      path: '../assets/fonts/dana-bold.ttf',
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-dana",
});
