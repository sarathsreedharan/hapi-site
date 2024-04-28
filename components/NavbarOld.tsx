"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

    const toggleMenu = (event: React.MouseEvent) => {
        event.stopPropagation() // Prevent the click from being handled by handleClickOutside
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        console.log("Menu is now:", isOpen ? "Open" : "Closed")
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <header className="sticky top-0 z-50 bg-white flex justify-between items-center w-full">
            <Link href="/" className="pb-4 pt-5 text-xl font-extrabold ml-12 sm:hidden">
                <img src="logo.png" alt="HAPI" className="h-12" />
            </Link>

            <nav className="hidden sm:flex text-left text-lg font-medium space-x-12 py-4 ml-12">
                <Link href="/">Home</Link>
                <Link href="/team">Team</Link>
                <Link href="/research">Research</Link>
                <Link href="/demos">Demos</Link>
                <Link href="/news">News</Link>
            </nav>

            <button ref={toggleButtonRef} onClick={toggleMenu} className="sm:hidden mr-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full right-0 mt-2 w-full sm:w-auto bg-white shadow-md font-semibold z-50 flex flex-col sm:hidden"
                >
                    <Link href="/team" className="ml-6 my-4" onClick={toggleMenu}>
                        Team
                    </Link>
                    <Link href="/research" className="ml-6 my-4" onClick={toggleMenu}>
                        Research
                    </Link>
                    <Link href="/demos" className="ml-6 my-4" onClick={toggleMenu}>
                        Demos
                    </Link>
                    <Link href="/news" className="ml-6 my-4" onClick={toggleMenu}>
                        News
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar
