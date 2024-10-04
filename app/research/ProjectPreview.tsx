import Link from "next/link"

export default function ProjectPreview() {
  return (
    <div className="w-full bg-yellow-600">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-32 px-8">
        <div className="flex flex-col w-full md:w-1/2 mb-12 md:mb-16">
          <h2 className="text-4xl text-gray-700 font-bold mb-2">FEATURED WORK:</h2>
          <h2 className="text-4xl text-white font-bold mb-2">The Native Bee Watch</h2>
          <div className="bg-white h-0.5 w-[60%] mb-4" />
          <p className="text-lg text-white mb-8">
            The Native Bee Watch project seeks to apply human-AI interaction, explanation generation, and mental modeling
            techniques to the development of an intelligent tutoring system for community science training. The project is funded
            by the National Science Foundation (NSF), and is helping to aid bee pollinator conservation efforts across Colorado.
          </p>
          <div>
            <Link
              href="https://arapahoe.extension.colostate.edu/nbw/"
              className="bg-gray-800 hover:bg-gray-700 transition duration-200 text-white rounded px-8 py-1.5 font-semibold"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="w-1/2 hidden md:flex justify-end items-end">
          <img src="projects/native-bee-watch/bee.png" alt="Bee" />
        </div>
      </div>
    </div>
  )
}
