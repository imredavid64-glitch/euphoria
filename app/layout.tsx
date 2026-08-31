import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GrainBackground from "@/components/GrainBackground";
import { BRAND_INFO } from "@/data/brandData";

export const metadata: Metadata = {
  title: `${BRAND_INFO.name} — Underground Streetwear Hungary`,
  description: `${BRAND_INFO.tagline}. Handcrafted experimental clothing designed by ${BRAND_INFO.designers.map(d => d.handle).join(', ')}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-dark text-foreground antialiased selection:bg-brand-highlight selection:text-white">
        <CustomCursor />
        <GrainBackground />
        {children}
      </body>
    </html>
  );
}
