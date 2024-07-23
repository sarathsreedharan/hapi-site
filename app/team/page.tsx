import Mission from "@/components/team/Mission"
import TeamList from "@/components/team/TeamList"

export default function About() {
  return (
    <div>
      <div className="bg-primary-800 w-full pt-32 pb-16">
        <Mission />
      </div>
      <TeamList />
    </div>
  )
}
