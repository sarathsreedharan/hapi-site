import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center sm:px-6 sm:pt-6 sm:pb-6 px-8 pt-6 pb-8">
            <div className="flex items-center justify-between">
                <div className="flex-1 sm:text-lg text-md text-left">
                    <Link href="/contact" className="font-medium hover:text-blue-600">
                        Contact
                    </Link>
                </div>
                <Link href="https://github.com/Kickblip/hapi-site" target="_blank">
                    <img src="/pages/index/github-mark.svg" alt="Github Repository" className="h-8" />
                </Link>
                <div className="flex-1 sm:text-md text-sm font-medium text-right">
                    <p>© 2024 HAPI Lab</p>
                    <Link href="https://github.com/kickblip" className="hover:underline hover:text-blue-500" target="_blank">
                        Built by Wyatt Hansen
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
