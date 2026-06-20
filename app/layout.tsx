import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Tektur } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rollkeeper",
  description: "All-in-one RPG dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${tektur.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
