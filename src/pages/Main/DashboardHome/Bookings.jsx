import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";

const Bookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [checked, setChecked] = useState({
        practice: false,
        professional: false,
    });

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
        <div className="flex h-screen">
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
            <div className="w-3/4">
                <div className="w-[866.8px] h-[645.9px] rounded-[25px] bg-[#f1f1f1]">

                </div>
            </div>
        </div>
    );
};

export default Bookings;