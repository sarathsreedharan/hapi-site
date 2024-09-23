import Link from "next/link"
import Image from "next/image"

export default function Geography() {
  return (
    <div className="max-w-7xl mx-auto flex p-4 mt-24">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <Image src="/projects/map-no-markers.jpg" alt="Map image" width={600} height={400} className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold text-primary-800 mb-4">A CULTURE OF LEARNING</h2>
        <p className="text-gray-800 mb-6">
          Each year, our students travel globally to attend conferences and present their research - allowing them to recieve
          valuable feedback about their work, gain practical experience presenting it, and engage with the research community as a
          whole.
        </p>
        <p className="text-gray-800 mb-8">
          To continue growing their knowledge and skills, members of the lab are alos always encouraged to participate in various
          learning opportunities related to the lab and beyond it.
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
