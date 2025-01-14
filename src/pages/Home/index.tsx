import { DesignProcess, Hero, Insights, PartThree, PartTwo, Problem, Project, ProjectOverview } from "@/components"

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
            <PartTwo bgColor="bg-grid-purple-200" flow="md:flex-row flex-col-reverse" cardFlow="flex flex-col items-end text-right" img="/assets/project3.png" />
            <DesignProcess img1="/assets/project4.png" img2="/assets/project5.png" />
            <DesignProcess bgColor="bg-grid-purple-50" img2="/assets/project6.png" flow="flex-col justify-start items-start" />
            {/* <Project img="/assets/project7.png" flow="flex-col-reverse justify-between items-center" cardFlow="flex flex-col items-end text-right" imgSize="w-full md:w-1/2" />
            <PartThree bgColor="bg-grid-purple-600" color="text-white" img="/assets/project8.png" />
            <Project img="/assets/project14.png" flow="flex-col-reverse justify-between items-center" imgSize="w-full md:w-1/2" />
            <DesignProcess img1="/assets/project9.png" bgColor="bg-grid-purple-200" imgSize="w-full md:w-[80%] ml-0 md:ml-24 mb-12 sm:mb-12 md:mb-0" />
            <Project img="/assets/project10.png" flow="flex-col-reverse justify-between items-center" imgSize="w-full md:w-1/2" />
            <Insights bgColor="bg-grid-purple-600" color="text-white" />
            <DesignProcess bgColor="bg-grid-purple-50" img1="/assets/project11.png" img2="/assets/project12.png" topImgSize="mt-6 md:mt-24" flow="flex-col justify-start items-start" />
            <DesignProcess bgColor="bg-grid-purple-200" img2="/assets/project13.png" flow="flex-col justify-start items-start" />
            <PartTwo bgColor="bg-white" flow="md:flex-row flex-col-reverse" img="/assets/project14.png" />
            <DesignProcess bgColor="bg-grid-purple-50" img1="/assets/project15.png" />
            <DesignProcess img1="/assets/project16.png" />
            <Project bgColor="bg-grid-purple-200" img="/assets/project17.png" flow="flex-col-reverse justify-between items-center" img2="/assets/project18.png" />
            <DesignProcess img1="/assets/project14.png" />
            <Project bgColor="bg-grid-purple-50" img="/assets/project17.png" flow="flex-col-reverse justify-between items-center" cardFlow="flex flex-col items-end text-right" img2="/assets/project19.png" /> */}
        </div>
    )
}