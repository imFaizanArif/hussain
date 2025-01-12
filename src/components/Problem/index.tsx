import React from "react";
import { LeftCard } from "../Card";
import { RightCard } from "../Card/RightCard";

type ProblemProps = {
    bgColor?: string;
}

export const Problem: React.FC<ProblemProps> = ({ bgColor }) => {
    return (
        <div className={`${bgColor ? bgColor : 'bg-white'} w-full`}>

            <div className={`py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto`}>
                <div className="flex flex-col md:flex-row justify-start items-start pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto">
                    <LeftCard color="text-white" />
                    <RightCard color="text-white" />
                </div>
            </div>
        </div>
    )
}