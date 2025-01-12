import { Hero, Problem, Project, ProjectOverview } from "@/components"

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectOverview />
            <Problem bgColor="bg-grid-purple-600" color="text-white" />
            <Problem bgColor="bg-grid-purple-50" />
            <Project flow="flex-col-reverse" />
            {/* <Solution /> */}
        </div>
    )
}