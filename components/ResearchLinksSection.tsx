"use client"

import React, { useState } from "react"
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
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    const handleTagSelect = (tag: string) => {
        setSelectedTag(tag)
    }

    const filteredData = selectedTag
        ? researchData.content.filter((item) => item.tags.includes(selectedTag))
        : researchData.content

    const allTags = Array.from(new Set(researchData.content.flatMap((item) => item.tags)))

    return (
        <div className="flex ml-48 justify-center pt-8">
            <div className="flex w-full min-h-screen">
                <div className="flex flex-col w-48 p-4 border-r">
                    <h3 className="font-bold text-lg mb-3">Filter by Tag</h3>
                    <ul>
                        {allTags.map((tag, index) => (
                            <li key={index} className="mb-2 cursor-pointer" onClick={() => handleTagSelect(tag)}>
                                <span className="text-blue-600 hover:text-blue-800">{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-grow p-4 overflow-auto">
                    <h2 className="text-xl font-bold mb-4">Our Research</h2>
                    <ul>
                        {filteredData.map((item: ResearchItem, index: number) => (
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
            </div>
        </div>
    )
}

export default ResearchLinksSection
