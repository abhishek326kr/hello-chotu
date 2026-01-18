import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switch to Inter for Next 14 compatibility
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
