import Hero from "@/components/landing/Hero"
import Navbar from "@/components/shared/Navbar"
import Projects from "@/components/landing/Projects"
import Research from "@/components/landing/Research"
import Team from "@/components/landing/Team"
import WorkedWith from "@/components/landing/WorkedWith"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Research />
      <Team />
      <Projects />
      <WorkedWith />
    </div>
  )
}
