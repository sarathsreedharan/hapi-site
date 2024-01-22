import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

const PostsPreviewSection = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex-1">
                <img src="/locobot.png" alt="Turtlebot" className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 h-full overflow-auto p-4">
                <div className="grid grid-cols-2 grid-rows-3 h-full gap-4 max-w-4xl mx-auto">
                    {allPosts.map((post) => (
                        <article
                            key={post._id}
                            className="relative p-4 text-white flex flex-col justify-end transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            <Link href={post.slug}>
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${post.thumbnail})`, opacity: 1.0 }}
                                ></div>

                                <div className="relative -m-4 bg-white z-10">
                                    <div className="h-full flex text-black flex-col justify-between cursor-pointer">
                                        <h1 className="text-xl font-semibold">{post.title}</h1>
                                        {post.description && <p className="font-medium">{post.description}</p>}
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostsPreviewSection
