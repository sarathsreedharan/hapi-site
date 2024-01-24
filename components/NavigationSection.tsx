import React from "react"
import Link from "next/link"

const NavigationSection: React.FC = () => {
    const team_cover_url = "/pages/index/team.jpg"
    const research_cover_url = "/pages/index/navigation.png"

    return (
        <div className="h-96 p-4">
            <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full h-full">
                <Link
                    href="/team"
                    className="flex items-center justify-center opacity-90 transition-transform duration-300 ease-in-out hover:scale-[103%]"
                    style={{
                        backgroundImage: `url(${team_cover_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <p className="text-8xl text-white font-black">TEAM</p>
                </Link>

                <Link
                    href="/research"
                    className="flex items-center justify-center opacity-90 transition-transform duration-300 ease-in-out hover:scale-[103%]"
                    style={{
                        backgroundImage: `url(${research_cover_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <p className="text-8xl text-white font-black">RESEARCH</p>
                </Link>
            </div>
        </div>
    )
}

export default NavigationSection
