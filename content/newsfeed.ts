export interface NewsUpdate {
  title: string
  description: string
  date: string // format: MM-DD-YYYY
  learnMore?: string
}

export const publications: NewsUpdate[] = [
  {
    title: "Malek Mechergui has just completed her Master's Defense.",
    description: "",
    date: "10-01-2024",
  },
  {
    title: "NeurIPS-24 Acceptance",
    description:
      'Malek\'s paper "Expectation Alignment: Handling Reward Misspecification in the Presence of Expectation Mismatch" just got accepted to NeurIPS-24.',
    date: "09-25-2024",
  },
  {
    title: "HAXP-24 Workshop at ICAPS",
    description: "Sarath gave a talk at HAXP-24 workshop at ICAPS on the topic of Human-aware AI. You can see the talk below.",
    date: "06-12-2024",
    learnMore: "https://www.youtube.com/watch?v=tgBex83dA60",
  },
]
