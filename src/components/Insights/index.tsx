import React from "react";
import { LeftCard } from "../Card"
import { People } from "./People";

type InsightsProps = {
    bgColor?: string;
    color?: string;
    flow?: string;
};

export const Insights: React.FC<InsightsProps> = ({ bgColor, color, flow }) => {
    return (
        <div className={`w-full ${bgColor}`}>
            <div className={`py-[15px] sm:py-[15px] lg:py-[60px] ${color ? color : 'text-primary'} max-w-[1360px] mx-auto`}>
                <div className={`flex flex-col md:${flow ? flow : 'flex-row justify-start items-start'} py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                    <LeftCard color={color} />
                    <div className="space-y-12">
                        <People />
                        <People />
                        <People />
                    </div>
                </div>
            </div>
        </div>
    )
}