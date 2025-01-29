import { useState } from "react";
import { getMonth } from "../../../utils/getMonth";
import Month from "../../../components/Calendars/Month";

const Bookings = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-pink-400"></div>
            <div className="w-3/4 bg-purple-400">
                <Month month={currentMonth} />
            </div>
        </div>
    );
};

export default Bookings;