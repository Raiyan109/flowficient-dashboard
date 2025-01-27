import { BsArrowsAngleExpand } from "react-icons/bs";
import arrowImg from '../../../assets/expand-diagonal-line.png'
import chatImg from '../../../assets/chats.png'
import messagesImg from '../../../assets/messages-white.png'
import calendarImg from '../../../assets/Calendar.png'

const DashboardHome = () => {
    return (
        <div className="flex items-center gap-5">
            <div className=" h-[600px] rounded-2xl w-[400px]" style={{
                backgroundColor: 'rgba(240, 240, 240, 0.6)', // Whitish and semi-transparent
                backdropFilter: 'blur(10px)', // Frosted glass effect
                WebkitBackdropFilter: 'blur(10px)', // Safari support
            }}>
                <div className=" flex justify-between items-center p-6">
                    <h1 className="text-4xl font-canvasans font-bold">Chats</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="rounded-md px-2 bg-white font-canvasans font-semibold">0</div>
                            <div className="rounded-md px-2 bg-black text-white font-canvasans font-semibold">0</div>
                        </div>
                        <div className="border border-[#b9b9b9] p-1 rounded-full">
                            {/* <BsArrowsAngleExpand className="text-[#b9b9b9] text-xl" /> */}
                            <img src={arrowImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-white h-[400px] rounded-2xl flex flex-col items-center justify-between w-72 pb-5">
                        <div className="flex flex-col items-center justify-center gap-2 mt-10">
                            <img src={chatImg} alt="" className="w-20 h-20 object-contain" />
                            <h4 className="text-[#757575] text-[14px] font-canvasans font-thin text-center max-w-[220px]">Your connected AI assistant conversations will appear here</h4>
                        </div>
                        <button
                            className="text-white bg-black rounded-xl py-3 px-7 font-gordita text-md flex items-center gap-5"
                        >
                            <img src={messagesImg} alt="" className="w-5 h-5 object-contain" />
                            Setup Chats
                        </button>
                    </div>
                </div>
            </div>
            <div className=" h-[600px] rounded-2xl  w-[400px]" style={{
                backgroundColor: 'rgba(240, 240, 240, 0.6)', // Whitish and semi-transparent
                backdropFilter: 'blur(10px)', // Frosted glass effect
                WebkitBackdropFilter: 'blur(10px)', // Safari support
            }}>
                <div className=" flex justify-between items-center p-6">
                    <h1 className="text-4xl font-canvasans font-bold">Bookings</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="rounded-md px-2 bg-white font-canvasans font-semibold">0</div>
                            <div className="rounded-md px-2 bg-black text-white font-canvasans font-semibold">0</div>
                        </div>
                        <div className="border border-[#b9b9b9] p-1 rounded-full">
                            {/* <BsArrowsAngleExpand className="text-[#b9b9b9] text-xl" /> */}
                            <img src={arrowImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-white h-[400px] rounded-2xl flex flex-col items-center justify-between w-72 pb-5">
                        <div className="flex flex-col items-center justify-center gap-2 mt-10">
                            <img src={calendarImg} alt="" className="w-20 h-20 object-contain" />
                            <h4 className="text-[#757575] text-[14px] font-canvasans font-thin text-center max-w-[220px]">Your connected AI assistant conversations will appear here</h4>
                        </div>
                        <button
                            className="text-white bg-black rounded-xl py-3 px-7 font-gordita text-md flex items-center gap-5"
                        >
                            <img src={messagesImg} alt="" className="w-5 h-5 object-contain" />
                            Setup Bookings
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[600px] rounded-2xl w-[400px]"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Whitish and semi-transparent
                    backdropFilter: 'blur(10px)', // Frosted glass effect
                    WebkitBackdropFilter: 'blur(10px)', // Safari support
                }}
            >
                <div className=" flex justify-between items-center p-6">
                    <h1 className="text-4xl font-canvasans font-bold">Chats</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="rounded-md px-2 bg-white font-canvasans font-semibold">0</div>
                            <div className="rounded-md px-2 bg-black text-white font-canvasans font-semibold">0</div>
                        </div>
                        <div className="border border-[#b9b9b9] p-1 rounded-full">
                            {/* <BsArrowsAngleExpand className="text-[#b9b9b9] text-xl" /> */}
                            <img src={arrowImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DashboardHome
