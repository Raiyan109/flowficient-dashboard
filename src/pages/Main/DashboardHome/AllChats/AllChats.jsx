import messages from '../../../../assets/messages.png';
import { IoMailOpenOutline } from "react-icons/io5";
import { RiNewsLine } from "react-icons/ri";
import { IoIosCheckboxOutline } from "react-icons/io";
import whatsapp from '../../../../assets/Whatsapp.png'
import gmail from '../../../../assets/Gmail.png'
import { LuArrowUpDown } from "react-icons/lu";
import { CiSearch } from 'react-icons/ci';
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import spark from '../../../../assets/sparkling-fill.png'
import { FaArrowUp } from 'react-icons/fa';
import { RiSparklingFill } from "react-icons/ri";

const chats = [
    {
        id: 1,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: spark
    },
    {
        id: 2,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: spark
    },
    {
        id: 3,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: spark
    },
    {
        id: 4,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: spark
    },
    {
        id: 5,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: spark
    },
    {
        id: 6,
        name: 'David Doe',
        lastMessage: 'Yes, we look forward to seeing you',
        time: '5 mins ago',
        whatsAppIcon: IoLogoWhatsapp,
        gmailIcon: SiGmail,
        globeIcon: BsGlobe,
        automationIcon: spark
    },
]

