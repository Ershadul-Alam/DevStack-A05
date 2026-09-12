import { use } from "react";
import type { techTypes } from "../types/techTypes";
import TechCards from "./TechCards";

interface techProps{
    techPromise: Promise<techTypes[]>
}

const Technologies = ({techPromise}:  techProps) => {
    const technologies = use(techPromise);
    return (
        <div>

        <div className="container mx-auto">
            <h3 className="font-extrabold text-3xl">
            Explore the <span className="text-[#D74DAE]">Technologies</span>
            </h3>
            <p className="text-sm font-light">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="grid grid-cols-3">
        {
            technologies.map((technology: techTypes)=> {
                return <div key={technology.id}>
                    <TechCards technology={technology} />
                </div>
            })
        }
        </div>

        </div>
    );
};

export default Technologies;