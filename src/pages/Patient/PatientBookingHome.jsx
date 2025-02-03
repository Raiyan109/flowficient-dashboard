import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import patientHeaderAvatar from "../../assets/patientHeaderAvatar.png";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSync } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";

const PatientBookingHome = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate((prevDate) => {
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
                    className={`w-6 h-6 flex items-center justify-center rounded-md text-[17px]  font-canvasans cursor-pointer ${isSelected ? "bg-black text-white" : "text-[#3c3c3c]"
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
            {/* Upper side (Header) */}
            <div className="flex justify-between items-center pt-[47px] pl-[38px] pr-[50px]">
                {/* Left (Header) */}
                <div className="flex items-center gap-[33px]">
                    <img src={patientHeaderAvatar} alt="" />
                    <div>
                        <h1 className="text-[24px] font-canvasans mb-[7px]">
                            Dr. P Parker
                        </h1>
                        <h2 className="font-canvasans text-[9.7px] font-semibold text-[#3f3f3f] mb-[6px]">
                            Dentist - Stellenbosch University
                        </h2>
                        <h2 className="font-canvasans text-[8.9px] text-[#515151]">
                            1 Rachel Bloch Ave, Cape Town, 7500
                        </h2>
                    </div>
                </div>

                {/* Right (Header) */}
                <div className="flex items-center gap-[9px]">
                    <div className="bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center">
                        <IoLogoWhatsapp className="w-[15.3px] h-[15.3px]" />
                    </div>
                    <div className="bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center">
                        <BsInstagram className="w-[15.3px] h-[15.3px]" />
                    </div>
                    <div className="bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center">
                        <FaFacebook className="w-[15.3px] h-[15.3px]" />
                    </div>
                </div>
            </div>

            {/* Main part */}
            <div className="flex gap-[21px] pl-[48px] pt-[55px]">
                {/* Left side */}
                <div className="w-[758.3px] h-[552.2px] rounded-[25px] bg-[#fafafa] flex">
                    {/* Appointment details */}
                    <div className="w-2/5  border-r pt-[38px] pl-[34px]">
                        <h1 className="text-[16px] font-canvasans font-bold max-w-[100px]">
                            Dental Appointments
                        </h1>
                        <h3 className="text-[10.7px] mt-[18px] max-w-[200px]">
                            Book your next dental appointment with Dr. Parker. We cannot wait
                            to see you. Make a booking as soon as possible to avoid
                            disappointment
                        </h3>

                        <div className="mt-[39px] flex flex-col gap-[9px]">
                            <div className="flex items-center gap-[8px]">
                                <GoClock />
                                <h1 className="text-[12px] font-canvasans font-semibold">
                                    15 mins
                                </h1>
                            </div>
                            <div className="flex items-center gap-[8px]">
                                <IoLocationOutline />
                                <h1 className="text-[12px] font-canvasans font-semibold">
                                    Pinelands, Cape Town
                                </h1>
                            </div>
                        </div>

                        <div className="pt-[62px] flex flex-col gap-[16px]">
                            <div className="flex items-center justify-center w-[215px] h-[34.7px] rounded-[100px] bg-[#efefef]">
                                <BiError />
                                <h4 className="text-[10.2px] text-[#100f0d]">
                                    Emergency Booking
                                </h4>
                            </div>
                            <div className="flex items-center justify-center w-[215px] h-[34.7px] rounded-[100px] bg-[#efefef]">
                                <MdOutlineSync />
                                <h4 className="text-[10.2px] text-[#100f0d]">
                                    Repeat Bookingt
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="w-3/5">
                        <h1 className="font-canvasans text-[24px] pt-[36px] pl-[36px]">
                            Select Date
                        </h1>
                        {/* Month Changer Slider */}
                        <div className="ml-[36px] mr-[57px] mt-[24px] flex  justify-center flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <button onClick={handlePrevMonth} className="p-2">
                                    <FaChevronLeft className="text-[#a6a6a6] text-xs" />
                                </button>
                                <div className="text-[12.9px] font-montserrat">
                                    {currentDate.toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </div>
                                <button onClick={handleNextMonth} className="p-2">
                                    <FaChevronRight className="text-[#a6a6a6] text-xs" />
                                </button>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-x-[11px] gap-y-[27px]">
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                                    (day) => (
                                        <div
                                            key={day}
                                            className="text-center text-[11px] font-canvasans"
                                        >
                                            {day}
                                        </div>
                                    )
                                )}
                                {renderCalendar()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side ( Let's get started) */}
                <div className="w-[414.5px] h-[549px] rounded-[25px] bg-[rgba(250,250,250,0.8)] font-canvasans flex flex-col justify-between">
                    <div>
                        <h1 className="text-[21px] pt-[22px] pl-[22px]  font-semibold">
                            Lets Get Started
                        </h1>

                        {/* Inputs */}
                        <div className="mt-[37px] space-y-[12px] pl-[21px]">
                            <textarea
                                type="text"
                                className="border-none outline-none bg-[#fafafa] rounded-[13px] w-[372.3px] h-[83.5px] px-3 placeholder:text-[12px] placeholder:text-[#000000] pt-[25px] pl-[22px]"
                                placeholder="Reason for visit?"
                            />

                            {/* Age */}
                            <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="border-none outline-none bg-[#fafafa] rounded-[10px] w-[372.3px] h-[61.4px] px-5 text-[12px]"
                            >
                                <option value="" disabled>
                                    Age Category
                                </option>
                                <option value="option1">Age Category</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                            {/* Location */}
                            <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="border-none outline-none bg-[#fafafa] rounded-[10px] w-[372.3px] h-[61.4px] px-5 text-[12px]"
                            >
                                <option value="" disabled>
                                    Select Location
                                </option>
                                <option value="option1">Select Location</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-[20px] mb-[21px]">
                        <button
                            className="w-[372.3px] h-[47.7px] flex items-center justify-center rounded-[7px] text-[12.5px] text-white"
                            style={{
                                background:
                                    "radial-gradient(circle at 0% 0%, #5170ff, #d83bff)",
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientBookingHome;
