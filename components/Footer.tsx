import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center p-6">
            <div className="flex items-center justify-between">
                <div className="flex-1 text-lg text-left">
                    <Link href="mailto:example@example.com" className="font-medium hover:text-blue-600">
                        Contact
                    </Link>
                </div>
                <Link href="https://github.com/Kickblip/hapi-site" target="_blank">
                    <img src="/pages/index/github-mark.svg" alt="Github Repository" className="h-8" />
                </Link>
                <div className="flex-1 text-md font-medium text-right">
                    <p>© 2024 HAPI Lab</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
