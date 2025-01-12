import React from "react";

type ProblemProps = {
    bgColor?: string;
}

export const Problem: React.FC<ProblemProps> = ({ bgColor }) => {
    return (
        <div className={`py-24 ${bgColor ? bgColor : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2">
                    <p>PROJECT OVERVIEW</p>
                    <h1 className="text-4xl">The mission</h1>
                    <p>
                        The Atlassian Design System (ADS) is a collection of UI foundations, components, patterns and standards used to create harmonious product experiences. We’re on a mission to make it easy for teams to design, develop and deliver high-quality user interfaces.
                    </p>
                    <br />
                    <br />
                    <p>

                        Grid is a core visual style within ADS, used to position content and craft consistent page layouts.
                    </p>

                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-xl">Company</h1>
                    <p>Atlassian</p>
                    ‍<br /><br />
                    <h1 className="text-xl">Role</h1>
                    <p>Product Designer</p>
                    ‍<br /><br />
                    <h1 className="text-xl">Key responsibilities</h1>
                    <p>Own end-to-end release to Open Beta
                        Conduct user research with design leadership
                        Create design system tooling
                        Publish documentation and educational material
                        Drive adoption
                        Deliver roadmap to General Availability</p>
                </div>
            </div>
        </div>
    )
}