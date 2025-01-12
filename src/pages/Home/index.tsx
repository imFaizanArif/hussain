import { Hero, Problem, Project, ProjectOverview } from "@/components"

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectOverview />
            <Problem bgColor="bg-grid-purple-600" />
            <Problem />
            <Project />
            {/* <Solution /> */}
        </div>
    )
}