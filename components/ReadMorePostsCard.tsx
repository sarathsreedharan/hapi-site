import Link from "next/link"

const ReadMorePostsCard = () => {
    const cover_url = "/pages/index/read-more-cover.png"
    const read_more_url = "/pages/index/read-more.svg"

    return (
        <Link href="/blog">
            <div
                className="relative w-full h-full text-white flex transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer overflow-hidden"
                style={{
                    backgroundImage: `url(${cover_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 1,
                }}
            >
                <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center">
                    <img src={read_more_url} alt="More" className="h-full w-auto" />
                </div>
            </div>
        </Link>
    )
}

export default ReadMorePostsCard
