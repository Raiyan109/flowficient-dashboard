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
        <div className="flex flex-col h-screen"
            style={{
                backgroundImage: `radial-gradient(circle, hsla(0, 0%, 54%, 0.3) 50%, hsla(0, 4%, 62%, 0.1) 100%), 
                              linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), 
                              url(${bgSvg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* bg-gradient-to-b from-[#636262] to-[#bdbdbd] */}
            {/* <div className="absolute inset-0 main-gradient opacity-20" /> */}
            {/* z-10 */}
            <div className={`w-full transition-all ${isScrolled
                ? "sticky top-0 bg-white shadow-md p-0"
                : "sticky top-0 bg-transparent p-[24px]"
                }`}>
                <Header />
            </div>
            <div className="flex">
                <div className="relative">
                    <Sidebar />
                </div>
                {/* z-0 */}
                <div className="flex-1 pl-1">

                    <div className="p-[24px] pt-0.5 mx-auto max-w-[1380px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
