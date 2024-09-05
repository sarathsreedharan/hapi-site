import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="fixed w-full z-50">
      <nav className="flex justify-center items-center p-4 bg-primary-800 h-16">
        <div className="flex items-center relative z-10">
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

        <div className="absolute bottom-0 transform translate-y-1/2 z-50">
          <Link href="/">
            <Image src="/logo.png" alt="HAPI Logo" width={130} height={130} />
          </Link>
        </div>
      </nav>
      <div className="bg-gold-500 w-full h-1"></div>
    </div>
  )
}
