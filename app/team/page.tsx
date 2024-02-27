import React from "react"
import teamData from "@/team.config.json"
import Link from "next/link"
// import PageHero from "@/components/PageHero"; // Uncomment if needed

interface TeamMemberProps {
    name: string
    picture: string
    role: string
    link: string
}

const TeamMember: React.FC<{ member: TeamMemberProps }> = ({ member }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
            <Link href={member.link} target="_blank">
                <img className="w-full h-60 object-cover" src={member.picture} alt={member.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{member.name}</div>
                    <p className="text-gray-700 text-base">{member.role}</p>
                </div>
            </Link>
        </div>
    )
}

const Team = () => {
    return (
        <div>
            {/* Page header section */}
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-black mb-6">Our Team</h1>
                {/* <p className="text-xl mb-6">Our dedicated and talented team members that make up the HAPI Lab</p> */}
                <Link
                    href="/contact"
                    className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    Join the Team
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3.3}
                        stroke="currentColor"
                        className="w-5 h-5 ml-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>

            {/* Team grid */}
            <div className="container mx-auto px-4 mb-32">
                <div className="grid grid-cols-4 gap-4">
                    {teamData.content.map((member) => (
                        <TeamMember key={member.name} member={member} />
                    ))}
                </div>
            </div>

            {/* <div className="text-center my-32">
                <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded">
                    Join the Team
                </Link>
            </div> */}
        </div>
    )
}

export default Team
