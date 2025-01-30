import messages from '../../../../assets/messages.png';
import { IoMailOpenOutline } from "react-icons/io5";
import { RiNewsLine } from "react-icons/ri";
import { IoIosCheckboxOutline } from "react-icons/io";
import whatsapp from '../../../../assets/Whatsapp.png'
import gmail from '../../../../assets/Gmail.png'

const AllChats = () => {
    return (
        <div>
            <div className='bg-[#f1f1f1] w-[1122.6px] h-[646px] rounded-[25px] flex items-start'>
                <div className="w-[219px] border-r border-[#e3dddd] my-4 h-full pl-[29px] space-y-[23px]">
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

                <div className="w-[352px] border-r border-[#e3dddd] my-4 h-full"></div>

                <div className="w-[571px]"></div>
            </div>
        </div>
    )
}

export default AllChats
