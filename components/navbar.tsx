"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Github } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Muhammad Qadeer
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="/#education" className="hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="/#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link
            href="https://github.com/qadeerj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-4 flex flex-col space-y-4 border-t">
          <Link href="/#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/#experience" className="hover:text-primary transition-colors" onClick={toggleMenu}>
            Experience
          </Link>
          <Link href="/#education" className="hover:text-primary transition-colors" onClick={toggleMenu}>
            Education
          </Link>
          <Link href="/#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>
            Contact
          </Link>
          <Link
            href="https://github.com/qadeerj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </div>
          </Link>
        </div>
      )}
    </nav>
  )
}
