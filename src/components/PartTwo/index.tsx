import { LeftCard } from "../Card"

export const PartTwo = () => {
    return (
        <div className="w-full bg-grid-purple-200">
            <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                <div className="text-center py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px]">
                    <p className="tracking-[8px] text-grid-purple-500 font-semibold text-sm">
                        PART&nbsp; TWO
                    </p>
                    <h1 className="text-[30px] sm:text-[30px] lg:text-[50px] font-normal">Discover</h1>
                </div>
                <div className=' text-primary max-w-[1360px] mx-auto'>
                    <div className={`flex md:flex-row flex-col-reverse justify-between items-center py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                        <img src="/assets/project3.png" alt="" className="mr-0 md:mr-24 mt-12 sm:mt-12 md:mt-0" />
                        <LeftCard flow="flex flex-col items-end text-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}