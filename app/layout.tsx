import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "Chart of Accounts | FinCorp Enterprise",
  description: "Enterprise Chart of Accounts Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("light", "h-full", "antialiased", inter.variable, "font-sans")}
    >
      <body className="min-h-full h-full overflow-hidden">{children}</body>
    </html>
  );
}