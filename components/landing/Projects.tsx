import Image from "next/image"

export default function Projects() {
  return (
    <section className="p-16 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div className="flex-1 w-1/2 flex items-center justify-center">
          <div className="relative w-full h-96">
            <Image src="/landing/navigation.png" alt="HAPI LAB TEAM" fill className="object-contain" />
          </div>
        </div>
        <div className="flex-1 flex-col text-center space-y-6 p-4 w-1/2">
          <h2 className="text-6xl font-extrabold text-primary-800">LAB PROJECTS</h2>
          <div className="space-y-4">
            <p className="text-left">
              Our team has worked on a diversity of projects ranging from the development of artificially intelligent systems that
              can work with people from all walks of life to accomplish their goals, to systems that capture the knowledge states
              of human learners to aid with Bee Conservation Efforts.
            </p>
            <p className="text-left">
              We have received grants from the National Science Foundation (NSF) and collaborated with a number of different
              industry partners and researchers from around the world.
            </p>
          </div>
          <button className="px-4 py-2 bg-gold-500 text-white font-extrabold rounded">LEARN MORE</button>
        </div>
      </div>
    </section>
  )
}
