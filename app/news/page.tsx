import { allPosts } from "@/.contentlayer/generated"
import Navbar from "@/components/shared/Navbar"
import Link from "next/link"
import Image from "next/image"

export default function News() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
          {allPosts.map((post) => (
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
      </div>
    </div>
  )
}
