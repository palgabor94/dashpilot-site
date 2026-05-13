import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DashPilot — Turn your phone into a real-time car dashboard",
  description:
    "Connect to your car through your Comma device, and get a real-time dashboard right on your phone.",
  openGraph: {
    title: "DashPilot",
    description: "Turn your phone into a real-time car dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
