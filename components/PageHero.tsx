import React from "react"
import Link from "next/link"

interface Props {
    title: string
    description: string
    image: string
}

const PageHero: React.FC<Props> = ({ title, description, image }) => {
    const imageSrc = "/pages/index/navigation.png"
    const logoSrc = "/pages/index/hapi-logo.png"

    return (
        <div className="h-screen">
            <div className="flex w-full h-full">
                <div className="flex-1 flex items-center justify-center">
                    <div className="p-8">
                        {/* <img src={logoSrc} alt="HAPI Lab Logo" className="mb-8 h-32" /> */}

                        <h2 className="text-5xl font-bold dark:text-[#d4d4d4] text-[#39c9c9c]">{title}</h2>
                        <p className="mt-4 text-xl dark:text-[#9c9c9c] text-[#505052]">{description}</p>

                        {/* <Link href="/your-link">
                            <button className="mt-5 text-blue-500 border-2 border-blue-500 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors duration-200">
                                Button Text
                            </button>
                        </Link> */}

                        <Link href="https://compsci.colostate.edu/" target="_blank">
                            <img src="/pages/index/csu.png" alt="HAPI Lab Logo" className="mt-5 h-12" />
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={image} alt="Turtlebot" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default PageHero
