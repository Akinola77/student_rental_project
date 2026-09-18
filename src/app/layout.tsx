import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ChatWidget from "@/components/ChatWidget";
import { SITE_ORIGIN } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "CloudHight Consulting — AWS Advanced Consulting Partner",
    template: "%s — CloudHight Consulting",
  },
  description: "Transforming businesses through innovative AWS cloud solutions.",
  icons: { icon: "/photos/cloudhightlogo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-gradient-to-b from-[#ffffff] via-[#fafbfc] to-[#f8f9fa]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
