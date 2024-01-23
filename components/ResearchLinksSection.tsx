import React from "react"
import researchData from "@/research.config.json"
import { tagColors } from "@/tag-colors"

export interface ResearchItem {
    title: string
    url: string
    tags: string[]
    authors: string
    additional: string
}

const ResearchLinksSection: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Our Research</h2>
            <ul className="list-none">
                {researchData.content.map((item: ResearchItem, index: number) => (
                    <li key={index} className="mb-4">
                        <a href={item.url} className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                            {item.title}
                        </a>
                        <div className="text-sm text-gray-700">
                            <span>Authors: {item.authors}</span>
                            <span> - {item.additional}</span>
                        </div>
                        <div className="mt-2">
                            {item.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block rounded py-0.5 px-1 m-1 text-xs font-medium text-black"
                                    style={{ backgroundColor: tagColors[tag] ? tagColors[tag] : "#eaeaea" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ResearchLinksSection
