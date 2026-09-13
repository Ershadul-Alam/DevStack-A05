import { use, useState } from "react";
import type { techTypes } from "../../types/techTypes";
import TechCards from "./TechCards";
import TechStack from "./tech_stack/TechStack";

interface techProps {
    techPromise: Promise<techTypes[]>
}

const Technologies = ({ techPromise }: techProps) => {
    const technologies = use(techPromise);

    const [selectedTech, setselectedTech] = useState<techTypes[]>([]);

    

    return (
        <div>

            {/* Header */}
            <div className="container mx-auto">
                <h3 className="font-extrabold text-3xl">
                    Explore the <span className="text-[#D74DAE]">Technologies</span>
                </h3>
                <p className="text-sm font-light mt-1 mb-8">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-4 container mx-auto">
                {/* Tech Cards */}
                <div className="grid col-span-3 grid-cols-3">
                    {
                        technologies.map((technology: techTypes) => {
                            return <div key={technology.id}>
                                <TechCards technology={technology} 
                                selectedTech={selectedTech} setselectedTech={setselectedTech} 
                                />
                            </div>
                        })
                    }
                </div>

                {/* Tech Stack */}
                <div>
                    <TechStack selectedTech={selectedTech} setselectedTech={setselectedTech} />
                </div>
            </div>

        </div>
    );
};

export default Technologies;