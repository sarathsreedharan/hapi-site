"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])

  return (
    <div className="fixed w-full z-50">
      <nav className="flex justify-center items-center p-4 bg-primary-800 h-16">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center relative z-10">
          <div className="flex space-x-6 items-center ml-4 mr-44">
            <Link href="/team" className="text-white hover:text-gray-300 transition duration-200 font-bold">
              TEAM
            </Link>
            <Link href="/research" className="text-white hover:text-gray-300 transition duration-200 font-bold">
              RESEARCH
            </Link>
            <Link href="/publications" className="text-white hover:text-gray-300 transition duration-200 font-bold">
              PUBLICATIONS
            </Link>
          </div>
          <div className="flex space-x-6 items-center">
            <Link href="/collaborators" className="text-white hover:text-gray-300 transition duration-200 font-bold">
              COLLABORATORS
            </Link>
            <Link href="/news" className="text-white hover:text-gray-300 transition duration-200 font-bold">
              NEWS
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition duration-200 font-bold">
              CONTACT
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex w-full md:hidden justify-between items-center">
          {/* Mobile Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="HAPI Logo" width={50} height={50} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="absolute top-16 left-0 w-full bg-primary-800 z-50 md:hidden text-white">
            <div className="py-4">
              <Link href="/team" className="block px-6 py-3 hover:bg-primary-500 transition duration-200 text-lg font-bold">
                TEAM
              </Link>
              <Link href="/research" className="block px-6 py-3 hover:bg-primary-500 transition duration-200 text-lg font-bold">
                RESEARCH
              </Link>
              <Link
                href="/publications"
                className="block px-6 py-3 hover:bg-primary-500 transition duration-200 text-lg font-bold"
              >
                PUBLICATIONS
              </Link>
              <Link
                href="/collaborators"
                className="block px-6 py-3 hover:bg-primary-500 transition duration-200 text-lg font-bold"
              >
                COLLABORATORS
              </Link>
              <Link href="/news" className="block px-6 py-3 hover:bg-primary-500 transition duration-200 text-lg font-bold">
                NEWS
              </Link>
              <Link href="/contact" className="block px-6 py-3 hover:bg-primary-500 transition duration-200 text-lg font-bold">
                CONTACT
              </Link>
            </div>
            <div className="bg-gold-500 w-full h-1"></div>
          </div>
        )}

        {/* Desktop Logo */}
        <div className="absolute bottom-0 transform translate-y-1/2 z-50 hidden md:block">
          <Link href="/">
            <Image src="/logo.png" alt="HAPI Logo" width={130} height={130} />
          </Link>
        </div>
      </nav>
      <div className="bg-gold-500 w-full h-1"></div>
    </div>
  )
}
