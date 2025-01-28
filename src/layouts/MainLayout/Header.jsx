import logoImg from '../../assets/logo.png'
import spark from '../../assets/sparkling-fill.png'
import gradientCircle from '../../assets/gradient-circle.png'
import { FaRegCircle } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';
import { FaExclamation } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import DashboardNotification from '../../components/Notifications/DashboardNotification';

const Header = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };
    return (
        <div className='flex justify-between items-center py-4 px-14 mx-auto max-w-[1280px]'>
            <div className='w-40'>
                <img src={logoImg} alt="" className=' object-contain' />
            </div>
            <div>
                <div className="relative bg-black rounded-md w-[800px]">
                    <label htmlFor="Search" className="sr-only"> Search </label>
                    <span className="absolute inset-y-0 start-1 grid w-10 place-content-center">
                        <img src={spark} alt="" />
                    </span>
                    <input
                        type="text"
                        id="Search"
                        placeholder="What would you like to do?"
                        className="w-full rounded-md bg-transparent border-none outline-none h-12 pl-12 placeholder:text-white placeholder:font-canvasans text-white font-canvasans"
                    />

                    <span className="absolute inset-y-0 end-1 grid w-10 place-content-center">
                        <img src={gradientCircle} alt="" />
                    </span>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <button
                    className="text-white rounded-xl py-2 px-7 font-canvasans text-sm font-semibold"
                    style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }}
                >
                    2 000 credits
                </button>
                <div className='bg-[#f1f1f1] rounded-full p-2'>
                    <GoPersonFill size={18} />
                </div>
                <div className='bg-[#f1f1f1] rounded-full p-2'>
                    <MdElectricBolt size={18} />
                </div>
                <div className='bg-[#f1f1f1] rounded-full p-2 relative cursor-pointer' onClick={toggleNotifications}>
                    <div className='bg-[#ff3131] text-[10px] font-semibold font-canvasans p-2 h-4 w-4 rounded-full flex items-center justify-center  absolute -top-2 right-0 text-white'>1</div>
                    <IoIosNotifications size={18} />
                </div>


            </div>
            {/* Notification Modal */}
            {showNotifications && (
                <DashboardNotification toggleNotifications={toggleNotifications} />
            )}
        </div>
    )
}

export default Header
