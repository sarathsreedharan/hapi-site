import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-4 z-50">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 ml-4">
          <Link href="/" className="text-white hover:text-gray-300 transition duration-200 font-bold">
            ABOUT
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition duration-200 font-bold">
            TEAM
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition duration-200 font-bold">
            RESEARCH
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition duration-200 font-bold">
            NEWS
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-300 transition duration-200 font-bold">
            CONTACT
          </Link>
        </div>
        <div className="flex space-x-6 mr-4">
          <Image src="/landing/1-insta-icon.png" alt="Instagram" className="cursor-pointer" width={25} height={25} />
          <Image src="/landing/2-twitter-icon.png" alt="Twitter" className="cursor-pointer" width={25} height={25} />
          <Image src="/landing/3-youtube-icon.png" alt="YouTube" className="cursor-pointer" width={25} height={25} />
        </div>
      </div>
    </nav>
  )
}
