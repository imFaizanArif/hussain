type RightCardProps = {
    color?: string;
}

export const RightCard: React.FC<RightCardProps> = ({ color }) => {
    return (
        <div className={`w-full md:w-1/2 pt-12 lg:pt-0 pl-0 md:pl-4 text-body ${color ? color : 'text-primary'}`}>
            <h1 className="text-[22px] font-bold mb-[35px]">User sentiment</h1>
            <div>
                <span className="mr-[20px] text-[26px] font-bold text-grid-purple-500 leading-[45px]">01</span>
                <span className="text-body">The grid doesn’t meet their needs</span>
            </div>
            <div>
                <span className="mr-[20px] text-[26px] font-bold text-grid-purple-500 leading-[45px]">02</span>
                <span className="text-body">The grid doesn’t meet their needs</span>
            </div>
            <div>
                <span className="mr-[20px] text-[26px] font-bold text-grid-purple-500 leading-[45px]">03</span>
                <span className="text-body">The grid doesn’t meet their needs</span>
            </div>
            <h1 className="text-[22px] font-bold mt-[60px] mb-[35px]">Business impact</h1>
            <div>
                <span className="mr-[20px] text-[26px] font-bold text-grid-purple-500 leading-[45px]">01</span>
                <span className="text-body">The grid doesn’t meet their needs</span>
            </div>
            <div>
                <span className="mr-[20px] text-[26px] font-bold text-grid-purple-500 leading-[45px]">02</span>
                <span className="text-body">The grid doesn’t meet their needs</span>
            </div>
            <div>
                <span className="mr-[20px] text-[26px] font-bold text-grid-purple-500 leading-[45px]">03</span>
                <span className="text-body">The grid doesn’t meet their needs</span>
            </div>
        </div>
    )
}