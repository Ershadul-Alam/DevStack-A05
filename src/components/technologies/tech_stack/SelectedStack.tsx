import type { Dispatch, SetStateAction } from "react";
import type { techTypes } from "../../../types/techTypes";

interface selectedStackProp {
    selectedTech: techTypes[];
    setselectedTech: Dispatch<SetStateAction<techTypes[]>>
}


const SelectedStack = ({ selectedTech, setselectedTech }: selectedStackProp) => {
    console.log(selectedTech, "from SelectedStack");
    return (
        <div>
            {selectedTech.map((technology) => (
                <div className="flex items-center justify-between w-full border border-slate-200/80 rounded-2xl p-2 pr-5 mb-1.5 bg-white">

                    {/* Left side: Icon and Text */}
                    <div className="flex items-center gap-3.5">
                        {/* Icon */}
                        <div className="w-9 h-9 shrink-0">
                            <img
                                src={technology.icon}
                                alt={`${technology.name} icon`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Text Info */}
                        <div className="flex flex-col justify-center">
                            <span className="textarea-lg font-medium text-slate-900 leading-none mb-1.5 mt-0.5">
                                {technology.name}
                            </span>
                            <span className="text-[10px] font-light text-slate-500 leading-none">
                                {technology.category}
                            </span>
                        </div>
                    </div>

                    {/* Right side: Close (X) Button */}
                    {/* <button
                        onClick={onRemove}
                        className="text-slate-400 hover:text-slate-700 transition-colors duration-200"
                        aria-label={`Remove ${technology.name}`}
                    >
                        <svg
                            className="w-[22px] h-[22px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.75"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> */}

                </div>
            ))}
        </div>
    );
};

export default SelectedStack;