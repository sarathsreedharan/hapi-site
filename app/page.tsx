import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import HomeIntro from "@/components/HomeIntro"

export default function Home() {
  return (
    <>
      <HomeIntro
        title="Human-Aware Planning and Interaction Lab"
        description="loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="max-w-4xl mx-auto py-10 px-4 prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </>
  )
}
