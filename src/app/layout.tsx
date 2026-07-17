import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata, siteConfig } from "@/lib/metadata";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Sterling Local | Automation Systems for Service Businesses",
  }),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sterling Local | Automation Systems for Service Businesses",
    template: "%s | Sterling Local",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col bg-white text-charcoal"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
