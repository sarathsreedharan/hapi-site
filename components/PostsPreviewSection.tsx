import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

const PostsPreviewSection = () => {
    const imageSrc = "/rviz.png";

  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img src={imageSrc} alt="Turtlebot" className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 overflow-auto p-4">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          {allPosts.map((post) => (
            <article key={post._id}>
              <Link href={post.slug}>
                <h2>{post.title}</h2>
              </Link>
              {post.description && <p>{post.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPreviewSection;
