import { LeftCard } from "../Card"

export const Project = () => {
    return (
        <div className="w-full">
            <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                <div className="flex flex-col md:flex-row justify-between items-center pt-[0px] md:pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto">
                    <img src="/assets/project.png" alt="" />

                    <LeftCard />
                </div>
            </div>
        </div>
    )
}