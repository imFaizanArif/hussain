import { DesignProcess, Hero, Problem, Project, ProjectOverview } from "@/components"
// import { LeftCard } from "@/components/Card"
import { PartTwo } from "@/components/PartTwo"

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectOverview />
            <Problem bgColor="bg-grid-purple-600" color="text-white" />
            <Problem bgColor="bg-grid-purple-50" />
            <Project flow="flex-col-reverse" />
            <Problem bgColor="bg-grid-purple-50" />
            <DesignProcess img1="/assets/project2.png" />
            <PartTwo />
            <DesignProcess img1="/assets/project4.png" img2="/assets/project5.png" />
            <DesignProcess bgColor="bg-grid-purple-50" img2="/assets/project6.png" flow="flex-col justify-start items-start" />

            {/* <div className={`bg-grid-purple-50 w-full`}>
                <div className={`py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto`}>
                    <div className="flex flex-col justify-start items-start pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto">
                        <LeftCard />
                        <img src="/assets/project6.png" alt="" className="mt-6 md:mt-24" />
                    </div>
                </div>
            </div> */}
            {/* <Solution /> */}
        </div>
    )
}