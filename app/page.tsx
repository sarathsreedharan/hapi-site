import PageHero from "@/components/PageHero"
import ResearchAreas from "@/components/ResearchAreas"

export default function Home() {
    return (
        <>
            <PageHero title="Human Aware Planning and Interaction Lab" />
            <div className="w-full h-8 bg-[#c69b3d]"></div>
            <ResearchAreas />
        </>
    )
}
