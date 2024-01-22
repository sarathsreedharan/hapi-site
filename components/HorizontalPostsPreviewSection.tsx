import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

const HorizontalPostsPreviewSection = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full h-1/2 overflow-auto p-4">
                <div className="grid grid-cols-4 grid-rows-1 h-full gap-4 mx-auto">
                    {allPosts.slice(4, 8).map(
                        (
                            post, // Take the second 4 posts
                        ) => (
                            <article
                                key={post._id}
                                className="relative p-4 text-black flex flex-col justify-start transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                            >
                                <Link href={post.slug}>
                                    <div
                                        className="absolute top-0 left-0 w-full h-[65%] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${post.thumbnail})`, opacity: 1.0 }}
                                    ></div>

                                    <div className="relative h-[35%] pt-64 z-10">
                                        <div className="h-full flex flex-col justify-between cursor-pointer">
                                            <h1 className="text-xl py-1 font-semibold">{post.title}</h1>
                                            {post.description && <p className="font-medium">{post.description}</p>}
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}

export default HorizontalPostsPreviewSection
