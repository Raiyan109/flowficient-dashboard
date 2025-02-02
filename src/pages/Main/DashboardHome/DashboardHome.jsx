import { BsArrowsAngleExpand } from "react-icons/bs";
import arrowImg from '../../../assets/expand-diagonal-line.png'
import chatImg from '../../../assets/chats.png'
import messagesImg from '../../../assets/messages-white.png'
import calendarImg from '../../../assets/Calendar.png'
import automationsImg from '../../../assets/Automations.png'
import whiteAutomationsImg from '../../../assets/white-automation.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { GoClock } from "react-icons/go";
import { MdOutlineSync } from "react-icons/md";
import { Link } from "react-router-dom";

const chats = [
    {
        id: 1,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: GiElectric
    },
    {
        id: 2,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: GiElectric
    },
    {
        id: 3,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: GiElectric
    },
    {
        id: 4,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: GiElectric
    },
    {
        id: 5,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: GiElectric
    },
    {
        id: 6,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: GiElectric
    },
]

const bookings = [
    {
        id: 1,
        day: 'Wed',
        date: '12',
        startTime: '09:00',
        endTime: '09:20',
        patientName: 'David Doe',
        doctorName: 'Dr. Parker- Pineland',
        status: 'confirmed',
        isRepeated: false
    },
    {
        id: 2,
        day: 'Wed',
        date: '12',
        startTime: '09:00',
        endTime: '09:20',
        patientName: 'David Doe',
        doctorName: 'Dr. Parker- Pineland',
        status: 'followUp',
        isRepeated: true
    },
    {
        id: 3,
        day: 'Wed',
        date: '12',
        startTime: '09:00',
        endTime: '09:20',
        patientName: 'David Doe',
        doctorName: 'Dr. Parker- Pineland',
        status: 'cancelled',
        isRepeated: false
    },
    {
        id: 4,
        day: 'Wed',
        date: '12',
        startTime: '09:00',
        endTime: '09:20',
        patientName: 'David Doe',
        doctorName: 'Dr. Parker- Pineland',
        status: 'followUp',
        isRepeated: false
    },
]

