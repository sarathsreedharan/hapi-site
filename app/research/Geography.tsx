import Link from "next/link"
import Image from "next/image"

export default function Geography() {
  return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col md:p-4 mt-24">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <Image src="/projects/team-presentation.png" alt="Map image" width={600} height={400} className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-4xl font-bold text-primary-800 mb-4">A CULTURE OF LEARNING</h2>
        <p className="text-gray-800 mb-6">
          Each year, our students travel globally to attend conferences and present their research. This gives them valuable,
          practical experience presenting research, receiving feedback and engaging in the research community as a whole.
        </p>
        <p className="text-gray-800 mb-8">
          There are also many other opportunities to participate in reading groups, lectures and projects in and around the lab.
        </p>
        {/* <div>
          <Link
            href="/project-details"
            className="bg-primary-800 hover:bg-primary-500 transition duration-200 text-white rounded px-6 py-2 text-center font-semibold"
          >
            LEARN MORE
          </Link>
        </div> */}
      </div>
    </div>
  )
}
