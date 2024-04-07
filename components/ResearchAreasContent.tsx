import React from "react"

const researchAreas = [
    {
        imageUrl: "/pages/home/1-Artificial-Intelligence-Icon.png",
        text: "Artificial Intelligence",
    },
    {
        imageUrl: "/pages/home/2-Neuro-Symbolic-AI-Icon.png",
        text: "Neuro-Symbolic AI",
    },
    {
        imageUrl: "/pages/home/3-Robotics-Icon.png",
        text: "Robotics",
    },
    {
        imageUrl: "/pages/home/4-Reinforcement-Learning-Icon.png",
        text: "Reinforcement Learning",
    },
    {
        imageUrl: "/pages/home/5-Explainable-HumanAwareAI-Icon.png",
        text: "Explainable + Human-Aware AI",
    },
    {
        imageUrl: "/pages/home/6-Automated-Planning-Icon.png",
        text: "Automated Planning",
    },
]

const ResearchAreasContent: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
            <h2 className="text-6xl font-extrabold text-[#004a36]">Research Areas</h2>
            <p className="text-center">
                We study and develop algorithms for use in artificial intelligence applications pertaining to automated planning,
                explainable AI, and more.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {researchAreas.map((area, index) => (
                    <div key={index} className="w-full h-40 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-2">
                        <img src={area.imageUrl} alt={area.text} className="w-24 h-24 mb-2 object-cover" />
                        <p>{area.text}</p>
                    </div>
                ))}
            </div>
            <button className="px-4 py-2 bg-[#9d9168] text-white font-extrabold rounded hover:[#bca867] transition-colors">
                LEARN MORE
            </button>
        </div>
    )
}

export default ResearchAreasContent
