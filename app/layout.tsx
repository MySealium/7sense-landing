import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "7-SENSE Marine — Field-Tested Tools for Marine Pros",
  description:
    "Your shop's operations partner. Fast parts identification, reliable job planning, and trusted ordering — built for marine professionals who fix boats for a living.",
  keywords: [
    "marine parts",
    "marine procurement",
    "parts identification",
    "PicSea",
    "7-SENSE",
    "boat parts ordering",
    "marine technician tools",
    "marine electronics",
  ],
  authors: [{ name: "7-SENSE Marine" }],
  openGraph: {
    title: "7-SENSE Marine — We Handle the Parts. You Fix the Boats.",
    description:
      "Field-tested tools for marine professionals. Snap a photo, identify parts, build your order. Backed by 29,000+ verified marine records.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
        style={{
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
          background: "#000C18",
          color: "#FFFFFF",
        }}
      >
        {children}
      </body>
    </html>
  );
}
