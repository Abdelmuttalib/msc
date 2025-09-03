import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Moroccan Solar Cells | Solar PV Manufacturing in Morocco",
  description:
    "MSC builds Morocco’s renewable future with next-generation photovoltaic module production — from silicon to solar panels, powering clean energy growth.",
  keywords: [
    "Moroccan Solar Cells",
    "Solar energy Morocco",
    "Photovoltaic manufacturing Morocco",
    "Solar panels Morocco",
    "Renewable energy Morocco",
    "Clean energy Morocco",
    "PV modules Morocco",
    "Solar technology Africa",
    "Local solar production",
    "Energy independence Morocco",
  ],
  openGraph: {
    title: "Moroccan Solar Cells | Solar PV Manufacturing in Morocco",
    description:
      "MSC is building Morocco’s renewable future with next-generation photovoltaic module production — from silicon to solar panels.",
    url: "https://msc-blue.vercel.app/",
    siteName: "Moroccan Solar Cells",
    images: [
      {
        url: "https://msc-blue.vercel.app/og-msc.webp",
        width: 1200,
        height: 630,
        alt: "Moroccan Solar Cells - Renewable Energy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moroccan Solar Cells | Solar PV Manufacturing in Morocco",
    description:
      "Building Morocco’s renewable future with world-class solar technology.",
    images: ["https://msc-blue.vercel.app/og-msc.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
