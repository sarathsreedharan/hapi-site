import MeetLab from "@/components/MeetLab"
import PageHero from "@/components/PageHero"
import ProjectsSection from "@/components/ProjectsSection"
import WorkedWith from "@/components/WorkedWith"
import ResearchAreasParent from "@/components/ResearchAreasParent"

export default function Home() {
    return (
        <>
            <PageHero title="Human Aware Planning and Interaction Lab" />
            <div className="w-full h-8 bg-[#c69b3d]"></div>
            <ResearchAreasParent />
            <MeetLab />
            <ProjectsSection />
            <WorkedWith />
        </>
    )
}
