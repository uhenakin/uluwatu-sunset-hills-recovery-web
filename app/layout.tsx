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

export const metadata: Metadata = {
  title: "Uluwatu Sunset Hills | Premium Recovery",
  description: "Experience luxury holistic recovery in Uluwatu, Bali.",
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