const AllChats = () => {
    return (
        <div>
            <div className='bg-[#f1f1f1] w-[1122.6px] h-[646px] rounded-[25px] flex items-start'>
                {/* left part */}
                <div className="w-[219px] border-r border-[#e3dddd] h-full pl-[29px] space-y-[23px] p-5">
                    <div className=''>
                        <div className='flex items-center gap-[83px] pr-[13px]'>
                            <div className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[7px]">
                                <img src={messages} alt="" className='w-[15.7px] h-[15.7px]' />
                                <h1 className='text-[8.7px] font-canvasans'>Chats</h1>
                            </div>
                            <div className='w-[16.8px] h-[15.6px] bg-white rounded-[4px] font-canvasans text-[6.2px] font-bold flex items-center justify-center'>
                                0
                            </div>
                        </div>
                        <div className='flex items-center gap-[53px] pr-[13px]'>
                            <div className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[7px]">
                                <IoMailOpenOutline className='w-[15.7px] h-[15.7px]' />
                                <h1 className='text-[8.7px] font-canvasans'>Open Tickets</h1>
                            </div>
                            <div className='w-[16.8px] h-[15.6px] bg-black text-white rounded-[4px] font-canvasans text-[6.2px] font-bold flex items-center justify-center'>
                                2
                            </div>
                        </div>
                        <div className='flex items-center gap-[43px] pr-[13px]'>
                            <div className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[7px]">
                                <RiNewsLine className='w-[15.7px] h-[15.7px]' />
                                <h1 className='text-[8.7px] font-canvasans'>Assigned to me</h1>
                            </div>
                            <div className='w-[16.8px] h-[15.6px] bg-white rounded-[4px] font-canvasans text-[6.2px] font-bold flex items-center justify-center'>
                                1
                            </div>
                        </div>
                        <div className='flex items-center gap-[83px]'>
                            <div className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[7px]">
                                <IoIosCheckboxOutline className='w-[15.7px] h-[15.7px]' />
                                <h1 className='text-[8.7px] font-canvasans'>Closed</h1>
                            </div>
                            {/* <div className='w-[16.8px] h-[15.6px] bg-white rounded-[4px] font-canvasans text-[6.2px] font-bold flex items-center justify-center'>
                            0
                        </div> */}
                        </div>

                        <div>

                        </div>
                    </div>

                    <div>
                        <h1 className='text-[8.7px] font-canvasans font-semibold pl-[10px] pb-[8px]'>Channels</h1>
                        <div>
                            <div className='flex items-center gap-[63px] pr-[13px] pb-[8px]'>
                                <div className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[7px]">
                                    <img src={whatsapp} alt="" className='w-[15px] h-[15px]' />
                                    <h1 className='text-[8.7px] font-canvasans'>WhatsApp</h1>
                                </div>
                                <div className='w-[16.8px] h-[15.6px] bg-white rounded-[4px] font-canvasans text-[6.2px] font-bold flex items-center justify-center'>
                                    0
                                </div>
                            </div>
                            <div className='flex items-center gap-[83px] pr-[13px]'>
                                <div className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[7px]">
                                    <img src={gmail} alt="" className='w-[15px] h-[15px]' />
                                    <h1 className='text-[8.7px] font-canvasans'>Gmail</h1>
                                </div>
                                <div className='w-[16.8px] h-[15.6px] bg-white rounded-[4px] font-canvasans text-[6.2px] font-bold flex items-center justify-center'>
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* middle part */}
                <div className="w-[352px] border-r border-[#e3dddd]  h-full">
                    <div className="flex justify-between items-center p-6">
                        <h1 className="text-[24px] font-canvasans font-bold">Chats</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="rounded-md w-[27.3px] h-[25.8px] bg-white font-canvasans font-semibold flex items-center justify-center">1</div>
                                <div className="rounded-md w-[27.3px] h-[25.8px] bg-black text-white font-canvasans font-semibold  flex items-center justify-center">2</div>
                            </div>

                        </div>
                    </div>

                    <div className='flex justify-end pr-[17px]'>
                        <div className="relative flex items-center gap-1">
                            <LuArrowUpDown className='text-gray-600 text-xs' />
                            <select className="appearance-none bg-transparent focus:outline-none text-[#222222] text-[9.7px] font-canvasans pr-4 flex items-center">
                                <option value="option1">Newest</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="#3c3c3c"
                                    className="w-2 h-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Input */}
                    <div className='flex justify-center mt-[11px]'>
                        <div className="relative bg-white rounded-[13px] w-[320px] h-[29px]" >
                            <label htmlFor="Search" className="sr-only"> Search </label>
                            <span className="absolute inset-y-0 start-1 grid w-10 place-content-center" >
                                <CiSearch size={18} />
                            </span>
                            <input
                                type="text"
                                id="Search"
                                placeholder="Search"
                                className="bg-transparent py-[1px] border-none outline-none pl-12 placeholder:text-gray-500 placeholder:font-canvasans placeholder:text-[11px] text-white font-canvasans"

                            />
                        </div>
                    </div>

                    {/* Chats */}
                    <div className='mt-[13px] flex justify-center flex-col items-center'>
                        {chats.map((chat) => (
                            <div className="py-2 px-4 rounded-2xl bg-white mb-5 mx-6 w-[320px]">
                                <div className="flex justify-between pt-1">
                                    <h1 className=" font-canvasans text-[8.7px]">{chat.name}</h1>
                                    <div className=" rounded-full flex items-center justify-center gap-1">
                                        <div className="bg-[#757575] rounded-full p-[3px]">
                                            {/* <chat.automationIcon size={5} fill="white" className="" /> */}
                                            <img src={chat.automationIcon} alt="" className='w-2 h-2' />
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
                        ))}
                    </div>
                </div>

                {/* right part */}
                <div className="w-[571px]">
                    {/* Input */}
                    <div className="fixed bottom-12 p-4 w-[546.2px] h-[39.8px]">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Let's chat"
                            // value={userInput}
                            // onChange={(e) => setUserInput(e.target.value)}
                            // onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="w-full border-gray-200 px-[25px] py-[17px] h-[39.8px] placeholder:font-canvasans placeholder:text-[#aaaaaa] placeholder:text-[11.7px] rounded-full"
                        />

                        <div className='flex items-center gap-[13px] absolute right-7 top-[23px]'>
                            {/* <span
                                className=" inset-y-0 grid place-content-center  h-[26.4px] w-[26.4px] rounded-full cursor-pointer"
                            // onClick={handleSendMessage}
                            >
                                <RiSparklingFill color='black' />
                            </span> */}
                            <svg width="0" height="0">
                                <defs>
                                    <radialGradient id="gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="0%">
                                        <stop offset="0%" style={{ stopColor: '#5170ff' }} />
                                        <stop offset="100%" style={{ stopColor: '#d83bff' }} />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <span
                                className="inset-y-0 grid place-content-center h-[26.4px] w-[26.4px] rounded-full cursor-pointer"
                            // onClick={handleSendMessage}
                            >
                                <RiSparklingFill style={{ fill: 'url(#gradient)' }} />
                            </span>
                            <span
                                className=" inset-y-0 grid place-content-center bg-black h-[26.4px] w-[26.4px] rounded-full cursor-pointer"
                            // onClick={handleSendMessage}
                            >
                                <FaArrowUp color='white' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllChats
