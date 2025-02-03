import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import patientHeaderAvatar from '../../assets/patientHeaderAvatar.png'
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSync } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { useState } from "react";

const PatientBookingHome = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            return newDate;
        });
    };

    const handleDateClick = (day) => {
        const newDate = new Date(currentDate);
        newDate.setDate(day);
        setSelectedDate(newDate);
    };

    // ===============FUNCTION==================
    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDay = firstDayOfMonth.getDay();

        const calendarDays = [];
        for (let i = 0; i < startingDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            calendarDays.push(
                <div
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`w-6 h-6 flex items-center justify-center rounded-md text-[10.7px]  font-canvasans cursor-pointer ${isSelected ? "bg-black text-white" : "text-[#3c3c3c]"
                        }`}
                >
                    {day}
                </div>
            );
        }

        return calendarDays;
    };
    return (
        <div className="">
            {/* Upper side */}
            <div className="flex justify-between items-center pt-[47px] pl-[38px] pr-[50px]">
                {/* Left */}
                <div className="flex items-center gap-[33px]">
                    <img src={patientHeaderAvatar} alt="" />
                    <div>
                        <h1 className="text-[24px] font-canvasans mb-[7px]">Dr. P Parker</h1>
                        <h2 className="font-canvasans text-[9.7px] font-semibold text-[#3f3f3f] mb-[6px]">Dentist - Stellenbosch University</h2>
                        <h2 className="font-canvasans text-[8.9px] text-[#515151]">1 Rachel Bloch Ave, Cape Town, 7500</h2>
                    </div>
                </div>

                {/* Right */}
                <div className='flex items-center gap-[9px]'>
                    <div className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                        <IoLogoWhatsapp className='w-[15.3px] h-[15.3px]' />
                    </div>
                    <div className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                        <BsInstagram className='w-[15.3px] h-[15.3px]' />
                    </div>
                    <div className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                        <FaFacebook className='w-[15.3px] h-[15.3px]' />
                    </div>
                </div>
            </div>

            {/* Calendar part */}
            <div className="flex gap-[21px] pl-[48px] pt-[55px]">
                <div className="w-[758.3px] h-[552.2px] rounded-[25px] bg-[#fafafa] flex">
                    <div className="w-2/5  border-r pt-[38px] pl-[34px]">
                        <h1 className="text-[16px] font-canvasans font-bold max-w-[100px]">Dental Appointments</h1>
                        <h3 className="text-[10.7px] mt-[18px] max-w-[200px]">Book your next dental appointment with Dr. Parker. We cannot wait to see you. Make a booking as soon as possible to avoid disappointment</h3>

                        <div className="mt-[39px] flex flex-col gap-[9px]">
                            <div className="flex items-center gap-[8px]">
                                <GoClock />
                                <h1 className="text-[12px] font-canvasans font-semibold">15 mins</h1>
                            </div>
                            <div className="flex items-center gap-[8px]">
                                <IoLocationOutline />
                                <h1 className="text-[12px] font-canvasans font-semibold">Pinelands, Cape Town</h1>
                            </div>
                        </div>

                        <div className="pt-[62px] flex flex-col gap-[16px]">
                            <div className="flex items-center justify-center w-[215px] h-[34.7px] rounded-[100px] bg-[#efefef]">
                                <BiError />
                                <h4 className="text-[10.2px] text-[#100f0d]">Emergency Booking</h4>
                            </div>
                            <div className="flex items-center justify-center w-[215px] h-[34.7px] rounded-[100px] bg-[#efefef]">
                                <MdOutlineSync />
                                <h4 className="text-[10.2px] text-[#100f0d]">Repeat Bookingt</h4>
                            </div>
                        </div>
                    </div>
                    {/* Calendar */}
                    <div className="w-3/5 bg-pink-400">
                        <h1 className="text-[24px] font-bold pt-[36px] pl-[36px] font-canvasans">Select Date</h1>
                        <div className="grid grid-cols-7 gap-1">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                                <div key={day} className="text-center text-[7.4px] font-canvasans">
                                    {day}
                                </div>
                            ))}
                            {renderCalendar()}
                        </div>
                    </div>
                </div>
                <div className="w-[414.5px] h-[549px] rounded-[25px] bg-[#fafafa]">

                </div>
            </div>
        </div>
    )
}

export default PatientBookingHome
