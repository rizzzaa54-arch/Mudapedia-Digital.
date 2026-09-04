import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TranslationProvider } from "./TranslationContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mudapedia Digital",
  description: "Perusahaan Digital Agency, Web3, Blockchain, dan Kripto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#030014]">
        {/* Membungkus seluruh aplikasi dengan Translation Provider */}
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}