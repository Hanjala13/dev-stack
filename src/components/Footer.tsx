import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white">

            <div className="mx-auto flex max-w-7xl items-start justify-between px-6 py-12">

                <div className="w-1/2">
                    <img src={Logo} alt="Dev Stack" className="w-32" />

                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                        Curated tools, technologies, and resources for developers building modern software.</p>

                    <div className="mt-5 flex items-center gap-5 text-sm text-gray-600">
                        <a href="#" className="transition hover:text-pink-500">GitHub</a>
                        <a href="#" className="transition hover:text-pink-500">Twitter</a>
                        <a href="#" className="transition hover:text-pink-500">LinkedIn</a>
                    </div>
                </div>

                <div className="flex gap-24">

                    <div>
                        <h3 className="text-sm font-bold text-gray-800">PRODUCT</h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="transition hover:text-pink-500">Home</a></li>
                            <li><a href="#" className="transition hover:text-pink-500">Technologies</a></li>
                            <li><a href="#" className="transition hover:text-pink-500">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-800">COMPANY</h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="transition hover:text-pink-500">About</a></li>
                            <li><a href="#" className="transition hover:text-pink-500">Contact</a></li>
                            <li><a href="#" className="transition hover:text-pink-500">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-800">LEGAL</h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="transition hover:text-pink-500">Privacy Policy</a></li>
                            <li><a href="#" className="transition hover:text-pink-500">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-gray-100 px-6 py-5">

                <p className="text-xs text-gray-400">© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex items-center gap-6 text-xs text-gray-400">
                    <a href="#" className="transition hover:text-pink-500">Privacy</a>
                    <a href="#" className="transition hover:text-pink-500">Terms</a>
                </div>

            </div>

        </footer>
    )
}

export default Footer;