import Mission from "./Mission"
import TeamList from "./TeamList"

export default function About() {
  return (
    <div>
      <div className="bg-primary-800 w-full pt-36 pb-20">
        <Mission />
      </div>
      <TeamList />
    </div>
  )
}
