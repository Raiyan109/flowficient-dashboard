import { useState } from "react";
import DatePicker from "react-datepicker";
import { GoClock, GoPerson } from "react-icons/go";
import { MdOutlineSync } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const SetAppointmentModal = ({ toggleSetAppointmentsModal }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="h-screen fixed inset-0 bg-gray-100 bg-opacity-30 flex justify-center items-center">
            <div className="bg-[#fafafa] h-[747.9px] w-[507.7px] rounded-[25px] space-y-[25px]">
                <h1 className="text-[24px] font-canvasans font-bold pt-[31px] pl-[33px]">Set an appointment</h1>

                <form className="pl-[26px]">
                    {/* First Name and Last Name */}
                    <div className="flex space-x-4">
                        <select
                            className="w-[218.8px] h-[49.2px] bg-[#fafafa] border border-[#dadada] rounded-md px-3 py-2 focus:outline-none focus:border-[#a0a0a0]"
                        >
                            <option value="option1">Select Location</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <select
                            className="w-[218.8px] h-[49.2px] bg-[#fafafa] border border-[#dadada] rounded-md px-3 py-2 focus:outline-none focus:border-[#a0a0a0]"
                        >
                            <option value="option1">Select Doctor</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    {/* Mobile Number and Home Number */}
                    <div className="flex space-x-4 mt-[17px]">
                        <div className=" w-[218.8px]">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="EEEE dd MMMM"
                                className="w-full h-[49.2px] bg-[#fafafa] border border-[#dadada] px-3 py-2 rounded-md text-gray-700 focus:outline-none cursor-pointer"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <DatePicker
                                selected={startTime}
                                onChange={(date) => setStartTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={60}
                                timeCaption="Start"
                                dateFormat="HH:mm"
                                className="w-[93.2px] h-[48px] bg-[#fafafa] border border-[#dadada] px-3  rounded-md text-gray-700 focus:outline-none cursor-pointer"
                            />
                            <DatePicker
                                selected={endTime}
                                onChange={(date) => setEndTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={60}
                                timeCaption="End"
                                dateFormat="HH:mm"
                                className="w-[93.2px] h-[48px] bg-[#fafafa] border border-[#dadada] px-3  rounded-md text-gray-700 focus:outline-none cursor-pointer"
                            />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SetAppointmentModal
