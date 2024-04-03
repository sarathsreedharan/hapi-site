import React from "react"
import Link from "next/link"

interface Props {
    title: string
    description: string
    image: string
}

const PageHero: React.FC<Props> = ({ title, description, image }) => {
    return (
        <div className="sm:h-screen h-96">
            <div className="flex w-full h-fullflex flex-col sm:flex-row w-full h-full sm:mt-0 mt-20">
                <div className="flex-1 flex items-center justify-center">
                    <div className="pb-8 pt-0 px-8">
                        {/* <img src="logo.png" alt="HAPI Lab Logo" className="mb-8 h-28" /> */}

                        {/* Apply responsive text size for smaller screens without changing the desktop size */}
                        {/* [108px] */}
                        <h2 className="text-5xl lg:text-[78px] leading-none font-extrabold text-[#39c9c9c]">{title}</h2>
                        {/* <p className="text-lg sm:text-xl md:text-2xl lg:text-xl dark:text-[#9c9c9c] text-[#505052]">{description}</p> */}

                        {/* <Link href="/your-link">
                            <button className="mt-5 text-blue-500 border-2 border-blue-500 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors duration-200">
                                Button Text
                            </button>
                        </Link> */}

                        {/* <Link href="https://compsci.colostate.edu/" target="_blank">
                            <img src="/pages/index/csu.png" alt="HAPI Lab Logo" className="mt-5 h-12" />
                        </Link> */}
                        <div className="flex mt-12">
                            <img src="logo.png" alt="HAPI Lab Logo" className="sm:h-24 h-16" />
                            <Link href="https://compsci.colostate.edu/" target="_blank">
                                <img src="/pages/index/csu.png" alt="HAPI Lab Logo" className="ml-5 sm:h-24 h-16" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    {/* Hide the image on smaller screens */}
                    <img src={image} alt="Turtlebot" className="hidden sm:block w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default PageHero
