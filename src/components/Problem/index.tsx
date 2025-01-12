import React from "react";
import { LeftCard } from "../Card";
import { RightCard } from "../Card/RightCard";

type ProblemProps = {
    bgColor?: string;
}

export const Problem: React.FC<ProblemProps> = ({ bgColor }) => {
    return (
        <div className={`py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto ${bgColor ? bgColor : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row justify-center items-start pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto">
                <LeftCard color="text-white" />
                {/* <div className="w-full md:w-1/2 pt-12 lg:pt-0 pl-0 md:pl-4">
                    <p className="text-body">
                        <strong>Company</strong>
                        <br />
                        Atlassian
                        <br />
                        <br />
                        <strong>Role</strong>
                        <br />
                        Product Design Lead
                        <br />
                        <br />
                        <strong>Key responsibilities</strong><br />Own end-to-end release to Open Beta<br />Conduct user research with design leadership<br />Create design system tooling<br />Publish documentation and educational material<br />Drive adoption<br />Deliver roadmap to General Availability<br /></p>
                </div> */}
                <RightCard color="text-white" />
            </div>
        </div>
    )
}