import React from "react"
import teamData from "@/team.config.json"
import Link from "next/link"
import PageHero from "@/components/PageHero"

interface TeamMemberProps {
    name: string
    picture: string
    role: string
    link: string
}

const TeamMember: React.FC<{ member: TeamMemberProps }> = ({ member }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
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
            {/* <PageHero
                title="Who We Are"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/pages/index/navigation.png"
            /> */}
            {/* <h1 className="text-xl font-bold text-black">Meet The Team</h1> */}
            <div className="container mx-auto px-4 my-16">
                <div className="grid grid-cols-4 gap-4">
                    {teamData.content.map((member) => (
                        <TeamMember key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
