import { Hero, Problem, Project, ProjectOverview } from "@/components"
import { LeftCard } from "@/components/Card"

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectOverview />
            <Problem bgColor="bg-grid-purple-600" color="text-white" />
            <Problem bgColor="bg-grid-purple-50" />
            <Project flow="flex-col-reverse" />
            <Problem bgColor="bg-grid-purple-50" />
            <div className="w-full">
                <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                    <div className={`flex flex-col md:flex-row justify-between items-center py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                        <LeftCard />
                        <img src="/assets/project2.png" alt="" className="ml-0 md:ml-24 mb-12 sm:mb-12 md:mb-0 mt-6 md:mt-24" />
                    </div>
                </div>
            </div>
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
                            <LeftCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                    <div className={`flex flex-col md:flex-row justify-between items-start py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto`}>
                        <LeftCard />
                        <div>

                            <img src="/assets/project4.png" alt="" className="ml-0 md:ml-24 mb-12 sm:mb-12 md:mb-0 mt-6 md:mt-0" />
                            <img src="/assets/project5.png" alt="" className="ml-0 md:ml-24 mb-12 sm:mb-12 md:mb-0 mt-6 md:mt-24" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-grid-purple-50 w-full`}>
                <div className={`py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto`}>
                    <div className="flex flex-col justify-start items-start pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto">
                        <LeftCard />
                        <img src="/assets/project6.png" alt="" className="mt-6 md:mt-24" />
                    </div>
                </div>
            </div>
            {/* <Solution /> */}
        </div>
    )
}