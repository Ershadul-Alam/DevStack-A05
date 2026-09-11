import { use } from "react";
import type { techTypes } from "../types/techTypes";

interface techProps{
    techPromise: Promise<techTypes[]>
}

const Technologies = ({techPromise}:  techProps) => {
    const technologies = use(techPromise);
    console.log(technologies);
    return (
        <div className="container mx-auto">
            <h3 className="font-extrabold text-3xl">
            Explore the <span className="text-[#D74DAE]">Technologies</span>
            </h3>
            <p className="text-sm font-light">Pick one technology per category to build your ideal stack.</p>
        </div>
    );
};

export default Technologies;