import { FaBrain, FaRobot, FaGear, FaCommentDots, FaListCheck, FaDiceD20 } from "react-icons/fa6"

const areas = [
  { icon: FaDiceD20, title: "Artificial Intelligence" },
  { icon: FaBrain, title: "Neuro-symbolic AI" },
  { icon: FaRobot, title: "Robotics" },
  { icon: FaGear, title: "Reinforcement Learning" },
  { icon: FaCommentDots, title: "Explainable + Human-aware AI" },
  { icon: FaListCheck, title: "Automated Planning" },
]

export default function Research() {
  return (
    <section className="w-full">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 max-w-7xl mx-auto">
        <div className="flex-1">
          <img src="/landing/HAPI-ROBOT.png" alt="Descriptive Alt Text" className="max-w-full h-auto" />
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col text-center space-y-2">
              <h2 className="text-5xl text-primary-800 font-bold mb-2">RESEARCH AREAS</h2>
              <h3 className="text-lg text-gray-700 mb-4">
                We study and develop algorithmns for use in artifical intelligence applications pertaining to automated planning,
                explainable AI, and more
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {areas.map((square, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 rounded">
                  <square.icon className="w-14 h-14 text-primary-800" />
                  <h4 className="mt-2 text-gray-800 font-semibold">{square.title}</h4>
                </div>
              ))}
            </div>
            <button className="px-4 py-2 bg-primary-800 text-white font-extrabold rounded">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  )
}
