import ProjectCarousel from "./ProjectCarousel"
import Geography from "./Geography"
import { projects } from "./projects"
import Demos from "./Demos"
import ProjectPreview from "./ProjectPreview"

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* <ProjectCarousel projects={projects} /> */}
      <ProjectPreview />
      <Geography />
      <Demos />
    </div>
  )
}
