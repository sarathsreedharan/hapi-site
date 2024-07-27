import Image from "next/image"
import Link from "next/link"
import { teamMembers, colorMap, TeamMember } from "@/content/team"
import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa6"

export default function TeamList() {
  return (
    <div className="flex flex-col items-center mb-48">
      <div className="flex flex-col max-w-3xl mt-20 mb-6">
        <h1 className="text-5xl text-primary-800 font-bold mb-4">MEET THE TEAM</h1>
        <p className="text-lg text-gray-800 mb-4">
          At the Human-Aware Planning & Interaction (HAPI) Lab, we are dedicated to advancing computer science through innovative
          research and by fostering a supportive comuunity of scholards. Our lab embraces diversity and encourages open-minded
          exploration across a variety of research areas.
        </p>
        <p className="text-lg text-gray-800 mb-8">
          Members of our lab come from a variety of academic backgrounds (ranging from journalism to psychology and industrial
          engineering) and from many different countries including the USA, Turkey, Singapore, Tunisia, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-5xl">
        {teamMembers.map((member: TeamMember, index: number) => (
          <div key={index} className="flex flex-col items-center w-96">
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
