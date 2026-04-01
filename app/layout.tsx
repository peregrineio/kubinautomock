import type { Metadata } from "next";
import { Archivo_Black, Source_Serif_4, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import FooterRedesign from "@/components/layout/FooterRedesign";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kubin Automotive | Honest Auto Repair in Bryan, TX Since 1978",
  description:
    "Family-owned auto repair shop in Bryan, TX since 1978. Honest service, fair pricing, and expert care for the Brazos Valley. Serving Bryan, College Station, and Texas A&M families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${sourceSerif.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <FooterRedesign />
      </body>
    </html>
  );
}
