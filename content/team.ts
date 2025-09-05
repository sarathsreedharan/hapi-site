// if someone doesnt have a website, linkedin, or email, leave it as an empty string
// order of the team members is the order they will appear on the website

export interface TeamMember {
  name: string
  title: "Ph.D." | "Assistant Professor" | "Undergraduate" | "Resident Robot" | "Ms"
  focus?: string
  image: string
  email?: string
  website?: { text: string; url: string }
  linkedin?: { text: string; url: string }
}

export const colorMap = {
  "Assistant Professor": "#1E4D2B", // Hex colors
  "Ph.D.": "#D9782D",
  Undergraduate: "#E56A54",
  "Resident Robot": "#008FB3",
  Ms: "#7E5475",
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
    name: "Kelsey Sikes",
    title: "Ph.D.",
    focus: "AI, Planning & Value Alignment",
    image: "/team/kelsey.png",
    email: "ksikes@colostate.edu",
    linkedin: { text: "Kelsey Sikes", url: "https://www.linkedin.com/in/kelsey-sikes/" },
  },
  {
    name: "Brittany Cates",
    title: "Ph.D.",
    focus: "Adversarial Learning",
    image: "/team/brittany.png",
    email: "brittany.cates@colostate.edu",
  },
  {
    name: "Septia Rani",
    title: "Ph.D.",
    focus: "Human-AI Interaction",
    image: "/team/septia.png",
    email: "septia.rani@colostate.edu",
  },
  {
    name: "Dennis Kim",
    title: "Ph.D.",
    focus: "Artificial Intelligence",
    image: "/team/dennis.jpg",
    email: "d.kim@colostate.edu",
  },
  {
    name: "Erfan Mirhaji",
    title: "Ms",
    focus: "XAI",
    image: "/team/erfan.jpg",
    email: "Erfan.Mirhaji@colostate.edu",
    linkedin: { text: "Erfan Mirhaji", url: "https://www.linkedin.com/in/erfan-mirhaji-242b82198/"},
  },
  {
    name: "Phil Hopkins",
    title: "Ms",
    focus: "",
    image: "/team/phil.jpg",
    email: "",
  },
  {
    name: "Trisha Ghali",
    title: "Ms",
    focus: "",
    image: "/team/trisha.jpg",
    email: "",
  },
  {
    name: "Shaky Jr.",
    title: "Resident Robot",
    focus: "",
    image: "/team/shaky-jr.png",
  },
]

export const alumni: TeamMember[] = [
  {
    name: "Turguy Caglar",
    title: "Ph.D.",
    focus: "AI & Planning",
    image: "/team/turguy.png",
    email: "turguy.caglar@colostate.edu",
  },
  {
    name: "Malek Merchergui",
    title: "Ms",
    focus: "AI, Planning & Value Alignment",
    image: "/team/malek.png",
    email: "malek.merchergui@colostate.edu",
  },
  {
    name: "Wyatt Hansen",
    title: "Undergraduate",
    focus: "",
    image: "/team/wyatt.jpg",
  },
]
