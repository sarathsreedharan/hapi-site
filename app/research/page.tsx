import React from "react"
import ResearchLinksSection from "@/components/ResearchLinksSection"
import PageHero from "@/components/PageHero"

const Research = () => {
    return (
        <div>
            <PageHero
                title="What We Do"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/pages/index/navigation.png"
            />
            <ResearchLinksSection />
        </div>
    )
}

export default Research
