// if someone doesnt have a website, linkedin, or email, leave it as an empty string
// order of the team members is the order they will appear on the website

export interface TeamMember {
  name: string
  title: "Ph.D. Student" | "Assistant Professor" | "Undergraduate Student" | "Resident Robot" | "Masters Student"
  focus?: string
  image: string
  email?: string
  website?: { text: string; url: string }
  linkedin?: { text: string; url: string }
}

export const colorMap = {
  "Assistant Professor": "#1E4D2B",
  "Ph.D. Student": "#D9782D",
  "Undergraduate Student": "#E56A54",
  "Resident Robot": "#008FB3",
  "Masters Student": "#7E5475",
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarath Sreedharan",
    title: "Assistant Professor",
    focus: "",
    image: "/team/sarath.png",
    email: "sarath.sreedharan@colostate.edu",
    website: { text: "sarathsreedharan.com", url: "http://sarathsreedharan.com/" },
  },
  {
    name: "Turguy Caglar",
    title: "Ph.D. Student",
    focus: "AI & Planning",
    image: "/team/turguy.png",
    email: "turguy.caglar@colostate.edu",
  },
  {
    name: "Kelsey Sikes",
    title: "Ph.D. Student",
    focus: "AI, Planning & Value Alignment",
    image: "/team/kelsey.png",
    email: "ksikes@colostate.edu",
    linkedin: { text: "Kelsey Sikes", url: "https://www.linkedin.com/in/kelsey-sikes/" },
  },
  {
    name: "Malek Mechergui",
    title: "Ph.D. Student",
    focus: "AI, Planning & Value Alignment",
    image: "/team/malek.png",
    email: "malek.merchergui@colostate.edu",
  },
  {
    name: "Brittany Cates",
    title: "Ph.D. Student",
    focus: "Adversarial Learning",
    image: "/team/brittany.png",
    email: "brittany.cates@colostate.edu",
  },
  {
    name: "Septia Rani",
    title: "Ph.D. Student",
    focus: "Reinforcement Learning",
    image: "/team/default.jpg",
    email: "septia.rani@colostate.edu",
  },
  {
    name: "Shaky Jr.",
    title: "Resident Robot",
    focus: "",
    image: "/team/shaky-jr.png",
  },
]
