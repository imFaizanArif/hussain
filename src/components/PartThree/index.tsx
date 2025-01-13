import { DesignProcess } from "../DesignProcess";

type PartThreeProps = {
    bgColor?: string;
    color?: string;
    flow?: string;
    img: string;
}

export const PartThree: React.FC<PartThreeProps> = ({ bgColor, color, img }) => {
    return (
        <div className={`w-full ${bgColor}`}>
            <div className={`pt-[15px] sm:pt-[15px] lg:pt-[60px] ${color} max-w-[1360px] mx-auto`}>
                <div className="text-center pt-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px]">
                    <p className="tracking-[8px] text-grid-purple-500 font-semibold text-sm">
                        PART&nbsp; THREE
                    </p>
                    <h1 className="text-[30px] sm:text-[30px] lg:text-[50px] font-normal">Define</h1>
                </div>
                <DesignProcess img2={img} flow="flex-col justify-start items-start" color={color} />
            </div>
        </div>
    )
}