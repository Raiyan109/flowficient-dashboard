import { GoClock, GoPerson } from "react-icons/go";
import { MdOutlineSync } from "react-icons/md";

const BookingDetailsModal = ({ toggleBookingDetailsModal }) => {
    return (
        <div className="h-screen fixed inset-0 bg-gray-100 bg-opacity-30 flex justify-center items-center">
            <div className="bg-[#fafafa] h-[535.4px] w-[507.7px] rounded-[25px] space-y-[25px]">
                <div className="flex justify-between">
                    <div className="flex items-center gap-[12px] pl-[31px] pt-[36px]">
                        <GoPerson />
                        <h1 className="font-canvasans text-[17px]">David Smith</h1>
                        <div className="flex items-center gap-1 px-1 py-0.5 rounded-[3px]" style={{
                            background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                        }}>

                            <p className="text-[7.3px] text-white font-canvasans">New Price</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] pr-[20px] pt-[25px]">
                        <button className="w-[94.4px] h-[17.9px] bg-[#f3f3f3] rounded-[5px] flex gap-1 items-center justify-center">
                            <GoPerson className=" text-[7.3px]" />
                            <h1 className="font-gordita text-[5.9px]">Add Patient</h1>
                        </button>
                        <button className="w-[94.4px] h-[17.9px] bg-[#f3f3f3] rounded-[5px] flex gap-1 items-center justify-center">
                            <GoPerson className=" text-[7.3px]" />
                            <h1 className="font-gordita text-[5.9px]">Add Patient</h1>
                        </button>
                    </div>
                </div>

                <div className="flex pl-[31px]">
                    <div className="flex space-x-[16px]">
                        <div className="-space-y-2 flex flex-col justify-center items-center">
                            <h1 className="text-[12.9px] font-montserrat">Wed</h1>
                            <h1 className="text-[23px] font-semibold font-canvasans">28</h1>
                        </div>
                        <div className="border-r my-4 border-gray-300"></div>
                    </div>
                    <div className="space-y-3 pl-[16px] pt-[10px] mr-[52px]">
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
                            <h1 className="text-[#01cf2f] text-[9.9px] font-canvasans">Booking Confirmed - Details Collected</h1>
                        </div>
                    </div>

                </div>

                <div className="border-b"></div>

                <div className=" pl-[31px] space-y-[24px]">
                    <div className="space-y-[11px]">
                        <h1 className="text-[10.7px]  font-canvasans font-bold">Reason for visit</h1>
                        <h1 className="text-[10.7px] text-[#515151] font-canvasans">Patient is experiencing a break out and would like acne treatment</h1>
                    </div>
                    <div className="flex gap-[50px]">
                        <div className="space-y-[11px]">
                            <h1 className="text-[10.7px]  font-canvasans font-bold">Symptoms</h1>
                            <h1 className="text-[10.7px] text-[#515151] font-canvasans">Red skin, rash, dizziness</h1>
                        </div>
                        <div className="space-y-[11px]">
                            <h1 className="text-[10.7px]  font-canvasans font-bold">Age</h1>
                            <h1 className="text-[10.7px] text-[#515151] font-canvasans">25 Yrs</h1>
                        </div>
                    </div>
                    <div className="flex gap-[50px]">
                        <div className="space-y-[11px]">
                            <h1 className="text-[10.7px]  font-canvasans font-bold">Allergies</h1>
                            <h1 className="text-[10.7px] text-[#515151] font-canvasans">No allergies</h1>
                        </div>
                        <div className="space-y-[11px]">
                            <h1 className="text-[10.7px]  font-canvasans font-bold">Medical Aid</h1>
                            <h1 className="text-[10.7px] text-[#515151] font-canvasans">Discovery Health</h1>
                        </div>
                    </div>
                    <div className="space-y-[11px]">
                        <h1 className="text-[10.7px]  font-canvasans font-bold">Notes</h1>
                        <h1 className="text-[10.7px] text-[#515151] font-canvasans">The patient has requested to bring their partner with</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetailsModal
