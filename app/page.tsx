import Hero from "@/components/landing/Hero"
import News from "@/components/landing/News"
import Projects from "@/components/landing/Projects"
import Research from "@/components/landing/Research"
import Team from "@/components/landing/Team"
import WorkedWith from "@/components/landing/WorkedWith"

export default function Home() {
  return (
    <div>
      <Hero />
      <Research />
      <Team />
      <Projects />
      {/* <WorkedWith /> */}
      <News />
    </div>
  )
}
