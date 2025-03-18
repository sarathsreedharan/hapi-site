import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function Hero() {
  return (
    <>
      <section className="bg-primary-800 px-4 md:px-0 pt-32 pb-16 md:pt-16 md:pb-8">
        <div className="container mx-auto flex flex-col items-center px-4 md:flex-row max-w-7xl">
          <div className="md:w-1/2">
            <p className="mb-1 text-left font-extrabold text-lg text-flower-red">COLORADO STATE UNIVERSITY</p>
            <h1 className="mb-3 text-left text-5xl md:text-6xl font-bold text-white">Human-Aware Planning & Interaction Lab</h1>
            <p className="mb-6 text-left text-lg text-white">
              We develop AI agents that help empower people to achieve their goals more effectively. Our group explores human-AI
              collaboration, focusing on explainable AI, value alignment, AI safety, and effective teaming.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/news"
                className="flex items-center gap-4 rounded bg-flower-red px-6 py-3 font-extrabold text-lg text-white hover:opacity-80 transition duration-200"
              >
                {"SEE WHAT'S NEW"}
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4 w-1/2">
            <div className="relative aspect-square w-full">
              <Image
                src="/hero-1.png"
                alt="Hero Image 1"
                fill
                className="
                rounded-lg object-cover 
                transition-transform duration-200 
                origin-bottom-right scale-[0.80] 
                hover:scale-[0.83]
              "
              />
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src="/hero-2.png"
                alt="Hero Image 2"
                fill
                className="
                rounded-lg object-cover 
                transition-transform duration-200 
                origin-bottom-left scale-[0.90]
                hover:scale-[0.93]
              "
              />
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src="/hero-3.png"
                alt="Hero Image 3"
                fill
                className="
                rounded-lg object-cover 
                transition-transform duration-200 
                origin-top-right scale-[0.90]
                hover:scale-[0.93]
              "
              />
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src="/hero-4.png"
                alt="Hero Image 4"
                fill
                className="
                rounded-lg object-cover 
                transition-transform duration-200 
                origin-top-left scale-[0.80]
                hover:scale-[0.83]
              "
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-2 w-full bg-gold-500" />
    </>
  )
}
