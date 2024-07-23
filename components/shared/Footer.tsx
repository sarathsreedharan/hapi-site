import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="bg-primary-800 w-full z-50">
      <div className="bg-gold-500 w-full h-1"></div>
      <div className="max-w-5xl mx-auto p-6 py-10 flex items-center justify-between">
        <div>
          <Image src="/csu-logo.svg" alt="CSU Logo" width={130} height={130} />
        </div>
        <div className="flex flex-col text-left text-white">
          <h2 className="text-xl font-bold mb-2">VISIT US</h2>
          <p>Colorado State University</p>
          <p>456 University Avenue</p>
          <p>Fort Collins, CO 80521</p>
        </div>
        <div className="flex flex-col text-left text-white">
          <h2 className="text-xl font-bold mb-2">FOLLOW US</h2>
          <Link href="#instagram" className="hover:underline">
            Instagram
          </Link>
          <Link href="#twitter" className="hover:underline">
            Twitter
          </Link>
          <Link href="#github" className="hover:underline">
            Github
          </Link>
        </div>
        <div className="flex flex-col text-left text-white">
          <h2 className="text-xl font-bold mb-2">JOIN US</h2>
          <Link href="/team" className="hover:underline">
            Our Team
          </Link>
          <Link href="/news" className="hover:underline">
            News
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
