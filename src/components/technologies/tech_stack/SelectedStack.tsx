import { useState, type Dispatch, type SetStateAction } from "react";
import type { techTypes } from "../../../types/techTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface selectedStackProp {
    selectedTech: techTypes[];
    setselectedTech: Dispatch<SetStateAction<techTypes[]>>
}


const SelectedStack = ({ selectedTech, setselectedTech }: selectedStackProp) => {
    console.log(selectedTech, "from SelectedStack");

    const handleRemoveTech = (technology:techTypes) =>{
        const restTech = selectedTech.filter((card)=> card.name !== technology.name);
        setselectedTech(restTech);
    }

    // const [isRemoved, setIsRemoved] = useState(false)

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
                    <FontAwesomeIcon 
                    icon={faXmark} 
                    className="cursor-pointer"
                    onClick={()=> {
                        handleRemoveTech(technology);
                    }
                    }
                    />
                    

                </div>
            ))}
        </div>
    );
};

export default SelectedStack;