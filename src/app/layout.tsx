import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YBU Enterprise | Digital Transformation for Heavy Industries",
  description:
    "End-to-End Compliance, Digital Ecosystem, & B2B Media for Oil & Gas, Mining, Shipping, and Construction industries in Indonesia. 100% Ready-to-Deploy ERP Solutions.",
  keywords: [
    "Digital Transformation",
    "Heavy Industry",
    "ERP",
    "HSE",
    "CSMS",
    "ESG",
    "Compliance",
    "Indonesia",
  ],
  openGraph: {
    title: "YBU Enterprise | Digital Transformation for Heavy Industries",
    description:
      "End-to-End Compliance, Digital Ecosystem, & B2B Media. 100% Ready-to-Deploy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
