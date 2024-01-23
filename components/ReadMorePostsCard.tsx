import Link from "next/link"

const ReadMorePostsCard = () => {
    const cover_url = "/read-more-cover.png"

    return (
        <Link href="/research">
            <div className="relative p-4 text-black flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer h-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${cover_url})`, opacity: 0.3 }}
                ></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-10 h-10 mb-4 z-10"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                <p className="text-xl font-semibold z-10">Read More</p>
            </div>
        </Link>
    )
}

export default ReadMorePostsCard
