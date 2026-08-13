import type { Metadata } from "next";
import { Josefin_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import SmoothScrolling from "../components/SmoothScrolling";

const josefinSans = Josefin_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant", // Kita gunakan variabel yang sama agar otomatis merubah heading
});

const robotoSlab = Roboto_Slab({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope", // Kita gunakan variabel yang sama agar otomatis merubah body text
});

// ✅ SEO yang sudah ditambah dengan keyword fasilitas dan sunset
export const metadata: Metadata = {
  title: "Uluwatu Sunset Hills | Premium Recovery",
  description: "Experience luxury holistic recovery in Uluwatu, Bali. Elevate your physical and mental wellbeing at our exclusive sanctuary featuring ice baths, saunas, hot pools, and holistic therapies with stunning sunset views.",
  keywords: [
    "recovery bali", 
    "ice bath uluwatu", 
    "sauna bali", 
    "hot pool uluwatu",
    "hot pool bali",
    "swimming pool uluwatu",
    "wellness sanctuary", 
    "uluwatu sunset hills", 
    "uluwatu sunset hills recovery",
    "sunset view recovery bali",
    "holistic recovery bali", 
    "contrast therapy uluwatu",
    "plant-based restaurant uluwatu"
  ],
  openGraph: {
    title: "Uluwatu Sunset Hills | Premium Recovery",
    description: "Experience luxury holistic recovery in Uluwatu, Bali. Elevate your physical and mental wellbeing at our exclusive sanctuary featuring stunning sunset views.",
    url: "https://uluwatusunsethills.com", 
    siteName: "Uluwatu Sunset Hills",
    images: [
      {
        url: "/images/logo/logo-new.webp", 
        width: 800,
        height: 600,
        alt: "Uluwatu Sunset Hills Premium Recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uluwatu Sunset Hills | Premium Recovery",
    description: "Experience luxury holistic recovery with stunning sunset views in Uluwatu, Bali.",
    images: ["/images/logo/logo-new.webp"],
  },
  icons: {
    icon: "/images/logo/logo-new.webp",
    apple: "/images/logo/logo-new.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${robotoSlab.variable}`} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <Navbar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}