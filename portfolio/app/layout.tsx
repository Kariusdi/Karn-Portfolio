import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNavBar from "./_components/AppNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karn's Portfolio",
  description: "This website is just a personal used for Karn's Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} antialiased`}>
        <AppNavBar />
        {children}
      </body>
    </html>
  );
}
