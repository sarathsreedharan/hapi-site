import React from "react"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

const News = () => {
    return (
        <div>
            <PageHero
                title="What We've Been Doing"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/pages/index/navigation.png"
            />
            <div className="w-full h-screen overflow-auto p-4">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-rows-2 h-full gap-4 mx-auto">
                    {allPosts.map((post) => (
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
                                        <h1 className="text-lg py-1 font-semibold">{post.title}</h1>
                                        {post.description && <p className="text-sm font-medium opacity-60">{post.description}</p>}
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

export default News
