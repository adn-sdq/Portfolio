import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adnan Memos — Portfolio",
  description: "Multi-Disciplinary Interactive Developer & Designer Designing Systems / Crafting Stories — based in RUH | HYD",
  icons: {
    icon: "/Logo-2.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased relative w-screen h-screen`}>
        {/* Background Animation */}
        <AnimatedBackground />
        <CustomCursor />

        {/* Main content */}
        <main className="relative px-4 md:px-6 py-3 md:py-4 z-10">
          {children}
        </main>

        {/* Analytics script */}
        <Analytics />
      </body>
    </html>
  );
}