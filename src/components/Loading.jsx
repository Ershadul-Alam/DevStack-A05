const Loading = () => {
    return (
        <div className="container mx-auto grid grid-cols-4 gap-6  mb-32">

            <div className="col-span-3 grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>

        </div>
    );
};

export default Loading;