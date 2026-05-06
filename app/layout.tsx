import type { Metadata } from "next";
import { DynaPuff, Supermercado_One, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/landing-page/navbar/navbar";

import { ClerkProvider } from "@clerk/nextjs";

const dynaPuff = DynaPuff({
  variable: "--font-next-dynapuff",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const supermercadoOne = Supermercado_One({
  variable: "--font-next-supermercado",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-next-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digi Panch",
  description: "Modern Village Administration System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${dynaPuff.variable} ${supermercadoOne.variable} ${inter.variable} h-full antialiased`}
      >
        <body
          className={`min-h-full flex flex-col ${dynaPuff.className}`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}