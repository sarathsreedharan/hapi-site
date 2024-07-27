import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image"

export default function News() {
  return (
    <div className="max-w-4xl mx-auto p-6 my-28">
      <h1 className="text-5xl font-extrabold text-primary-800 text-center mb-16">RECENT NEWS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allPosts.slice(0, 4).map((post) => (
          <article key={post._id} className="overflow-hidden hover:scale-105 transition duration-200">
            <Link href={post.slug}>
              <Image src={post.thumbnail} alt={post.title} width={500} height={300} className="w-full h-64 object-cover" />
              <div className="mt-2">
                <h2 className="text-xl font-bold text-primary-800">{post.title}</h2>
                {post.description && <p className="mt-2 text-gray-700">{post.description}</p>}
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <Link
          href="/news"
          className="px-8 py-2 bg-primary-800 hover:bg-primary-500 transition duration-200 text-white font-extrabold rounded"
        >
          SEE MORE
        </Link>
      </div>
    </div>
  )
}
