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
    const [checked, setChecked] = useState({
        practice: false,
        professional: false,
    });
    const [activeTab, setActiveTab] = useState("patientBooking");

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setChecked((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="h-screen fixed inset-0 bg-gray-100 bg-opacity-30 flex justify-center items-center">
            <div className="bg-[#fafafa] h-[747.9px] w-[507.7px] rounded-[25px] space-y-[25px] shadow-xl">
                <h1 className="text-[24px] font-canvasans font-bold pt-[31px] pl-[33px]">Set an appointment</h1>

                <form className="pl-[26px]">
                    {/* Location and Doctor select */}
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

                    {/* Date and Time select */}
                    <div className="flex space-x-4 mt-[17px] mb-[25px]">
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

                    {/* Checkboxes */}
                    <div className="flex flex-col space-y-3 mb-[34px]">
                        <div className="flex space-x-6">
                            {/* Practice Checkbox */}
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="practice"
                                    checked={checked.practice}
                                    onChange={handleCheckboxChange}
                                    className="w-3.5 h-3.5 accent-[#8c52ff] rounded"
                                />
                                <span className="text-gray-700 font-canvasans text-sm">Use Special Slots</span>
                            </label>

                            {/* Professional Checkbox */}
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="professional"
                                    checked={checked.professional}
                                    onChange={handleCheckboxChange}
                                    className="w-3.5 h-3.5 accent-[#8c52ff] rounded"
                                />
                                <span className="text-gray-700 font-canvasans text-sm">Reschedule time conflicts</span>
                            </label>
                        </div>
                    </div>

                    {/* All day & does not repeat */}
                    <div className="flex  justify-between pr-[23px]">
                        {/* Practice Checkbox */}
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="practice"
                                checked={checked.practice}
                                onChange={handleCheckboxChange}
                                className="w-3.5 h-3.5 accent-[#8c52ff] rounded"
                            />
                            <span className="text-gray-700 font-canvasans text-sm">All day</span>
                        </label>
                        <select
                            className="w-[317.9px] h-[49.2px] bg-[#fafafa] border border-[#dadada] text-[#dadada] rounded-md px-3 py-2 focus:outline-none focus:border-[#a0a0a0]"
                        >
                            <option value="option1">Does not repeat</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    {/* Patient bookng and slot booking Tab Navigation */}
                    <div className="flex items-start gap-5 mb-[33px] pt-[45px]">
                        {/* Quick Actions Tab */}
                        <div
                            className="flex flex-col gap-[4px] cursor-pointer"
                            onClick={() => setActiveTab("patientBooking")}
                        >
                            <h1
                                className={`text-[12px] font-bold font-canvasans ${activeTab === "patientBooking" ? "text-black" : "text-[#757575]"
                                    }`}
                            >
                                Patient Booking
                            </h1>
                            {/* Border bottom for active tab */}
                            {activeTab === "patientBooking" && (
                                <div className="border-b-2 border-black"></div>
                            )}
                        </div>

                        {/* Scheduled Actions Tab */}
                        <div
                            className="flex flex-col gap-[4px] cursor-pointer"
                            onClick={() => setActiveTab("scheduledActions")}
                        >
                            <h1
                                className={`text-[12px] font-bold font-canvasans ${activeTab === "scheduledActions" ? "text-black" : "text-[#757575]"
                                    }`}
                            >
                                Book Slot/Event or Task
                            </h1>
                            {/* Border bottom for active tab */}
                            {activeTab === "scheduledActions" && (
                                <div className="border-b-2 border-black"></div>
                            )}
                        </div>
                    </div>

                    <div className="pr-[23px]">
                        {
                            activeTab === "patientBooking" ? (
                                <div className="">
                                    <select
                                        className="w-[454.4px] h-[49.2px] bg-[#fafafa] border border-[#dadada] rounded-md px-3 py-2  focus:outline-none focus:border-[#a0a0a0]"
                                    >
                                        <option value="option1">Select Patient</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>

                                    {/* Or select new patient */}
                                    <label className="flex items-center space-x-2 mt-[16px]">
                                        <input
                                            type="checkbox"
                                            name="practice"
                                            checked={checked.practice}
                                            onChange={handleCheckboxChange}
                                            className="w-3.5 h-3.5 accent-[#8c52ff] rounded"
                                        />
                                        <span className="text-gray-700 font-canvasans text-sm">Or select new patient</span>
                                    </label>

                                    {/* Names */}
                                    {/* First Name and Last Name */}
                                    <div className="flex space-x-4 mt-[20px]">
                                        <div className="flex flex-col space-y-1 w-1/2">
                                            <input
                                                type="text"
                                                className="  rounded-xl bg-[#fafafa] border border-[#dadada] px-3 h-[49.2px]"
                                                placeholder="First Name"
                                            />
                                        </div>

                                        <div className="flex flex-col space-y-1 w-1/2">
                                            <input
                                                type="text"
                                                className="  rounded-xl bg-[#fafafa] border border-[#dadada] px-3 h-[49.2px]"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Number and Home Number */}
                                    <div className="flex space-x-4 mt-[17px]">
                                        <div className="flex flex-col space-y-1 w-1/2">
                                            <input
                                                type="text"
                                                className="  rounded-xl bg-[#fafafa] border border-[#dadada] px-3 h-[49.2px]"
                                                placeholder="Mobile Number"
                                            />
                                        </div>

                                        <div className="flex flex-col space-y-1 w-1/2">
                                            <input
                                                type="text"
                                                className="  rounded-xl bg-[#fafafa] border border-[#dadada] px-3 h-[49.2px]"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center mt-[20px]">
                                        <button className="w-[445.7px] h-[45.7px] flex items-center justify-center rounded-[7px] text-[12.5px] text-white" style={{
                                            background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                                        }}>Create Appointment</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <select
                                        className="w-[218.8px] h-[49.2px] bg-[#fafafa] border border-[#dadada] rounded-md px-3 py-2 focus:outline-none focus:border-[#a0a0a0]"
                                    >
                                        <option value="option1">Select Location</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SetAppointmentModal
