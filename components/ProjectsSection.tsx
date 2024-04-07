import React from "react"

const ProjectsSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8">
            <div className="flex-1">
                <img src="/pages/home/navigation.png" alt="HAPI LAB TEAM" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 flex-col items-center justify-center space-y-4 p-4">
                <h2 className="text-6xl text-center font-extrabold text-[#004a36]">Projects</h2>
                <p className="text-left">
                    Our team has worked on a diversity of projects ranging from the development of artificially intelligent
                    systems that can work with people from all walks of life to accomplish their goals, to systems that capture
                    the knowledge states of human learners to aid with Bee Conservation Efforts. We have received grants from the
                    National Science Foundation (NSF) and collaborated with a number of different industry partners and
                    researchers from around the world.
                </p>
                <button className="px-4 py-2 bg-[#9d9168] text-white font-extrabold rounded hover:[#bca867] transition-colors">
                    LEARN MORE
                </button>
            </div>
        </section>
    )
}

export default ProjectsSection
