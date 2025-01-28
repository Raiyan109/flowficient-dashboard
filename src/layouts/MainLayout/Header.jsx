import logoImg from '../../assets/logo.png'
import spark from '../../assets/sparkling-fill.png'
import automationsImg from '../../assets/white-automation.png'
import gradientCircle from '../../assets/gradient-circle.png'
import { FaRegCircle } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';
import { FaExclamation } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import DashboardNotification from '../../components/Notifications/DashboardNotification';
import FlowkiAiModal from '../../components/Chatbots/FlowkiAiModal';

const Header = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSearchHistory, setShowSearchHistory] = useState(false);
    const [showFlowkiAi, setShowFlowkiAi] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const toggleFlowkiAi = () => {
        setShowFlowkiAi(!showFlowkiAi);
    };

    return (
        <div className='flex justify-between items-center py-4 px-4 mx-auto max-w-[1300px] relative'>
            <div className='w-[149.7px] h-[44.9px]'>
                <img src={logoImg} alt="" className=' object-contain' />
            </div>
            <div>
                <div className="relative bg-black focus:bg-gradient-to-r focus:from-[#5170ff] focus:to-[#d83bff] rounded-md w-[636.5px] h-[53.5px]" >
                    <label htmlFor="Search" className="sr-only"> Search </label>
                    <span className="absolute inset-y-0 start-1 grid w-10 place-content-center" onClick={toggleFlowkiAi}>
                        <img src={spark} alt="" />
                    </span>
                    <input
                        type="text"
                        id="Search"
                        placeholder="What would you like to do?"
                        className="w-[636.5px] h-[53.5px] rounded-md bg-transparent border-none outline-none pl-12 placeholder:text-white placeholder:font-canvasans placeholder:text-[13px] text-white font-canvasans focus:bg-gradient-to-r focus:from-[#5170ff] focus:to-[#d83bff]"
                        onClick={() => {
                            setShowSearchHistory(!showSearchHistory)
                        }}
                    />

                    <span className="absolute inset-y-0 end-1 grid w-10 place-content-center">
                        <img src={gradientCircle} alt="" />
                    </span>
                </div>
            </div>
            {showSearchHistory && <div className='w-[636.5px] h-[222.9px] bg-white absolute top-20 left-[212px]'>
                <div>
                    <div className='flex items-center justify-between  p-[17px]'>
                        <div className='flex items-center gap-[16px]'>
                            <div className="bg-black p-[3px] w-[15.7px] h-[15.7px]  rounded-2xl flex items-center justify-center">
                                <img src={automationsImg} alt="" className="" />
                            </div>
                            <h1 className='text-[13px] font-canvasans text-[#757575]'>Cancel my next appointment</h1>
                        </div>
                        <h1 className='text-[10px] font-canvasans text-[#757575]'>Saves 5 mins</h1>
                    </div>
                    <div className='border-b-[0.5px] border-[#e3dddd] w-[600px] flex justify-center items-center mx-auto'></div>
                </div>
                <div>
                    <div className='flex items-center justify-between  p-[17px]'>
                        <div className='flex items-center gap-[16px]'>
                            <div className="bg-black p-[3px] w-[15.7px] h-[15.7px]  rounded-2xl flex items-center justify-center">
                                <img src={automationsImg} alt="" className="" />
                            </div>
                            <h1 className='text-[13px] font-canvasans text-[#757575]'>Let my next appointment know I’ll be late</h1>
                        </div>
                        <h1 className='text-[10px] font-canvasans text-[#757575]'>Saves 5 mins</h1>
                    </div>
                    <div className='border-b-[0.5px] border-[#e3dddd] w-[600px] flex justify-center items-center mx-auto'></div>
                </div>
                <div>
                    <div className='flex items-center justify-between  p-[17px]'>
                        <div className='flex items-center gap-[16px]'>
                            <div className="bg-black p-[3px] w-[15.7px] h-[15.7px]  rounded-2xl flex items-center justify-center">
                                <img src={automationsImg} alt="" className="" />
                            </div>
                            <h1 className='text-[13px] font-canvasans text-[#757575]'>Cancel my next appointment</h1>
                        </div>
                        <h1 className='text-[10px] font-canvasans text-[#757575]'>Saves 5 mins</h1>
                    </div>
                    <div className='border-b-[0.5px] border-[#e3dddd] w-[600px] flex justify-center items-center mx-auto'></div>
                </div>
                <div>
                    <div className='flex items-center justify-between  p-[17px]'>
                        <div className='flex items-center gap-[16px]'>
                            <div className="bg-black p-[3px] w-[15.7px] h-[15.7px]  rounded-2xl flex items-center justify-center">
                                <img src={automationsImg} alt="" className="" />
                            </div>
                            <h1 className='text-[13px] font-canvasans text-[#757575]'>Let my next appointment know I’ll be late</h1>
                        </div>
                        <h1 className='text-[10px] font-canvasans text-[#757575]'>Saves 5 mins</h1>
                    </div>
                </div>
            </div>}
            <div className='flex items-center space-x-6'>
                <button
                    className="text-white rounded-xl w-[149px] h-[39.1px] font-canvasans      text-[9.7px] font-semibold"
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

            {/* Flowki AI Modal */}
            {
                showFlowkiAi && (
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-30"> {/* Light grayish overlay */}
                        <FlowkiAiModal toggleFlowkiAi={toggleFlowkiAi} />
                    </div>
                )
            }
        </div>
    )
}

export default Header
