import React from "react"

interface PageHeroProps {
    title: string
}

const PageHero: React.FC<PageHeroProps> = ({ title }) => {
    return (
        <section
            className="relative flex items-center justify-between bg-cover bg-center h-[75vh]"
            style={{ backgroundImage: "url('/pages/home/Green-Header-Background.png')" }}
        >
            <div className="p-8 md:p-12 lg:p-16 xl:p-20 w-[50%]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10">{title}</h1>
            </div>
            <div className="absolute right-0 top-0 h-full">
                <img src="/pages/home/Ram-Header.jpg" alt="Decorative" className="h-full object-cover" />
            </div>
        </section>
    )
}

export default PageHero
