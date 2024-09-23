import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <section className="p-6 md:p-16 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div className="hidden md:flex flex-1 w-1/2 flex items-center justify-center">
          <Image src="/landing/navigation.png" alt="HAPI LAB TEAM" width={500} height={500} className="rounded" />
        </div>
        <div className="flex-1 flex-col text-left space-y-6 p-4 w-full md:w-1/2">
          <h2 className="text-5xl font-extrabold text-primary-800">LAB PROJECTS</h2>
          <div className="space-y-4">
            <p>
              Our team has worked on a diversity of projects ranging from the development of artificially intelligent systems that
              can work with people from all walks of life to accomplish their goals, to systems that capture the knowledge states
              of human learners to aid with Bee Conservation Efforts.
            </p>
            <p>
              We have received grants from the National Science Foundation (NSF) and collaborated with a number of different
              industry partners and researchers from around the world.
            </p>
          </div>
          <div>
            <Link
              href="/research"
              className="px-4 py-2 bg-primary-800 hover:bg-primary-500 transition duration-200 text-white font-extrabold rounded"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
