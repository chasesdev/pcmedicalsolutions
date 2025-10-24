import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PC Medical Solutions - Advanced Recovery Solutions",
  description: "Professional cold therapy, compression therapy, electrotherapy, and orthopedic bracing solutions for faster recovery and pain relief. Trusted by physicians and patients nationwide.",
  keywords: ["medical equipment", "cold therapy", "compression therapy", "electrotherapy", "orthopedic bracing", "pain relief", "post-surgery recovery", "injury recovery"],
  authors: [{ name: "PC Medical Solutions" }],
  icons: {
    icon: "/pcmedicalsolutions.png",
  },
  openGraph: {
    title: "PC Medical Solutions - Advanced Recovery Solutions",
    description: "Professional medical solutions for faster recovery and pain relief",
    siteName: "PC Medical Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PC Medical Solutions - Advanced Recovery Solutions",
    description: "Professional medical solutions for faster recovery and pain relief",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
