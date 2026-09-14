import banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-20">

                <div className="max-w-xl">

                    <h1 className="text-5xl font-bold leading-tight">
                        Build Your Ideal
                        <br />
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-7 flex items-center gap-4">

                        <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-pink-500 hover:text-pink-500">
                            Learn More
                        </button>

                    </div>
                </div>

                <div className="flex justify-center">
                    <img src={banner} alt="Development Stack" className="w-95"/>
                </div>

            </div>
        </section>
    );
};

export default Banner;