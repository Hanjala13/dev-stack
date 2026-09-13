import Logo from "../logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <div>
                    <img src={Logo} alt="Dev Stack" className="w-32" />
                </div>

                <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li><a href="#" className="text-pink-500">Home</a></li>
                    <li><a href="#" className="transition hover:text-pink-500">Technologies</a></li>
                    <li><a href="#" className="transition hover:text-pink-500">Projects</a></li>
                    <li><a href="#" className="transition hover:text-pink-500">About</a></li>
                    <li><a href="#" className="transition hover:text-pink-500">Contact</a></li>
                </ul>

                <div className="flex items-center gap-5">
                    <button className="text-sm font-medium text-gray-600 transition hover:text-pink-500">Sign In</button>

                    <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-pink-600">Sign Up</button>
                </div>

            </div>
        </nav>
    )
}

export default Nav;