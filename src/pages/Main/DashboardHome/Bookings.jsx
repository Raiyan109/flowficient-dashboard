import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            setSelectedMonth(newDate.getMonth());
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            setSelectedMonth(newDate.getMonth());
            return newDate;
        });
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
            calendarDays.push(
                <div key={day} className="w-8 h-8 flex items-center justify-center">
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
                            <FaChevronLeft className="text-gray-600" />
                        </button>
                        <div className="flex items-center gap-2">
                            {months.map((month, index) => (
                                <div
                                    key={month}
                                    onClick={() => setSelectedMonth(index)}
                                    className={`px-3 py-1 rounded-full cursor-pointer ${selectedMonth === index
                                        ? "bg-black text-white"
                                        : "bg-transparent text-gray-600"
                                        }`}
                                >
                                    {month.slice(0, 3)}
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNextMonth} className="p-2">
                            <FaChevronRight className="text-gray-600" />
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="text-center text-sm text-gray-600">
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