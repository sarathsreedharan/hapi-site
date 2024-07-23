import ProjectCarousel from "./ProjectCarousel"
import Geography from "./Geography"
import { projects } from "@/content/projects"
import Demos from "./Demos"

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ProjectCarousel projects={projects} />
      <Geography />
      <Demos />
    </div>
  )
}
