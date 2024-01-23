import Link from "next/link"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white">
            <nav className="text-left text-lg font-medium space-x-12 py-4 ml-12">
                <Link className="hover:text-blue-500 transition-colors duration-200" href="/">
                    Home
                </Link>
                <Link className="hover:text-blue-500 transition-colors duration-200" href="/team">
                    Team
                </Link>
                <Link className="hover:text-blue-500 transition-colors duration-200" href="/research">
                    Research
                </Link>
                <Link className="hover:text-blue-500 transition-colors duration-200" href="/demos">
                    Demos
                </Link>
                <Link className="hover:text-blue-500 transition-colors duration-200" href="/awards">
                    Awards
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
