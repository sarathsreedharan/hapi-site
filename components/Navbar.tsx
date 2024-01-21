import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="text-center text-lg font-medium space-x-12 my-4">
        <Link className="hover:text-blue-500 transition-colors duration-200" href="/">Home</Link>
        <Link className="hover:text-blue-500 transition-colors duration-200" href="/research">Research</Link>
        <Link className="hover:text-blue-500 transition-colors duration-200" href="/team">Team</Link>
        <Link className="hover:text-blue-500 transition-colors duration-200" href="/demos">Demos</Link>
        <Link className="hover:text-blue-500 transition-colors duration-200" href="/awards">Awards</Link>
      </nav>
    </header>
  );
};

export default Navbar;
