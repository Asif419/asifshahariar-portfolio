'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const sections = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Optional: scroll effect (for sticky shadow)
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setScrolled(window.scrollY > 20)
    }
  }

  return (
    <header className={`fixed top-0 z-50 w-full bg-white border-b ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <a href="#hero" className="text-xl font-bold text-gray-900">Asif Shahariar</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-black text-sm font-medium transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Mobile Navigation Menu */}
          <div className="absolute z-50 left-4 right-4 mt-2 bg-white rounded-md shadow-md p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {sections.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-black text-sm font-medium transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}