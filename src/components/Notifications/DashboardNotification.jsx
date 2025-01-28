import { FaRegCircle } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';
import { FaExclamation } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const DashboardNotification = ({ toggleNotifications }) => {
    return (
        <div
            className="fixed top-9 right-10 h-[700px] w-[400px] rounded-3xl z-50 bg-[#fafafa]"
        // style={{
        //     backgroundColor: 'rgba(240, 240, 240, 0.6)', // Whitish and semi-transparent
        //     // backdropFilter: 'blur(10px)', // Frosted glass effect
        //     WebkitBackdropFilter: 'blur(10px)', // Safari support
        // }}
        >
            <div
                className="absolute top-0 right-0 p-4 cursor-pointer"
                onClick={toggleNotifications}
            >
                ✕
            </div>
            <div className="p-7">
                <h1 className="text-4xl font-canvasans font-bold">Notifications</h1>
                <div className="mt-6">
                    {/* Notification Card Example */}
                    <div className="flex items-center gap-3">
                        <h1 className='flex items-center gap-1 text-sm'>New <span className='bg-[#ff3131] text-[10px] font-semibold font-canvasans p-2 h-4 w-4 rounded-full flex items-center justify-center   text-white'>1</span></h1>
                        <h1 className='text-[#a6a6a6] text-sm'>History</h1>
                    </div>
                    {/* Add more notifications here */}
                    <div style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }} className="py-4 px-4 rounded-2xl mb-5 mt-4">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-white font-canvasans text-sm font-semibold ">Mr. N Hashim cannot find a booking</h1>
                            <div className="bg-white rounded-2xl flex items-center justify-center p-1">
                                <FaExclamation style={{
                                    color: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                }} size={10} />
                            </div>
                        </div>
                        <h1 className="text-white font-canvasans text-[12px] font-extralight mb-4 leading-3">The appointment was cancelled and the user’s appointment has been reshceduled</h1>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <button className='border border-white px-1 py-[1px] rounded-md text-[9px] text-white'>Dr. Parker</button>
                                <button className='border border-white px-1 py-[1px] rounded-md text-[9px] text-white'>Pineland</button>
                            </div>
                            <p className="text-white text-[10px]">10 mins ago</p>
                        </div>
                    </div>
                    <div className="py-4 px-4 rounded-2xl mb-5 mt-4 bg-[#f1f1f1]">
                        <div className="flex justify-between mb-2">
                            <h1 className=" font-canvasans text-sm font-semibold">Your last booking was cancelled</h1>
                            <div className="">
                                <IoCloseOutline size={18} color='#757575' />
                            </div>
                        </div>
                        <h1 className=" font-canvasans text-[12px] font-light mb-4 leading-3">The appointment was cancelled and the user’s appointment has been reshceduled</h1>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <button
                                    className="relative rounded-md text-[9px] p-[1px] overflow-hidden"
                                    style={{
                                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)', // Gradient for the border
                                    }}
                                >
                                    <div
                                        className="w-full h-full rounded-[4px] flex items-center justify-center px-4 py-[2px]"
                                        style={{
                                            background: 'white', // Background inside the button
                                        }}
                                    >
                                        <span
                                            style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)', // Gradient text
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            Dr. Parker
                                        </span>
                                    </div>
                                </button>

                                <button
                                    className="relative rounded-md text-[9px] p-[1px] overflow-hidden"
                                    style={{
                                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)', // Gradient for the border
                                    }}
                                >
                                    <div
                                        className="w-full h-full rounded-[4px] flex items-center justify-center px-4 py-[2px]"
                                        style={{
                                            background: 'white', // Background inside the button
                                        }}
                                    >
                                        <span
                                            style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)', // Gradient text
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            Pineland
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <p className="text-[#757575] text-[10px]">10 mins ago</p>
                        </div>
                    </div>
                    <div className="py-4 px-4 rounded-2xl mb-5 mt-4 bg-[#f1f1f1]">
                        <div className="flex justify-between mb-2">
                            <h1 className=" font-canvasans text-sm font-semibold leading-4">Mr. A Adams hasn’t completed the onboarding process</h1>
                            <div className="">
                                <IoCloseOutline size={18} color='#757575' />
                            </div>
                        </div>
                        <h1 className=" font-canvasans text-[12px] font-thin mb-4 leading-3">The appointment was cancelled and the user’s appointment has been reshceduled</h1>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='flex items-center gap-2'>
                                <button
                                    className="relative rounded-md text-[9px] p-[1px] overflow-hidden"
                                    style={{
                                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)', // Gradient for the border
                                    }}
                                >
                                    <div
                                        className="w-full h-full rounded-[4px] flex items-center justify-center px-4 py-[2px]"
                                        style={{
                                            background: 'white', // Background inside the button
                                        }}
                                    >
                                        <span
                                            style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)', // Gradient text
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            Dr. Parker
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <p className="text-[#757575] text-[10px]">10 mins ago</p>
                        </div>
                        <button
                            className="text-white rounded-xl py-1 px-5 font-canvasans text-[8px] font-semibold"
                            style={{
                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                            }}
                        >
                            Send a reminder
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNotification
