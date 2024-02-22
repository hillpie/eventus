import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-poppins', });

export const metadata: Metadata = {
  title: "EventUs | Home",
  description: "Connect, engage, and elevate every event with Conventus. Let the magic unfold.",
  icons: {
    icon: '/assets/images/logo.png'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
