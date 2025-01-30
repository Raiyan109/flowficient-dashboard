import { useState } from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import bgSvg from '../../assets/bg2.svg'

const Main = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="flex flex-col text-start bg-white  h-screen w-screen relative" style={{
            backgroundImage: `url(${bgSvg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#636262] to-[#bdbdbd] opacity-20 z-0" />
            {/* z-10 */}
            <div className={`w-full z-0 transition-all ${isScrolled
                ? "sticky top-0 bg-white shadow-md p-0"
                : "sticky top-0 bg-transparent p-[24px]"
                }`}>
                <Header />
            </div>
            <div className="flex">
                <div className="relative z-10">
                    <Sidebar />
                </div>
                {/* z-0 */}
                <div className="flex-1 pl-1 z-0">

                    <div className="p-[24px] pt-0.5 mx-auto max-w-[1380px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
