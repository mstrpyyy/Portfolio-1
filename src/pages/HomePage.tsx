import { AboutMe } from "../components/AboutMe";
import { HomeHeader } from "../components/HomeHeader";
import { Marquee1 } from "../components/Marquee1";
import { Navbar1 } from "../components/Navbar1";
import { Timeline1 } from "../components/Timeline";


export const HomePage = () => {
    return (
        <>
            <Navbar1 />
            <HomeHeader />
            <div className="flex flex-col justify-evenly h-[90vh] bg-gradient-to-b from-xblack from-70% to-blue1">
                <div className=" bg-xblack flex mx-36 gap-10">
                    <AboutMe />
                    <Timeline1 />
                </div>
                <Marquee1 />
            </div>
            <a href='#' className="bg-blue1 block ">Recent Project</a>
        </>
    )
}
