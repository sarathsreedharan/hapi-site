export interface NewsUpdate {
  title: string
  description: string
  date: string // format: MM-DD-YYYY
  learnMore?: string
}

export const publications: NewsUpdate[] = [
  {
    title: "Advances in AI-Driven Mental Model Planning",
    description:
      "This article explores the recent developments in artificial intelligence for planning with complex mental models.",
    date: "09-22-2024",
    learnMore: "/posts/deploying-next-apps",
  },
  {
    title: "Optimizing Human-AI Interaction through Mental Model Simulations",
    description:
      "Researchers demonstrate how simulating mental models can improve human-AI interactions, leading to better collaboration. I love coding I love coding I love coding I love coding I love coding I love coding I love coding I love coding I love coding.",
    date: "09-23-2024",
  },
  {
    title: "Exploring Cognitive Load in AI-Assisted Decision Making",
    description:
      "A new approach to balancing cognitive load in AI-assisted decision making highlights potential improvements in user experience.",
    date: "09-23-2024",
  },
]
