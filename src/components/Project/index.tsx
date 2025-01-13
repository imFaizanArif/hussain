import { LeftCard } from "../Card"

type ProjectProps = {
    flow?: string;
    cardFlow?: string;
    img: string;
    imgSize?: string;
}

export const Project: React.FC<ProjectProps> = ({ flow, cardFlow, img, imgSize }) => {
    return (
        <div className="w-full">
            <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                <div className={`flex flex-col md:flex-row ${flow} py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                    <img src={img} alt="" className={`${imgSize} mr-0 md:mr-24 mt-12 sm:mt-12 md:mt-0`} />
                    <LeftCard flow={cardFlow} />
                </div>
            </div>
        </div>
    )
}