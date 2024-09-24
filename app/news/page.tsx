import Link from "next/link"
import Header from "./Header"
import { format, parse } from "date-fns"
import { publications } from "@/content/newsfeed"

export default function News() {
  const sortedPublications = publications.sort((a, b) => {
    const dateA = parse(a.date, "MM-dd-yyyy", new Date())
    const dateB = parse(b.date, "MM-dd-yyyy", new Date())
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-5xl font-bold text-primary-800 mt-16">NEWS & UPDATES</h2>
      </div>
      <div className="max-w-5xl mx-auto p-6 mb-32">
        <div className="relative md:border-l-4 border-gold-500 md:pl-8 space-y-12 mt-8">
          {sortedPublications.map((news, index) => (
            <div key={index} className="relative">
              <div className="invisible md:visible absolute -left-12 top-0 w-7 h-7 bg-primary-800 rounded-full border-4 border-white"></div>

              <div className="md:ml-8">
                <p className="text-md font-medium text-gray-600">
                  {format(parse(news.date, "MM-dd-yyyy", new Date()), "MMMM dd, yyyy")}
                </p>
                <h3 className="text-2xl font-bold text-primary-800 mt-2">{news.title}</h3>
                <p className="text-md text-black mt-2">{news.description}</p>
                {news.learnMore && (
                  <Link
                    href={news.learnMore}
                    className="text-blue-500 hover:underline font-medium mt-2 inline-block"
                    target="_blank"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
