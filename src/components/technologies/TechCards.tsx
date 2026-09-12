import type { Dispatch, SetStateAction } from "react";
import type { techTypes } from "../../types/techTypes";
import SelectedStack from "./tech_stack/SelectedStack";

interface techCardsProp {
    technology: techTypes;
    selectedTech : techTypes[];
    setselectedTech : Dispatch<SetStateAction<techTypes[]>>
}


const TechCards = ({ technology, selectedTech, setselectedTech }: techCardsProp) => {


    return (
        <div className="max-w-75 w-full bg-white border border-gray-100 rounded-4xl p-4.5 my-2 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] font-sans">

            {/* Header: Icon & Badge */}
            <div className="flex justify-between items-start mb-4">
                {/* Icon Container - using an img tag for the string url/path */}
                <div className="w-10 h-10">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Badge */}
                {technology.badge && (
                    <span className="bg-[#f0f8ff] text-[#0ea5e9] px-3 py-1.5 rounded-full text-xs font-medium">
                        {technology.badge}
                    </span>
                )}
            </div>

            {/* Title & Description */}
            <div className="mb-3.5">
                <h2 className="text-xl font-medium text-slate-900 mb-2">
                    {technology.name}
                </h2>
                <p className="text-slate-500 text-sm font-extralight leading-relaxed line-clamp-3">
                    {technology.description}
                </p>
            </div>

            {/* Faint Divider */}
            <div className="w-full h-px bg-slate-100/80 mb-1.5"></div>

            {/* Tags & Rating Section */}
            <div className="flex items-center justify-between mb-4">
                <span className="bg-[#f2f4f5] text-slate-600 px-2 py-1 rounded-lg text-[13px] font-light">
                    {technology.category}
                </span>

                <span className="text-slate-500 text-[13px] font-sans">
                    {technology.difficulty}
                </span>
                {/* Gold Star SVG */}
                <div className="flex items-center gap-0.5">
                    <svg className="w-4.5 h-4.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-slate-800 font-bold text-[13px]">
                        {technology.rating}
                    </span>
                </div>
            </div>

            {/* Action Button */}
            <button 
            onClick={() => setselectedTech([...selectedTech, technology])} //selected tech logic
            className="w-full bg-[#0a0f1c] hover:bg-[#1e293b] text-white font-sans py-2 rounded-[14px] transition-colors duration-200 text-[15px]">
                Add to Stack
            </button>

        </div>
    );
};

export default TechCards;