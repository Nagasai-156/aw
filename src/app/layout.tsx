import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ArthaChain Network - Next-Generation Layer 1 Blockchain",
  description: "Build, scale, and innovate with ArthaChain - a next-generation Layer 1 blockchain network for developers and innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <PreFooter />
        <Footer />
      </body>
    </html>
  );
}
