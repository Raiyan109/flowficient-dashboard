import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SetAppointmentModal from "./SetAppointmentModal";

const Bookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [checked, setChecked] = useState({
        practice: false,
        professional: false,
    });
    const [showSetAppointment, setShowSetAppointment] = useState(false)
    const [selectedView, setSelectedView] = useState("Week");

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setChecked((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

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

    const toggleSetAppointmentsModal = () => {
        setShowSetAppointment(!showSetAppointment)
    }

    // Function to handle click outside the modal
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleSetAppointmentsModal();
        }
    };

    // Handle Updating the selectedView state
    const handleViewChange = (view) => {
        setSelectedView(view);
    };


    // Functions for generating Weeks ===============FUNCTION==================
    const getStartOfWeek = (date) => {
        const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
        const diff = day >= 2 ? date.getDate() - (day - 2) : date.getDate() - (day + 5); // Adjust to start from Tuesday
        return new Date(date.setDate(diff));
    };

    const formatDayName = (date) => {
        return date.toLocaleString("default", { weekday: "short" });
    };

    const formatDateNumber = (date) => {
        return date.getDate().toString().padStart(2, "0");
    };

    const generateWeekDates = (selectedDate) => {
        const startOfWeek = getStartOfWeek(new Date(selectedDate)); // Start from Tuesday
        const weekDates = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            weekDates.push(date);
        }

        return weekDates;
    };
    return (
        <div className="flex h-screen">
            {/* Left side */}
            <div className="w-1/4 space-y-[10px]">
                <div className="w-[270.8px] h-[265.7px] rounded-[25px] bg-[#f1f1f1] p-4">
                    {/* Month Changer Slider */}
                    <div className="flex items-center justify-between mb-4">
                        <button onClick={handlePrevMonth} className="p-2">
                            <FaChevronLeft className="text-[#a6a6a6] text-xs" />
                        </button>
                        <div className="text-[8.6px] font-semibold font-montserrat">
                            {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                        </div>
                        <button onClick={handleNextMonth} className="p-2">
                            <FaChevronRight className="text-[#a6a6a6] text-xs" />
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="text-center text-[7.4px] font-canvasans">
                                {day}
                            </div>
                        ))}
                        {renderCalendar()}
                    </div>
                </div>
                <div className="w-[270.8px] h-[190.9px] rounded-[25px] bg-[#f1f1f1]">
                    <h1 className="text-[13px] pt-[29px] pl-[16px] font-canvasans font-bold pb-[23px]">Calendar</h1>
                    <div className="flex flex-col pl-[16px] gap-[15px]">
                        {/* Practice Checkbox */}
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="practice"
                                checked={checked.practice}
                                onChange={handleCheckboxChange}
                                className="w-[15.9px] h-[15.9px] accent-[#8c52ff] rounded"
                            />
                            <span className="text-[#3f3f3f] font-canvasans text-[10.7px]">Dr. A Parkar</span>
                        </label>

                        {/* Professional Checkbox */}
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="practice"
                                checked={checked.practice}
                                onChange={handleCheckboxChange}
                                className="w-[15.9px] h-[15.9px] accent-[#8c52ff] rounded"
                            />
                            <span className="text-[#3f3f3f] font-canvasans text-[10.7px]">Dr. B Abrahams</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="practice"
                                checked={checked.practice}
                                onChange={handleCheckboxChange}
                                className="w-[15.9px] h-[15.9px] accent-[#8c52ff] rounded"
                            />
                            <span className="text-[#3f3f3f] font-canvasans text-[10.7px]">Dr. D Henkings</span>
                        </label>
                    </div>
                </div>
                <div className="w-[270.8px] h-[168.9px] rounded-[25px]"
                    style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }}
                >
                    <div className="flex items-center pt-[17px] pl-[19px] gap-[6px]">
                        <RiSparklingFill className="text-[9px] text-white" />
                        <h1 className="font-canvasans text-[9px] text-white">Quick Actions</h1>
                    </div>
                    <div className="flex flex-wrap gap-x-[5px] gap-y-[13px] pl-[16px] pt-[16px]">
                        <div className="bg-[rgba(250,250,250,0.5)] h-[16.6px] w-[100.8px] font-montserrat text-[4.6px] rounded-[38px] flex items-center justify-center text-white">
                            Earliest available appointment
                        </div>
                        <div className="bg-[rgba(250,250,250,0.5)] h-[16.6px] w-[100.8px] font-montserrat text-[4.6px] rounded-[38px] flex items-center justify-center text-white">
                            Next appointment details
                        </div>
                        <div className="bg-[rgba(250,250,250,0.5)] h-[16.6px] w-[100.8px] font-montserrat text-[4.6px] rounded-[38px] flex items-center justify-center text-white">
                            Cancel next appointment
                        </div>
                        <div className="bg-[rgba(250,250,250,0.5)] h-[16.6px] w-[100.8px] font-montserrat text-[4.6px] rounded-[38px] flex items-center justify-center text-white">
                            Earliest available appointment
                        </div>
                        <div className="bg-[rgba(250,250,250,0.5)] h-[16.6px] w-[100.8px] font-montserrat text-[4.6px] rounded-[38px] flex items-center justify-center text-white">
                            Next appointment details
                        </div>
                        <div className="bg-[rgba(250,250,250,0.5)] h-[16.6px] w-[100.8px] font-montserrat text-[4.6px] rounded-[38px] flex items-center justify-center text-white">
                            Cancel next appointment
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="w-3/4">
                <div className="w-[866.8px] h-[645.9px] rounded-[25px] bg-[#f1f1f1]">
                    {/* Upper filters and Month name === */}
                    <div className="flex justify-between pt-[23px] px-[29px]">
                        <div className="flex items-center gap-[13px]">
                            <h1 className="text-[20px] font-canvasans font-bold">{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h1>
                            <div className="flex items-center">
                                <SlArrowLeft size={13} />
                                <SlArrowRight size={13} />
                            </div>
                        </div>

                        {/* Filters of day and dates */}
                        <div className="flex items-center h-[28.6px] font-gordita gap-[15px]">
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleViewChange("Day")}
                                    className={`text-[6.1px] px-[10px] py-[10px] rounded-md w-[87.7px] h-[28px] ${selectedView === "Day" ? "bg-black text-white" : "bg-white text-black"
                                        }`}
                                >
                                    Day
                                </button>
                                <button
                                    onClick={() => handleViewChange("Week")}
                                    className={`text-[6.1px] px-[10px] py-[10px] rounded-md w-[87.7px] h-[28px] ${selectedView === "Week" ? "bg-black text-white" : "bg-white text-black"
                                        }`}
                                >
                                    Week
                                </button>
                                <button
                                    onClick={() => handleViewChange("Month")}
                                    className={`text-[6.1px] px-[10px] py-[10px] rounded-md w-[87.7px] h-[28px] ${selectedView === "Month" ? "bg-black text-white" : "bg-white text-black"
                                        }`}
                                >
                                    Month
                                </button>
                            </div>
                            <button className="w-[106.6px] h-[28.6px] bg-black text-white rounded-[5px] flex gap-1 items-center justify-center" onClick={toggleSetAppointmentsModal}>
                                <FaPlus className="text-white text-[7.3px]" />
                                <h1 className="font-gordita text-[7.3px]">Add task</h1>
                            </button>
                        </div>
                    </div>

                    {/* Days name of week=========== */}
                    <div className="pt-[63px] pl-[48px] flex items-center gap-[9px]">
                        {generateWeekDates(selectedDate || currentDate).map((date, index) => {
                            const isSelected =
                                selectedDate &&
                                date.toDateString() === selectedDate.toDateString();

                            return (
                                <div
                                    key={index}
                                    className={`w-[107.4px] h-[74.2px] rounded-[15px] flex flex-col items-center justify-center -space-y-2 ${isSelected
                                        ? "bg-gradient-to-br from-[#5170ff] to-[#d83bff]"
                                        : "bg-white"
                                        }`}
                                >
                                    <h1
                                        className={`text-[10.6px] font-montserrat ${isSelected ? "text-gray-200" : "text-gray-500"
                                            }`}
                                    >
                                        {formatDayName(date)}
                                    </h1>
                                    <h1
                                        className={`text-[19px] font-canvasans font-bold ${isSelected ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {formatDateNumber(date)}
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className="pt-[63px] pl-[48px] flex items-center gap-[9px]">
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px] bg-white flex flex-col items-center justify-center -space-y-2">
                            <h1 className="text-gray-500 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px]  flex flex-col items-center justify-center -space-y-2" style={{
                            background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                        }}>
                            <h1 className="text-gray-200 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px] bg-white flex flex-col items-center justify-center -space-y-2">
                            <h1 className="text-gray-500 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px] bg-white flex flex-col items-center justify-center -space-y-2">
                            <h1 className="text-gray-500 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px] bg-white flex flex-col items-center justify-center -space-y-2">
                            <h1 className="text-gray-500 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px] bg-white flex flex-col items-center justify-center -space-y-2">
                            <h1 className="text-gray-500 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>
                        <div className="w-[107.4px] h-[74.2px] rounded-[15px] bg-white flex flex-col items-center justify-center -space-y-2">
                            <h1 className="text-gray-500 text-[10.6px] font-montserrat">Wed</h1>
                            <h1 className="text-[19px] font-canvasans font-bold">01</h1>
                        </div>

                    </div> */}

                    {/* Events ================= */}
                    {/* Render the selected view */}
                    {selectedView === "Day" && (
                        <div className="p-4">
                            <h2 className="text-[16px] font-bold">Day View</h2>
                            {/* Add your Day view implementation here */}
                        </div>
                    )}
                    {selectedView === "Month" && (
                        <div className="p-4">
                            <h2 className="text-[16px] font-bold">Month View</h2>
                            {/* Add your Month view implementation here */}
                            <div className="grid grid-cols-7 gap-1">
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="text-center text-[7.4px] font-canvasans">
                                        {day}
                                    </div>
                                ))}
                                {renderCalendar()}
                            </div>
                        </div>
                    )}
                    {selectedView === 'Week' && (
                        <div className="w-[866.8px] h-[440.1px] rounded-[25px] bg-white mt-[13px]">
                            <div className="pt-[55px] relative">
                                <div className=" pl-[3px] flex items-center gap-[5px] ">
                                    <h3 className="text-[#515151] text-[8.6px]">8 am</h3>
                                    <div className="border-b border-[#b9b7b7] flex-grow h-[1px]"></div>
                                </div>
                                <div className="bg-[#8c52ff] rounded-[10px] w-[107.4px] h-[72.5px] absolute top-16 left-7">
                                    <h1 className="text-white text-[5.6px] font-montserrat pt-[7px] pl-[9px]">Naeem Hashim</h1>
                                    <div className="w-[39.7px] h-[8px] bg-[rgba(250,250,250,0.5)] text-[3.3px] text-white font-montserrat flex items-center justify-center rounded-[38px] ml-[9px] mt-[3px]">
                                        Checkup
                                    </div>
                                    <h1 className="text-[3.6px] text-white absolute bottom-[19px] pl-[9px]">8 am  - 9 am   <span className="font-bold">Pinelands</span></h1>
                                </div>
                            </div>
                            <div className="pt-[66px] pl-[3px] flex items-center gap-[5px]">
                                <h3 className="text-[#515151] text-[8.6px]">9 am</h3>
                                <div className="border-b border-[#b9b7b7] flex-grow h-[1px]"></div>
                            </div>
                            <div className="pt-[66px] pl-[3px] flex items-center gap-[5px]">
                                <h3 className="text-[#515151] text-[8.6px]">10 am</h3>
                                <div className="border-b border-[#b9b7b7] flex-grow h-[1px]"></div>
                            </div>
                            <div className="pt-[66px] pl-[3px] flex items-center gap-[5px]">
                                <h3 className="text-[#515151] text-[8.6px]">11 am</h3>
                                <div className="border-b border-[#b9b7b7] flex-grow h-[1px]"></div>
                            </div>
                            <div className="pt-[66px] pl-[3px] flex items-center gap-[5px]">
                                <h3 className="text-[#515151] text-[8.6px]">12 am</h3>
                                <div className="border-b border-[#b9b7b7] flex-grow h-[1px]"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Set Appointment Modal */}
            {showSetAppointment && (
                <div
                    className="fixed inset-0 bg-gray-100 bg-opacity-30"
                    onClick={handleOverlayClick} // Add the overlay click handler here
                >
                    <SetAppointmentModal
                        toggleSetAppointmentsModal={toggleSetAppointmentsModal}
                    />
                </div>
            )}
        </div>
    );
};

export default Bookings;