const DashboardHome = () => {
    return (
        <div className="flex items-center gap-5 pt-10">
            <div className=" h-[574.9px] rounded-[25px] w-[356.1px] bg-[#f1f1f1]"
            // style={{
            //     backgroundColor: 'rgba(250, 250, 250, 0.6)', // Whitish and semi-transparent
            //     // backdropFilter: 'blur(10px)', // Frosted glass effect
            //     // WebkitBackdropFilter: 'blur(10px)', // Safari support
            // }}
            >
                <div className="flex justify-between items-center pt-[22px] px-[20px] pb-[40px]">
                    <h1 className="text-[24px] font-canvasans font-bold">Chats</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="rounded-md w-[27.3px] h-[25.8px] bg-white font-canvasans font-semibold flex items-center justify-center">0</div>
                            <div className="rounded-md w-[27.3px] h-[25.8px] bg-black text-white font-canvasans font-semibold  flex items-center justify-center">0</div>
                        </div>
                        <div className="border border-[#b9b9b9] p-1 rounded-full">
                            {/* <BsArrowsAngleExpand className="text-[#b9b9b9] text-xl" /> */}
                            <Link to='/allChats'>
                                <img src={arrowImg} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                {chats && chats.length > 0 ? (
                    chats.map((chat) => (
                        <div className="py-2 px-4 rounded-[13px] bg-white mb-5 mx-6">
                            <div className="flex justify-between pt-1">
                                <h1 className=" font-canvasans text-[8.7px]">{chat.name}</h1>
                                <div className=" rounded-full flex items-center justify-center gap-1">
                                    <div className="bg-[#757575] rounded-full p-[3px]">
                                        <chat.automationIcon size={5} fill="white" className="" />
                                    </div>
                                    <div>
                                        <chat.whatsAppIcon size={13} fill="lightGreen" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <h1 className="font-canvasans text-[8.9px] font-thin">{chat.lastMessage}</h1>
                                <p className="text-[#757575] text-[6.9px] self-end">{chat.time}</p>
                            </div>
                        </div>
                    ))
                ) : (
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
                )}

            </div>

            {/* Bookings */}
            <div className="h-[574.9px] rounded-[25px] w-[356.1px] bg-[#f1f1f1]"
            //  style={{
            //     backgroundColor: 'rgba(250, 250, 250, 0.6)', // Whitish and semi-transparent
            //     // backdropFilter: 'blur(10px)', // Frosted glass effect
            //     // WebkitBackdropFilter: 'blur(10px)', // Safari support
            // }}
            >
                <div className=" flex justify-between items-center  pt-[22px] px-[20px] pb-[40px]">
                    <h1 className="text-[24px] font-canvasans font-bold">Bookings</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="rounded-md w-[27.3px] h-[25.8px] bg-white font-canvasans font-semibold flex items-center justify-center">0</div>
                            <div className="rounded-md w-[27.3px] h-[25.8px] bg-black text-white font-canvasans font-semibold  flex items-center justify-center">0</div>
                        </div>
                        <div className="border border-[#b9b9b9] p-1 rounded-full">
                            {/* <BsArrowsAngleExpand className="text-[#b9b9b9] text-xl" /> */}
                            <Link to='/allBookings'>
                                <img src={arrowImg} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                {bookings && bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <div className="py-2 px-4 rounded-[13px] bg-white mb-5 mx-6 flex justify-between gap-4">
                            <div className="flex gap-5">
                                <div className="flex flex-col justify-center items-center -space-y-2">
                                    <h1 className="font-canvasans text-[12.9px]">{booking.day}</h1>
                                    <h1 className="font-canvasans font-bold text-[23px]">{booking.date}</h1>
                                </div>
                                <div className="space-y-3">
                                    <div className="">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="text-[7.7px]" />
                                                <h1 className="text-[7.7px] font-semibold">{booking.startTime} - {booking.endTime}</h1>
                                            </div>
                                            {booking.isRepeated && (
                                                <div className="flex items-center gap-1 px-1 py-[1px] rounded-md" style={{
                                                    background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                                }}>
                                                    <MdOutlineSync size={8} fill="white" />
                                                    <p className="text-[8px] text-white">Repeat</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <GoClock className="text-[7.7px]" />
                                            <h1 className="text-[7.7px] font-semibold">{booking.patientName} - New patient</h1>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <GoClock className="text-[7.7px]" />
                                            <h1 className="text-[7.7px] font-semibold">{booking.doctorName}</h1>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className={`text-[7.7px] font-bold  ${booking.status === 'confirmed' ? 'text-[#01cf2f]' : booking.status === 'followUp' ? 'text-[#3c3c3c]' : 'text-[#ff3131]'}`}>{booking.status === 'confirmed' ? 'Booking Confirmed- Details Collected' : booking.status === 'followUp' ? 'Confirmation follow-up sent' : 'Booking Cancelled. Finding Replacement'}</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                    <img src={whiteAutomationsImg} alt="" className="w-[14.9px] h-[14.9px]" />
                                </div>
                            </div>
                        </div>
                    )
                    )) : (
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
                )}

            </div>

            {/* Quick actions */}
            <div className="h-[574.9px] rounded-2xl w-[356.1px]"

            >
                <div className="mr-3 space-y-[36px]">
                    <h1 className="text-[24px] font-canvasans font-bold">Quick Actions</h1>
                    <div className="space-y-[16px]">
                        <div style={{
                            background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                        }} className="w-[356.1px] h-[110.3px] rounded-2xl space-y-1.5  pt-[18px] px-[22px] pb-[32px]">
                            <div className="flex justify-between">
                                <h1 className="text-white font-canvasans text-[11.7px] font-semibold">Cancel my next appointment</h1>
                                <div className="bg-white p-[2px] w-[19.9px] h-[19.9px]  rounded-2xl ">
                                    <img src={automationsImg} alt="" className="" />
                                </div>
                            </div>
                            <h1 className="text-white font-canvasans text-[8.9px] font-thin max-w-[280px]">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                            <p className="text-white flex justify-end text-[6.9px]">Saves 10 mins</p>
                        </div>
                        <div
                            className="py-3 px-4 rounded-2xl space-y-1.5 w-[356.1px] h-[110.3px]"
                            style={{
                                background: "linear-gradient(90deg, #ff66c4, #ffde59)",
                            }}
                        >
                            <div className="flex justify-between">
                                <h1 className="text-white font-canvasans text-[11.7px] font-semibold">Cancel my next appointment</h1>
                                <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                    <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                                </div>
                            </div>
                            <h1 className="text-white font-canvasans text-[8.9px] font-thin max-w-[280px]">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                            <p className="text-white flex justify-end text-[10px]">Saves 10 mins</p>
                        </div>
                        <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] w-[356.1px] h-[110.3px]">
                            <div className="flex justify-between">
                                <h1 className=" font-canvasans text-[11.7px] font-semibold">Cancel my next appointment</h1>
                                <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                    <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                                </div>
                            </div>
                            <h1 className=" font-canvasans text-[8.9px] font-thin max-w-[280px]">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                            <p className="text-[#757575] flex justify-end text-[10px]">Saves 10 mins</p>
                        </div>
                        <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] w-[356.1px] h-[110.3px]">
                            <div className="flex justify-between">
                                <h1 className=" font-canvasans text-sm font-semibold">Cancel my next appointment</h1>
                                <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                    <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                                </div>
                            </div>
                            <h1 className=" font-canvasans text-xs font-thin">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                            <p className="text-[#757575] flex justify-end text-[10px]">Saves 10 mins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DashboardHome
