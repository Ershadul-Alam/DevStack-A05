

const Banner = () => {
    return (
        <div className="flex justify-between items-center container mx-auto ">
            <div>
                <h1 className="text-6xl font-bold">Build Your Ideal</h1>
                <h1 className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent font-bold text-6xl">Development Stack</h1>
                <p className="py-4 w-md font-light text-sm">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex items-center gap-4 mt-6">
                    <button
                        className="bg-linear-to-r from-orange-400 via-rose-400 to-pink-500
                    text-white font-semibold text-sm py-2 px-6 rounded-lg shadow-sm 
                    hover:opacity-90 transition-opacity">Explore Technologies</button>

                    <button
                        className="bg-white border border-gray-200 text-slate-600 font-medium
                    text-sm py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                    >Learn More</button>
                </div>
            </div>
            <img src="/banner-stack.png" alt="Banner Stack" />
        </div>
    );
};

export default Banner;