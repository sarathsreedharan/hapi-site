export interface NewsUpdate {
  title: string
  description: string
  date: string // format: MM-DD-YYYY
  learnMore?: string
}

/* 
News updates for the newsfeed sections

If you want to add an on-site article to a news update, add a learnMore field with the link to the article
an example article/link is:
https://hapi-lab.org/posts/example-post
(you can navigate to this URL to see it in action)

Creating an article like the one above is easy.
1. navigate to content/posts/ in this project directory
2. create a new markdown file and be sure to include the proper header format (use the example as a template)
3. write your content
4. add the link for your article to the learnMore field of your news update

ADDITIONAL NOTE:
YOU MUST FOLLOW the date format of MM-DD-YYYY for JSON entries below
23/9/24 will NOT work

*/

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
