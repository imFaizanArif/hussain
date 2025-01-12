import { LeftCard } from "../Card"

export const ProjectOverview = () => {
    return (
        <div className="w-full">
            <div className='py-[15px] sm:py-[15px] lg:py-[60px] text-primary max-w-[1360px] mx-auto'>
                <div className="text-center py-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px]">
                    <p className="tracking-[8px] text-grid-purple-500 font-semibold text-sm">
                        PART&nbsp; ONE
                    </p>
                    <h1 className="text-[30px] sm:text-[30px] lg:text-[50px] font-normal">Project overview</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-start pt-[0px] md:pt-[60px] pb-[60px] px-[30px] sm:px-[30px] md:[px-45] lg:px-[60px] mx-auto">
                    <LeftCard />
                    <div className="w-full md:w-1/2 pt-12 lg:pt-0 pl-0 md:pl-4">
                        <p className="text-body">
                            <strong>Company</strong>
                            <br />
                            Atlassian
                            <br />
                            <br />
                            <strong>Role</strong>
                            <br />
                            Product Design Lead
                            <br />
                            <br />
                            <strong>Key responsibilities</strong><br />Own end-to-end release to Open Beta<br />Conduct user research with design leadership<br />Create design system tooling<br />Publish documentation and educational material<br />Drive adoption<br />Deliver roadmap to General Availability<br /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}