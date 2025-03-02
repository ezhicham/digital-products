import type React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import { Moon, Sun } from "lucide-react";
import Footer from "@/components/footer/footer";

import "./globals.css";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Payeer Payment Integration",
  description: "Next.js application with Payeer payment integration",
  generator: "v0.dev",
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar/> */}
        

        <Navbar/>

        {children}

        <Footer />
      </body>
    </html>
  );
}
