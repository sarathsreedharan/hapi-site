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
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const allTags = Array.from(new Set(researchData.content.flatMap((item) => item.tags)))

    // Available tags are those not in selectedTags
    const availableTags = allTags.filter((tag) => !selectedTags.includes(tag))

    const handleTagSelect = (tag: string) => {
        setSelectedTags((prev) => [...prev, tag])
    }

    const handleTagDeselect = (tag: string) => {
        setSelectedTags((prev) => prev.filter((t) => t !== tag))
    }

    const filteredData =
        selectedTags.length > 0
            ? researchData.content.filter((item) => item.tags.some((tag) => selectedTags.includes(tag)))
            : researchData.content

    return (
        <div className="flex ml-8 justify-center pt-8">
            <div className="flex w-full min-h-screen">
                <div className="flex flex-col w-48 p-4 border-r">
                    <h3 className="font-bold text-lg mb-3">Filter Tags</h3>
                    <ul>
                        {availableTags.map((tag, index) => (
                            <li key={index} className="mb-2 cursor-pointer" onClick={() => handleTagSelect(tag)}>
                                <span
                                    className="inline-block rounded py-0.5 px-1 mr-1 text-xs font-medium hover:opacity-80 text-black"
                                    style={{ backgroundColor: tagColors[tag] ? tagColors[tag] : "#eaeaea" }}
                                >
                                    {tag}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-4" />
                    <h3 className="font-bold text-lg mb-3">Sorting By</h3>
                    <ul>
                        {selectedTags.map((tag, index) => (
                            <li key={index} className="mb-2 cursor-pointer" onClick={() => handleTagDeselect(tag)}>
                                <span
                                    className="inline-block rounded py-0.5 px-1 mr-1 text-xs hover:opacity-80 font-medium text-black"
                                    style={{ backgroundColor: tagColors[tag] ? tagColors[tag] : "#eaeaea" }}
                                >
                                    {tag}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-grow p-4 overflow-auto">
                    <h2 className="text-xl font-bold mb-4">Our Research</h2>
                    <ul>
                        {filteredData.map((item: ResearchItem, index: number) => (
                            <li key={index} className="mb-4">
                                <a
                                    href={item.url}
                                    className="text-blue-600 font-medium hover:text-blue-800 visited:text-purple-600"
                                >
                                    {item.title}
                                </a>
                                <div className="text-sm text-gray-700">
                                    <span>{item.authors}</span>
                                    {item.additional && <span> - {item.additional}</span>}
                                </div>

                                <div className="my-1">
                                    {item.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-block rounded py-0.5 px-1 mr-1 text-xs font-medium text-black"
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
