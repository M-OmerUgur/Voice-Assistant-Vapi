import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atmacaaa",
  description: "AI-powered atmaca voice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
