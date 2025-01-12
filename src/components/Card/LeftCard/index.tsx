export const LeftCard = () => {
    return (
        <div className="w-full md:w-1/2">
            <p className="text-[9px] font-semibold mb-2 tracking-[3.5px] text-grid-purple-500 ">PROJECT OVERVIEW</p>
            <h1 className="text-[24px] sm:text-[24px] lg:text-[32px] font-bold mb-[35px]">The mission</h1>
            <p className="text-body">The Atlassian Design System (ADS) is a collection of UI foundations, components, patterns and standards used to create harmonious product experiences. We’re on a mission to make it easy for teams to design, develop and deliver high-quality user interfaces.
                <br />
                <br />
                Grid is a core visual style within ADS, used to position content and craft consistent page layouts.</p>
            <div className="w-[60px] h-[5px] bg-grid-purple-400"></div>
        </div>
    )
}