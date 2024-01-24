import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"
import ReadMorePostsCard from "@/components/ReadMorePostsCard"
import ImageCarousel from "@/components/ImageCarousel"

const PostsPreviewSection = () => {
    const carouselImages = [
        "/pages/index/locobot.png",
        "/pages/index/rviz.png",
        "/pages/index/pickplace.jpg",
        "/pages/index/team.jpg",
    ]

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* <div className="flex-1">
                <img src="/locobot.png" alt="Turtlebot" className="w-full h-full object-cover" />
            </div> */}

            <div className="flex-1">
                <ImageCarousel images={carouselImages} />
            </div>

            <div className="w-full md:w-1/2 h-full overflow-auto p-4">
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-4 max-w-4xl mx-auto">
                    {allPosts.slice(0, 3).map(
                        (
                            post, // Take the first 4 posts
                        ) => (
                            <article
                                key={post._id}
                                className="relative p-4 text-black flex flex-col justify-start opacity-90 hover:opacity-100 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                            >
                                <Link href={post.slug}>
                                    <div
                                        className="absolute top-0 left-0 w-full h-[65%] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${post.thumbnail})`, opacity: 1.0 }}
                                    ></div>

                                    <div className="relative h-[35%] pt-64 z-10">
                                        <div className="h-full flex opacity-100 flex-col justify-between cursor-pointer">
                                            <h1 className="text-lg py-1 font-semibold">{post.title}</h1>
                                            {post.description && (
                                                <p className="text-sm font-medium opacity-70">{post.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ),
                    )}
                    <ReadMorePostsCard />
                </div>
            </div>
        </div>
    )
}

export default PostsPreviewSection
