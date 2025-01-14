import { LeftCard } from "../Card"

type PartTwoProps = {
    bgColor?: string;
    img?: string;
    flow?: string;
    cardFlow?: string;
}

export const PartTwo: React.FC<PartTwoProps> = ({ bgColor, img, flow, cardFlow }) => {
    return (
        <div className={`w-full ${bgColor ? bgColor : 'bg-white'}`}>
            <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                <div className="text-center pt-0 md:pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px]">
                    <p className="tracking-[8px] text-grid-purple-500 font-semibold text-sm">
                        PART&nbsp; TWO
                    </p>
                    <h1 className="text-[30px] sm:text-[30px] lg:text-[50px] font-normal">Discover</h1>
                </div>
                <div className=' text-primary max-w-[1360px] mx-auto'>
                    <div className={`flex ${flow} justify-between items-center py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                        <img src={img} alt="" className="mr-0 md:mr-24 mt-12 sm:mt-12 md:mt-0" />
                        <LeftCard flow={cardFlow} />
                    </div>
                </div>
            </div>
        </div>
    )
}