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
    },
]

const DashboardHome = () => {
    return (
        <div className="flex items-center gap-9 pt-10">
            <div className=" h-[600px] rounded-2xl w-[400px]" style={{
                backgroundColor: 'rgba(240, 240, 240, 0.6)', // Whitish and semi-transparent
                backdropFilter: 'blur(10px)', // Frosted glass effect
                WebkitBackdropFilter: 'blur(10px)', // Safari support
            }}>
                <div className="flex justify-between items-center p-6">
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

                {chats && chats.length > 0 ? (
                    chats.map((chat) => (
                        <div className="py-2 px-4 rounded-2xl bg-white mb-5 mx-6">
                            <div className="flex justify-between pt-1">
                                <h1 className=" font-canvasans text-xs">{chat.name}</h1>
                                <div className=" rounded-full flex items-center justify-center gap-1">
                                    <div className="bg-gray-400 rounded-full p-[3px]">
                                        <chat.automationIcon size={7} fill="white" />
                                    </div>
                                    <div>
                                        <chat.whatsAppIcon size={15} fill="lightGreen" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <h1 className="font-canvasans text-[10px] font-thin">{chat.lastMessage}</h1>
                                <p className="text-[#757575] text-[8px] self-end">{chat.time}</p>
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
                {bookings && bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <div className="py-2 px-4 rounded-2xl bg-white mb-5 mx-6 flex justify-between gap-4">
                            <div className="flex gap-5">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="font-canvasans text-xl">{booking.day}</h1>
                                    <h1 className="font-canvasans font-bold text-3xl">{booking.date}</h1>
                                </div>
                                <div className="space-y-3">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <GoClock size={13} />
                                            <h1 className="text-xs font-semibold">{booking.startTime} - {booking.endTime}</h1>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <GoClock size={13} />
                                            <h1 className="text-xs font-semibold">{booking.patientName} - New patient</h1>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <GoClock size={13} />
                                            <h1 className="text-xs font-semibold">{booking.doctorName}</h1>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className={`text-[11px] font-bold  ${booking.status === 'confirmed' ? 'text-[#01cf2f]' : booking.status === 'followUp' ? 'text-[#3c3c3c]' : 'text-[#ff3131]'}`}>{booking.status === 'confirmed' ? 'Booking Confirmed- Details Collected' : booking.status === 'followUp' ? 'Confirmation follow-up sent' : 'Booking Cancelled. Finding Replacement'}</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                    <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
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
            <div className="h-[600px] rounded-2xl w-[400px]"

            >
                <div className="ml-10">
                    <h1 className="text-4xl font-canvasans font-bold mb-10">Quick Actions</h1>
                    <div style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }} className="py-3 px-4 rounded-2xl space-y-1.5 mb-5">
                        <div className="flex justify-between">
                            <h1 className="text-white font-canvasans text-sm font-semibold">Cancel my next appointment</h1>
                            <div className="bg-white p-[2px]  rounded-2xl ">
                                <img src={automationsImg} alt="" className="w-3.5" />
                            </div>
                        </div>
                        <h1 className="text-white font-canvasans text-xs font-thin">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                        <p className="text-white flex justify-end text-[10px]">Saves 10 mins</p>
                    </div>
                    <div
                        className="py-3 px-4 rounded-2xl space-y-1.5 mb-5"
                        style={{
                            background: "linear-gradient(90deg, #ff66c4, #ffde59)",
                        }}
                    >
                        <div className="flex justify-between">
                            <h1 className="font-canvasans text-sm font-semibold text-white">Cancel my next appointment</h1>
                            <div className="bg-black p-1 rounded-full flex items-center justify-center">
                                <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                            </div>
                        </div>
                        <h1 className="font-canvasans text-xs font-thin text-white">
                            Sends a Whatsapp to the patient who’s scheduled to come in next to inform them.
                        </h1>
                        <p className="text-white flex justify-end text-[10px]">Saves 10 mins</p>
                    </div>
                    <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] mb-5">
                        <div className="flex justify-between">
                            <h1 className=" font-canvasans text-sm font-semibold">Cancel my next appointment</h1>
                            <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                            </div>
                        </div>
                        <h1 className=" font-canvasans text-xs font-thin">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                        <p className="text-[#757575] flex justify-end text-[10px]">Saves 10 mins</p>
                    </div>
                    <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] mb-5">
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
        </div >
    )
}

export default DashboardHome
