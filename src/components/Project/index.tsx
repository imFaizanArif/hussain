import { LeftCard } from "../Card"

type ProjectProps = {
    bgColor?: string;
    flow?: string;
    cardFlow?: string;
    img: string;
    img2?: string;
    imgSize?: string;
}

export const Project: React.FC<ProjectProps> = ({ bgColor, flow, cardFlow, img, img2, imgSize }) => {
    return (
        <div className={`w-full ${bgColor}`}>
            <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                <div className={`flex flex-col md:flex-row ${flow} py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                    <img src={img} alt="" className={`${imgSize} mr-0 md:mr-24 mt-12 sm:mt-12 md:mt-0`} />
                    <LeftCard flow={cardFlow} />
                </div>
                {img2 && <div className={`flex flex-col md:flex-row ${flow} pt-0 pb-[60px] md:pt-[30px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                    <img src={img2} alt="" className={`${imgSize} mr-0 md:mr-24`} />
                </div>}
            </div>
        </div>
    )
}