import { DesignProcess, Hero, Insights, Problem, Project, ProjectOverview } from "@/components"
import { PartThree } from "@/components/PartThree"
// import { LeftCard } from "@/components/Card"
import { PartTwo } from "@/components/PartTwo"

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectOverview />
            <Problem bgColor="bg-grid-purple-600" color="text-white" />
            <Problem bgColor="bg-grid-purple-50" />
            <Project img="/assets/project.png" flow="flex-col-reverse justify-between items-center" />
            <Problem bgColor="bg-grid-purple-50" />
            <DesignProcess img1="/assets/project2.png" />
            <PartTwo bgColor="bg-grid-purple-200" flow="md:flex-row flex-col-reverse" />
            <DesignProcess img1="/assets/project4.png" img2="/assets/project5.png" />
            <DesignProcess bgColor="bg-grid-purple-50" img2="/assets/project6.png" flow="flex-col justify-start items-start" />
            <Project img="/assets/project7.png" flow="flex-col-reverse justify-between items-center" cardFlow="flex flex-col items-end text-right" imgSize="w-full md:w-1/2" />
            <PartThree bgColor="bg-grid-purple-600" color="text-white" img="/assets/project8.png" />
            <Project img="/assets/project7.png" flow="flex-col-reverse justify-between items-center" imgSize="w-full md:w-1/2" />
            <DesignProcess img1="/assets/project9.png" bgColor="bg-grid-purple-200" imgSize="w-full md:w-[80%] ml-0 md:ml-24 mb-12 sm:mb-12 md:mb-0" />
            <Project img="/assets/project10.png" flow="flex-col-reverse justify-between items-center" imgSize="w-full md:w-1/2" />
            <Insights bgColor="bg-grid-purple-600" color="text-white" />
        </div>
    )
}