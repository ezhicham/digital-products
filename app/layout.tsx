import type React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import { Moon, Sun } from "lucide-react";
import Footer from "@/components/footer/footer";

import "./globals.css";
import Link from "next/link";

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
        <nav className="navbar w-full h-[80px] shadow-md">
          <div className="nav-items w-full h-full  ">

            <div className="logo">
              <h1>
                <Link href="/">
                accs<span className="text-orange-500 font-bold">Bulk</span></Link>
              </h1>
            </div>


             <div className="nav-links">
             <ul  className="flex">
             {navItems.map((item,index) => {
              return(
                
                  <li key={index}><Link href={item.href}>{item.name}</Link></li>
              
              )
              
            }
                   )}
              </ul>
             </div>
            
            
            {/* <div className="theme-mode flex items-center gap-5 text-white">
              <Sun size={24} />
              
            </div> */}



          </div>
        </nav>

        {children}

        <Footer />
      </body>
    </html>
  );
}
