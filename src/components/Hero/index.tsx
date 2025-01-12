
export const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url('/assets/hero.png')`,
        }} className="bg-hero h-screen bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center h-full bg-grid-purple-300 bg-opacity-85 w-full sm:w-full md:w-1/2">
                <h1 className="text-white text-4xl font-bold">Welcome to the <span className="text-blue-500">NextJS</span> Starter</h1>
                <p className="text-white text-lg">This is a starter template for NextJS with Tailwind CSS</p>
            </div>
        </div>
    )
}