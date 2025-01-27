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
        <div className="flex text-start bg-white min-h-screen h-screen w-screen bg-gradient-to-b from-red-400 to-[#f5f5f5] relative" style={{
            backgroundImage: `url(${bgSvg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="">
                <Sidebar />
            </div>
            <div className="flex-1 pl-[326px] bg-[#F2F5F7]">
                <div className={`w-full z-10 transition-all ${isScrolled
                    ? "sticky top-0 bg-white shadow-md p-0"
                    : "sticky top-0 bg-transparent p-[24px]"
                    }`}>
                    <Header />
                </div>
                <div className="p-[24px] pt-0.5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Main
