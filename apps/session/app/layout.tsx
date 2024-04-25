import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "../lib/utils";

export const metadata: Metadata = {
  title: "BoardGameSesh",
  description: "Organise your next boardgame session with ease.",
  openGraph: {
    title: "BoardgameSesh",
    description: "Organise your next boardgame session with ease.",
    url: "https://boardgamesesh.com",
    siteName: "BoardgameSesh",
    images: [
      {
        url: "../public/logomark.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-AU",
    type: "website",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
