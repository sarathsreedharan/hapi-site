export interface NewsUpdate {
  title: string
  description: string
  date: string // format: MM-DD-YYYY
  learnMore: string
}

export const publications: NewsUpdate[] = [
  {
    title: "Planning with Mental Models Balancing Explanations and Explicability",
    description: "In this paper, we present a novel approach to planning with mental models",
    date: "09-22-2024",
    learnMore: "http://sarathsreedharan.com/files/papers/journals/_AIJ__Balancing__Submission_Copy_.pdf",
  },
]
