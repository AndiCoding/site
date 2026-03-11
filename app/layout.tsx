import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your App",
  description: "Your description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <script dangerouslySetInnerHTML={{__html: `
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
`}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header className="absolute w-full z-50 min-h-16 flex justify-around" />
        {children}
      <Footer />
      </body>
    </html>
  );
}