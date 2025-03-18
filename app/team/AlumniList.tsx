import Image from "next/image"
import Link from "next/link"
import { alumni, colorMap, TeamMember } from "@/content/team"
import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa6"

export default function AlumniList() {
  return (
    <div className="flex flex-col items-center mb-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-5xl">
        {alumni.map((member: TeamMember, index: number) => (
          <div key={index} className="flex flex-col items-center w-full">
            <Image src={member.image} alt={member.name} width={700} height={700} className="w-96 h-96 object-cover" />
            <div className="w-full p-4 h-44" style={{ backgroundColor: colorMap[member.title] }}>
              <h2 className="text-xl font-bold text-left text-white">{member.name.toUpperCase()}</h2>

              <hr className="w-full my-1" />
              <div className="flex justify-between w-full text-white text-sm">
                <p className="font-bold">{member.title.toUpperCase()}</p>
                <p>{member.focus}</p>
              </div>
              <div className="flex flex-col mt-4 space-y-2 w-full text-sm text-white">
                {member.email && (
                  <Link href={`mailto:${member.email}`} className="hover:underline flex flex-row items-center">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    {member.email}
                  </Link>
                )}
                {member.website && (
                  <Link
                    href={member.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex flex-row items-center"
                  >
                    <FaGlobe className="w-4 h-4 mr-2" />
                    {member.website.text}
                  </Link>
                )}
                {member.linkedin && (
                  <Link
                    href={member.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex flex-row items-center"
                  >
                    <FaLinkedin className="w-4 h-4 mr-2" />
                    {member.linkedin.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
