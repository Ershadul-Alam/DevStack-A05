import type { Dispatch, SetStateAction } from "react";
import type { techTypes } from "../../../types/techTypes";
import EmptyStack from "./EmptyStack";
import SelectedStack from "./SelectedStack";

interface techStackProp {
    selectedTech: techTypes[];
    setselectedTech: Dispatch<SetStateAction<techTypes[]>>
}

const TechStack = ({ selectedTech, setselectedTech }: techStackProp) => {
    return (
        <div>
            <div className="max-w-[420px] w-full bg-white border border-slate-100 rounded-[32px] p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] font-sans">

                {/* Header Section */}
                <div>
                    <h2 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">
                        Your Stack
                    </h2>
                </div>
                {selectedTech.length > 0 ? (
                    <div>
                    <p className="text-sm text-slate-500 font-extralight leading-relaxed mb-3">
                    {`${selectedTech.length} Technology Selected`}
                    </p>
                    <SelectedStack selectedTech={selectedTech} setselectedTech={setselectedTech} />
                    </div>
                ) : (
                    <EmptyStack />
                )}

                </div>

            </div>
            );
};

            export default TechStack;