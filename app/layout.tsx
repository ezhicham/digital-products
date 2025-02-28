import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Poppins } from "next/font/google"
import "./globals.css"
// import Navbar from "@/components/Navbar"
const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Payeer Payment Integration",
  description: "Next.js application with Payeer payment integration",
    generator: 'v0.dev'
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        {/* <Navbar/>    */}
        <nav className="navbar w-full h-[80px]  shadow-md">
        <div className=" w-full h-full p-5 flex items-center justify-between">
          <div className="logo">
            <h1>accs<span className="text-orange-500 font-bold ">Bulk</span></h1>
          </div>
          <ul className="nav-items flex items-center gap-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
        
             {children}

      </body>
    </html>
  )
}



import './globals.css'