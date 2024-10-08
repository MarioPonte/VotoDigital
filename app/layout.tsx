import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VotoDigital",
  description: "Sistema de Votação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerif.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
