import React from "react"
import ResearchAreasContent from "./ResearchAreasContent"

const ResearchAreasParent: React.FC = () => {
    return (
        <section className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-4 py-8 md:px-8">
            <div className="flex-1 min-w-0">
                <img src="/pages/home/HAPI-ROBOT.png" alt="Descriptive Alt Text" className="max-w-full h-auto" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="p-4">
                    <ResearchAreasContent />
                </div>
            </div>
        </section>
    )
}

export default ResearchAreasParent
