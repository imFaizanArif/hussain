import React from "react";
import { LeftCard } from "../Card"

type DesignProcessProps = {
    bgColor?: string;
    color?: string;
    flow?: string;
    img1?: string;
    img2?: string;
    imgSize?: string;
};

export const DesignProcess: React.FC<DesignProcessProps> = ({ bgColor, color, flow, img1, img2, imgSize }) => {
    return (
        <div className={`w-full ${bgColor}`}>
            <div className={`py-[15px] sm:py-[15px] lg:py-[60px] ${color ? color : 'text-primary'} max-w-[1360px] mx-auto`}>
                <div className={`flex flex-col md:${flow ? flow : 'flex-row justify-between items-start'} py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                    <LeftCard color={color} />
                    <div>
                        {/* ml-0 md:ml-24 mb-12 sm:mb-12 md:mb-0 mt-6 md:mt-24 */}
                        {img1 ? <img src={img1} alt="" className={`${imgSize}`} /> : null}
                        {img2 ? <img src={img2} alt="" className={`${imgSize} mt-6 md:mt-24`} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}