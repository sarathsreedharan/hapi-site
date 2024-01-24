import React from "react"
import PageHero from "@/components/PageHero"
import teamData from "@/team.config.json"
import Link from "next/link"

interface TeamMemberProps {
    name: string
    picture: string
    role: string
    link: string
}

const TeamMember: React.FC<{ member: TeamMemberProps }> = ({ member }) => {
    return (
        <div>
            <Link
                href={member.link}
                target="_blank"
                className="flex flex-col text-black hover:text-blue-500 items-center text-center m-4"
            >
                <img src={member.picture} alt={member.name} className="rounded-full w-32 h-32 object-cover mb-3" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                {/* <p className="text-md text-gray-600">{member.role}</p> */}
            </Link>
        </div>
    )
}

const Team = () => {
    // Filter team members by role
    const faculty = teamData.content.filter((member) => member.role === "faculty")
    const phds = teamData.content.filter((member) => member.role === "phd")
    const masters = teamData.content.filter((member) => member.role === "ms")
    const undergrads = teamData.content.filter((member) => member.role === "undergrad")

    return (
        <div>
            <PageHero
                title="Who We Are"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/pages/index/navigation.png"
            />
            <div className="container mx-auto px-4">
                {/* Render each group separately */}
                <RoleSection title="Faculty" members={faculty} />
                <RoleSection title="Ph.D Students" members={phds} />
                <RoleSection title="Masters Students" members={masters} />
                <RoleSection title="Undergraduate Students" members={undergrads} />
            </div>
        </div>
    )
}

const RoleSection: React.FC<{ title: string; members: TeamMemberProps[] }> = ({ title, members }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-6">{title}</h2>
            <div className="flex flex-wrap justify-center">
                {members.map((member) => (
                    <TeamMember key={member.name} member={member} />
                ))}
            </div>
        </div>
    )
}

export default Team
