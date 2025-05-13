'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

const sections = [
  { label: "📄 About", href: "http://localhost:3000/#about" },
  { label: "🎓 Education", href: "http://localhost:3000/#education" },
  { label: "🧠 Skills", href: "http://localhost:3000/#skills" },
  { label: "💼 Experience", href: "http://localhost:3000/#experience" },
  { label: "🚀 Projects", href: "http://localhost:3000/#projects" },
  { label: "💬 Let's Talk", href: "http://localhost:3000/#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Move the window scroll listener into useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }

    // Cleanup on unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, []) // Empty dependency array ensures this runs only once on mount and unmount

  return (
    <header className={`fixed top-0 z-50 w-full bg-white border-b ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="group/nav flex items-center w-full justify-between">
          <div className="flex items-center">
            <a href="#hero" className="text:sm md:text-xl font-bold text-gray-900 transition-all duration-200 ease-in-out group-hover/nav:opacity-40 group-hover/nav:scale-90 hover:opacity-100 hover:scale-110 hover:font-bold hover:text-lg hover:md:text-2xl">Asif Shahariar</a>
          </div>

          <div className="hidden lg:flex gap-6 group">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-lg text-gray-700 border border-transparent hover:border-gray-400 hover:text-blue-600 font-medium transition-all duration-200 ease-in-out px-2 py-1 rounded-3xl transform group-hover/nav:opacity-40 group-hover/nav:scale-90 hover:opacity-100 hover:scale-110 hover:md:text-xl hover:font-bold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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
            <nav className="flex flex-col group gap-6">
              <div className="group flex gap-6 flex-col">
                {sections.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 border border-transparent hover:border-gray-400 hover:text-blue-600 hover:text-lg font-medium transition-all duration-200 ease-in-out px-2 py-1 rounded-xl transform group-hover:scale-95 hover:scale-110"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}