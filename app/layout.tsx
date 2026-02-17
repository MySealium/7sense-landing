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
  title: "7-SENSE Marine | Sense. Navigate. Act.",
  description:
    "Marine intelligence systems that transform how vessels are maintained, operated, and provisioned. AI-powered procurement, predictive maintenance, and operational intelligence for marine professionals.",
  keywords: [
    "marine intelligence",
    "vessel management",
    "marine procurement",
    "PicSea",
    "7-SENSE",
    "marine AI",
    "boat maintenance",
    "marine electronics",
  ],
  authors: [{ name: "7-SENSE Marine" }],
  openGraph: {
    title: "7-SENSE Marine | Sense. Navigate. Act.",
    description:
      "Marine intelligence systems for professionals. AI-powered procurement, predictive maintenance, and operational intelligence.",
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
