import { MdElectricBolt, MdOutlineSync } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import QuickActionModal from "./QuickActionModal";
import BookingDetailsModal from "./BookingDetailsModal";
import BookingFlowkiModal from "./BookingFlowkiModal";


const AllBookings = () => {
    const [showQuickActions, setShowQuickActions] = useState(false)
    const [showBookingDetailsModal, setShowBookingDetailsModal] = useState(false)
    const [showFlowkiAiModal, setShowFlowkiAiModal] = useState(false)

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

    const toggleQuickActions = () => {
        setShowQuickActions(!showQuickActions)
    }

    const toggleBookingDetailsModal = () => {
        setShowBookingDetailsModal(!showBookingDetailsModal)
    }

    const toggleFlowkiAiModal = () => {
        setShowFlowkiAiModal(!showFlowkiAiModal)
    }

    return (
        <div>
            <div className='bg-[#f1f1f1] w-[1122.6px] h-[646px] rounded-[25px]'>
                <div className="flex justify-between pl-[35px] pr-[28px] pt-[25px]">
                    <h1 className="font-canvasans text-[24px] font-bold">Bookings</h1>

                    {/* Search and Filters */}
                    <div className="flex items-center gap-5">
                        <h1 className="font-canvasans text-[12px] font-semibold">Wed, 28 Jan 2025</h1>
                        <div className="flex items-center">
                            <SlArrowLeft size={13} />
                            <SlArrowRight size={13} />
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div className='bg-[#fafafa] rounded-full w-[32px] h-[32px] flex items-center justify-center' onClick={toggleQuickActions}>
                                <MdElectricBolt size={16} />
                            </div>
                            <div className='bg-[#fafafa] rounded-full w-[32px] h-[32px] flex items-center justify-center'>
                                <FaRegCalendarAlt size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className=" mx-[32px] pt-[35px]">
                    <div className="h-[42.2px] w-full bg-white rounded-[9px] flex justify-between">
                        <div className="flex items-center gap-[12px] pl-2">
                            <button className="w-[129.4px] h-[28.3px] bg-black text-white rounded-[7px] flex gap-1 items-center justify-center">
                                <h1 className="font-gordita text-[8px]">Upcoming</h1>
                            </button>
                            <button className="w-[129.4px] h-[28.3px]  rounded-[7px] flex gap-1 items-center justify-center">
                                <h1 className="font-gordita text-[8px] text-[#3c3c3c]">Pending</h1>
                            </button>
                            <button className="w-[129.4px] h-[28.3px]  rounded-[7px] flex gap-1 items-center justify-center">
                                <h1 className="font-gordita text-[8px] text-[#3c3c3c]">Recurring</h1>
                            </button>
                            <button className="w-[129.4px] h-[28.3px]  rounded-[7px] flex gap-1 items-center justify-center">
                                <h1 className="font-gordita text-[8px] text-[#3c3c3c]">Past Bookings</h1>
                            </button>
                            <button className="w-[129.4px] h-[28.3px]  rounded-[7px] flex gap-1 items-center justify-center">
                                <h1 className="font-gordita text-[8px] text-[#3c3c3c]">Repeat Bookings</h1>
                            </button>
                        </div>
                        <div className="flex items-center gap-[15px]">
                            <div className="relative">
                                <select className="appearance-none bg-transparent focus:outline-none text-[#3c3c3c] text-[8px] font-gordita pr-4 flex items-center">
                                    <option value="option1">All Locations</option>
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

                            <div className="relative">
                                <select className="appearance-none bg-transparent focus:outline-none text-[#3c3c3c] text-[8px] font-gordita pr-4 flex items-center">
                                    <option value="option1">All Doctors</option>
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
                    </div>
                </div>

                {/* Bookings */}
                <div className="space-y-[14px]">
                    <div className=" mx-[32px] pt-[35px]">
                        <div className="h-[79.7px] w-full bg-white rounded-[9px] flex justify-between pl-[18px]">
                            <div className="flex">
                                <div className="flex space-x-[16px]">
                                    <div className="-space-y-2 flex flex-col justify-center items-center">
                                        <h1 className="text-[12.9px] font-montserrat">Wed</h1>
                                        <h1 className="text-[23px] font-semibold font-canvasans">28</h1>
                                    </div>
                                    <div className="border-r my-2 border-gray-300"></div>
                                </div>
                                <div className="space-y-3 pl-[16px] pt-[19px] mr-[52px]">
                                    <div className="space-y-[13px]">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">9:00 - 9:20</h1>
                                            </div>
                                            <div className="flex items-center gap-1 px-0.5 py-[0.5px] rounded-[3px]" style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                            }}>
                                                <MdOutlineSync size={8} fill="white" />
                                                <p className="text-[5.8px] text-white font-canvasans">Repeat</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">Dr Parker - Pineland</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[19px] space-y-[12px]">
                                    <div className="flex items-center gap-1 ">
                                        <GoClock className="w-[13px] h-[13px]" />
                                        <h1 className="text-[8.8px] font-canvasans font-semibold">David Patient - New Patient</h1>
                                    </div>
                                    <h1 className="text-[8.8px] font-canvasans font-light">Acne Treatment</h1>
                                </div>
                            </div>

                            {/* Status */}
                            <div className=" flex items-center gap-[84px] pr-[24px]">
                                <div className="flex flex-col">
                                    <h1 className="text-[8.8px] font-canvasans">Status</h1>
                                    <h1 className="text-[#01cf2f] text-[9.9px] font-canvasans">Booking Confirmed - Details Collected</h1>
                                </div>
                                <div className="flex gap-[12px]">
                                    <div className="bg-black rounded-full">
                                        <MdElectricBolt className="text-white text-xs" onClick={toggleFlowkiAiModal} />
                                    </div>
                                    <BsThreeDotsVertical onClick={toggleBookingDetailsModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-[32px]">
                        <div className="h-[79.7px] w-full bg-white rounded-[9px] flex justify-between pl-[18px]">
                            <div className="flex">
                                <div className="flex space-x-[16px]">
                                    <div className="-space-y-2 flex flex-col justify-center items-center">
                                        <h1 className="text-[12.9px] font-montserrat">Wed</h1>
                                        <h1 className="text-[23px] font-semibold font-canvasans">28</h1>
                                    </div>
                                    <div className="border-r my-2 border-gray-300"></div>
                                </div>
                                <div className="space-y-3 pl-[16px] pt-[19px] mr-[52px]">
                                    <div className="space-y-[13px]">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">9:00 - 9:20</h1>
                                            </div>
                                            <div className="flex items-center gap-1 px-0.5 py-[0.5px] rounded-[3px]" style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                            }}>
                                                <MdOutlineSync size={8} fill="white" />
                                                <p className="text-[5.8px] text-white font-canvasans">Repeat</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">Dr Parker - Pineland</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[19px] space-y-[12px]">
                                    <div className="flex items-center gap-1 ">
                                        <GoClock className="w-[13px] h-[13px]" />
                                        <h1 className="text-[8.8px] font-canvasans font-semibold">David Patient - New Patient</h1>
                                    </div>
                                    <h1 className="text-[8.8px] font-canvasans font-light">Acne Treatment</h1>
                                </div>
                            </div>

                            {/* Status */}
                            <div className=" flex items-center gap-[84px] pr-[24px]">
                                <div className="flex flex-col">
                                    <h1 className="text-[8.8px] font-canvasans">Status</h1>
                                    <h1 className="text-[#01cf2f] text-[9.9px] font-canvasans">Booking Confirmed - Details Collected</h1>
                                </div>
                                <div className="flex gap-[12px]">
                                    <div className="bg-black rounded-full">
                                        <MdElectricBolt className="text-white text-xs" />
                                    </div>
                                    <BsThreeDotsVertical onClick={toggleBookingDetailsModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-[32px]">
                        <div className="h-[79.7px] w-full bg-white rounded-[9px] flex justify-between pl-[18px]">
                            <div className="flex">
                                <div className="flex space-x-[16px]">
                                    <div className="-space-y-2 flex flex-col justify-center items-center">
                                        <h1 className="text-[12.9px] font-montserrat">Wed</h1>
                                        <h1 className="text-[23px] font-semibold font-canvasans">28</h1>
                                    </div>
                                    <div className="border-r my-2 border-gray-300"></div>
                                </div>
                                <div className="space-y-3 pl-[16px] pt-[19px] mr-[52px]">
                                    <div className="space-y-[13px]">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">9:00 - 9:20</h1>
                                            </div>
                                            <div className="flex items-center gap-1 px-0.5 py-[0.5px] rounded-[3px]" style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                            }}>
                                                <MdOutlineSync size={8} fill="white" />
                                                <p className="text-[5.8px] text-white font-canvasans">Repeat</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">Dr Parker - Pineland</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[19px] space-y-[12px]">
                                    <div className="flex items-center gap-1 ">
                                        <GoClock className="w-[13px] h-[13px]" />
                                        <h1 className="text-[8.8px] font-canvasans font-semibold">David Patient - New Patient</h1>
                                    </div>
                                    <h1 className="text-[8.8px] font-canvasans font-light">Acne Treatment</h1>
                                </div>
                            </div>

                            {/* Status */}
                            <div className=" flex items-center gap-[84px] pr-[24px]">
                                <div className="flex flex-col">
                                    <h1 className="text-[8.8px] font-canvasans">Status</h1>
                                    <h1 className="text-[#01cf2f] text-[9.9px] font-canvasans">Booking Confirmed - Details Collected</h1>
                                </div>
                                <div className="flex gap-[12px]">
                                    <div className="bg-black rounded-full">
                                        <MdElectricBolt className="text-white text-xs" />
                                    </div>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-[32px]">
                        <div className="h-[79.7px] w-full bg-white rounded-[9px] flex justify-between pl-[18px]">
                            <div className="flex">
                                <div className="flex space-x-[16px]">
                                    <div className="-space-y-2 flex flex-col justify-center items-center">
                                        <h1 className="text-[12.9px] font-montserrat">Wed</h1>
                                        <h1 className="text-[23px] font-semibold font-canvasans">28</h1>
                                    </div>
                                    <div className="border-r my-2 border-gray-300"></div>
                                </div>
                                <div className="space-y-3 pl-[16px] pt-[19px] mr-[52px]">
                                    <div className="space-y-[13px]">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">9:00 - 9:20</h1>
                                            </div>
                                            <div className="flex items-center gap-1 px-0.5 py-[0.5px] rounded-[3px]" style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                            }}>
                                                <MdOutlineSync size={8} fill="white" />
                                                <p className="text-[5.8px] text-white font-canvasans">Repeat</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">Dr Parker - Pineland</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[19px] space-y-[12px]">
                                    <div className="flex items-center gap-1 ">
                                        <GoClock className="w-[13px] h-[13px]" />
                                        <h1 className="text-[8.8px] font-canvasans font-semibold">David Patient - New Patient</h1>
                                    </div>
                                    <h1 className="text-[8.8px] font-canvasans font-light">Acne Treatment</h1>
                                </div>
                            </div>

                            {/* Status */}
                            <div className=" flex items-center gap-[84px] pr-[24px]">
                                <div className="flex flex-col">
                                    <h1 className="text-[8.8px] font-canvasans">Status</h1>
                                    <h1 className="text-[#01cf2f] text-[9.9px] font-canvasans">Booking Confirmed - Details Collected</h1>
                                </div>
                                <div className="flex gap-[12px]">
                                    <div className="bg-black rounded-full">
                                        <MdElectricBolt className="text-white text-xs" />
                                    </div>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-[32px]">
                        <div className="h-[79.7px] w-full bg-white rounded-[9px] flex justify-between pl-[18px]">
                            <div className="flex">
                                <div className="flex space-x-[16px]">
                                    <div className="-space-y-2 flex flex-col justify-center items-center">
                                        <h1 className="text-[12.9px] font-montserrat">Wed</h1>
                                        <h1 className="text-[23px] font-semibold font-canvasans">28</h1>
                                    </div>
                                    <div className="border-r my-2 border-gray-300"></div>
                                </div>
                                <div className="space-y-3 pl-[16px] pt-[19px] mr-[52px]">
                                    <div className="space-y-[13px]">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">9:00 - 9:20</h1>
                                            </div>
                                            <div className="flex items-center gap-1 px-0.5 py-[0.5px] rounded-[3px]" style={{
                                                background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                            }}>
                                                <MdOutlineSync size={8} fill="white" />
                                                <p className="text-[5.8px] text-white font-canvasans">Repeat</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <GoClock className="w-[13px] h-[13px]" />
                                                <h1 className="text-[8.8px] font-canvasans font-semibold">Dr Parker - Pineland</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[19px] space-y-[12px]">
                                    <div className="flex items-center gap-1 ">
                                        <GoClock className="w-[13px] h-[13px]" />
                                        <h1 className="text-[8.8px] font-canvasans font-semibold">David Patient - New Patient</h1>
                                    </div>
                                    <h1 className="text-[8.8px] font-canvasans font-light">Acne Treatment</h1>
                                </div>
                            </div>

                            {/* Status */}
                            <div className=" flex items-center gap-[84px] pr-[24px]">
                                <div className="flex flex-col">
                                    <h1 className="text-[8.8px] font-canvasans">Status</h1>
                                    <h1 className="text-[#01cf2f] text-[9.9px] font-canvasans">Booking Confirmed - Details Collected</h1>
                                </div>
                                <div className="flex gap-[12px]">
                                    <div className="bg-black rounded-full">
                                        <MdElectricBolt className="text-white text-xs" />
                                    </div>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* QuickActions Modal */}
            {
                showQuickActions && (
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-30"> {/* Light grayish overlay */}
                        <QuickActionModal toggleQuickActions={toggleQuickActions} />
                    </div>
                )
            }

            {/* BookingDetails Modal */}
            {
                showBookingDetailsModal && (
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-30"> {/* Light grayish overlay */}
                        <BookingDetailsModal toggleBookingDetailsModal={toggleBookingDetailsModal} />
                    </div>
                )
            }

            {/* FlowkiAiModal Modal */}
            {
                showFlowkiAiModal && (
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-30"> {/* Light grayish overlay */}
                        <BookingFlowkiModal toggleFlowkiAiModal={toggleFlowkiAiModal} />
                    </div>
                )
            }
        </div>
    )
}

export default AllBookings
