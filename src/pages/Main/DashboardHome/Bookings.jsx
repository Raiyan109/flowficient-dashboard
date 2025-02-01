import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bookings = () => {
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

                </div>
                <div className="w-[270.8px] h-[168.9px] rounded-[25px] bg-[#f1f1f1]"
                    style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }}
                >

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