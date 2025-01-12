import { Hero, Problem, ProjectOverview } from "@/components"

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectOverview />
            <Problem bgColor="bg-grid-purple-600" />
            <Problem />
            {/* <Solution /> */}
        </div>
    )
}