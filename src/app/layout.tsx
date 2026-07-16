import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { dana } from "./fonts";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "محمد جمالی | آقای زانو | درمان تخصصی زانو و توانبخشی ورزشی",
    template: "%s | محمد جمالی",
  },
  description:
    "کلینیک تخصصی آقای زانو (محمد جمالی) – بیش از ۱۰ سال تجربه در درمان غیرجراحی زانو، توانبخشی ورزشکاران حرفه‌ای و آموزش. مشاوره و برنامه تمرینی اختصاصی.",
  keywords:
    "محمد جمالی, آقای زانو, Mr. Knee, درمان زانو, توانبخشی زانو, آسیب‌شناسی ورزشی, مکانوتراپی زانو, بازگشت به ورزش, تمرینات اصلاحی",
  openGraph: {
    title: "محمد جمالی | آقای زانو – متخصص توانبخشی و درمان زانو",
    description:
      "درمان تخصصی زانو بدون جراحی با بیش از ۱۰ سال تجربه در تیم‌های ملی و لیگ برتر.",
    url: "https://mrknee.ir",
    siteName: "آقای زانو",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://mrknee.ir/hero-portrait.webp",
        width: 1200,
        height: 630,
        alt: "محمد جمالی - آقای زانو",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "H5a6-8e2GAUpyRvnrkDOrRMKjrUe7fVMMmHUj2dGIsw",
  },

  alternates: {
    canonical: "https://mrknee.ir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${dana.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
