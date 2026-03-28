import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andreas Valdal",
  description: "Your description",
};

const themeScript = `(function(){var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t)})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${instrumentSans.variable} antialiased flex flex-col min-h-screen`}>
        <div className="grain" />
        <Header className="absolute w-full z-50 min-h-16 flex justify-around" />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
