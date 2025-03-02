"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

interface NavbarProps {
  items?: NavItem[]
  children?: React.ReactNode
}

export function Navbar({ items, children }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  // Default navigation items if none are provided
  const defaultItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/aboutus",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  const navItems = items || defaultItems

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-orange-300" />
            <span className=""><strong className="text-orange-400">accs</strong>-bulk</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                item.disabled ? "cursor-not-allowed opacity-80" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* User Authentication Section - Can be customized */}
        <div className="hidden md:flex items-center gap-4">
          {children || (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">Register</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.disabled ? "cursor-not-allowed opacity-80" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-2 mt-4">
                {children || (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

