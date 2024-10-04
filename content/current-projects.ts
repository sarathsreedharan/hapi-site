import { FaBrain, FaRobot, FaGear, FaCommentDots, FaListCheck, FaDiceD20 } from "react-icons/fa6"

/*
Right now theres no way to edit the project carousel on /research
You can find the current component code in app/research/ProjectPreview.tsx
*/

export const areasOfResearch = [
  { icon: FaDiceD20, title: "Artificial Intelligence" },
  { icon: FaBrain, title: "Neuro-symbolic AI" },
  { icon: FaRobot, title: "Robotics" },
  { icon: FaGear, title: "Reinforcement Learning" },
  { icon: FaCommentDots, title: "Explainable + Human-aware AI" },
  { icon: FaListCheck, title: "Automated Planning" },
]
