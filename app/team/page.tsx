import AlumniList from "./AlumniList"
import Mission from "./Mission"
import TeamList from "./TeamList"

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary-800 w-full pt-36 pb-20">
        <Mission />
      </div>
      <div className="flex flex-col max-w-3xl mt-20 mb-6 px-6 md:px-0">
        <h1 className="text-5xl text-primary-800 font-bold mb-4">MEET THE TEAM</h1>
        <p className="text-lg text-gray-800 mb-4">
          At the Human-Aware Planning & Interaction (HAPI) Lab, we are dedicated to advancing computer science through innovative
          research and by fostering a supportive comuunity of scholards. Our lab embraces diversity and encourages open-minded
          exploration across a variety of research areas.
        </p>
        <p className="text-lg text-gray-800 mb-8">
          Members of our lab come from a variety of academic backgrounds (ranging from journalism to psychology and industrial
          engineering) and from many different countries including the USA, Turkey, Singapore, Tunisia, and more.
        </p>
      </div>

      <div className="flex items-center max-w-3xl w-full mt-10 mb-4 px-6 md:px-0">
        <div className="border-t-2 border-primary-800 flex-grow mr-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-0 text-center">CURRENT MEMBERS</h1>
        <div className="border-t-2 border-primary-800 flex-grow ml-4" />
      </div>

      <TeamList />

      <div className="flex items-center max-w-3xl w-full mt-20 mb-4 px-6 md:px-0">
        <div className="border-t-2 border-primary-800 flex-grow mr-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-0 text-center">ALUMNI</h1>
        <div className="border-t-2 border-primary-800 flex-grow ml-4" />
      </div>

      <AlumniList />
    </div>
  )
}
