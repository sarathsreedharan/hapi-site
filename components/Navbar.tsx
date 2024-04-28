import React from "react"
import Image from "next/image"

const Navbar: React.FC = () => {
    return (
        <nav className="relative w-full flex justify-between items-center p-4 bg-transparent z-10">
            <div className="flex space-x-4">
                <a href="/about" className="text-white hover:text-gray-300">
                    ABOUT
                </a>
                <a href="/team" className="text-white hover:text-gray-300">
                    TEAM
                </a>
                <a href="/projects" className="text-white hover:text-gray-300">
                    PROJECTS
                </a>
                <a href="/news" className="text-white hover:text-gray-300">
                    NEWS
                </a>
                <a href="/contact" className="text-white hover:text-gray-300">
                    CONTACT
                </a>
            </div>
            <div className="flex space-x-4">
                {/* Image links */}
                <a href="#instragram">
                    <Image src="/pages/home/instagram.png" alt="Instagram" width={30} height={30} />
                </a>
                <a href="#twitter">
                    <Image src="/pages/home/twitter.png" alt="Twitter" width={30} height={30} />
                </a>
                <a href="#youtube">
                    <Image src="/pages/home/youtube.png" alt="Youtube" width={30} height={30} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
