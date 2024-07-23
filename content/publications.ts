// IMPORTANT: if introducing a new tag, add it to the list of possible tags and tag type exactly as it appears in the publication
export type Tag = "Human-AI Interaction" | "XAI" | "Planning and Learning" | "Model-Lite Planning"

export interface Publication {
  title: string
  url: string
  tags: Tag[]
  authors: string
  year: number
  additional: string
}

export const publications: Publication[] = [
  {
    title: "Exploring Human-AI Interaction",
    url: "http://example.com/research/human-ai",
    tags: ["Human-AI Interaction", "XAI"],
    authors: "Dr. Jane Smith, John Doe",
    year: 2023,
    additional: "Published in AI Journal 2023",
  },
  {
    title: "Advances in Explainable AI",
    url: "http://example.com/research/xai-advances",
    tags: ["XAI"],
    authors: "Alice Johnson, Bob Lee",
    year: 2022,
    additional: "",
  },
  {
    title: "Planning and Learning in AI Systems",
    url: "http://example.com/research/planning-learning",
    tags: ["Planning and Learning", "Model-Lite Planning"],
    authors: "Dr. Emily White, Mike Brown",
    year: 2021,
    additional: "Workshop Paper, 2024",
  },
  {
    title: "Model-Lite Planning for Robotics",
    url: "http://example.com/research/model-lite-robotics",
    tags: ["Model-Lite Planning"],
    authors: "Sarah Connor, Kyle Reese",
    year: 2023,
    additional: "Robotics Conference 2023",
  },
  {
    title: "Integrating XAI in Everyday Life",
    url: "http://example.com/research/xai-life",
    tags: ["Human-AI Interaction", "XAI", "Planning and Learning"],
    authors: "Dr. Alex Johnson, Dr. Rachel Green",
    year: 2022,
    additional: "",
  },
  {
    title: "A Comparative Study on Planning Algorithms",
    url: "http://example.com/research/planning-algorithms",
    tags: ["Planning and Learning"],
    authors: "Monica Geller, Chandler Bing",
    year: 2021,
    additional: "International Conference on AI, 2022",
  },
  {
    title: "Explainable AI in Healthcare",
    url: "http://example.com/research/xai-healthcare",
    tags: ["XAI", "Human-AI Interaction"],
    authors: "Dr. Lisa Cuddy, Dr. Gregory House",
    year: 2024,
    additional: "",
  },
  {
    title: "Lightweight AI Models for Mobile",
    url: "http://example.com/research/ai-mobile",
    tags: ["Model-Lite Planning"],
    authors: "Tony Stark, Bruce Banner",
    year: 2022,
    additional: "",
  },
]
