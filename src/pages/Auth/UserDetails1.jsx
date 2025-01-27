import { useState } from "react";
import { Link } from "react-router-dom"


const UserDetails1 = () => {
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
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white border border-formBorder rounded-2xl pt-5 pb-14 px-7">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="font-canvasans font-bold text-lg">Almost there</h1>
                            <h1 className="text-xs font-bold">1/2</h1>
                        </div>
                        <h4 className="font-canvasans font-extralight text-[#515151] text-md">Welcome back - Please enter your details</h4>
                    </div>
                    <div className="border-b border-[#b9b9b9] w-full pt-4"></div>

                    <form className="pt-8 space-y-6 pb-3">
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-sm font-canvasans">Is this account for a practice or an individual professional?</h1>
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
                                    <span className="text-gray-700 font-canvasans text-sm">Practice</span>
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
                                    <span className="text-gray-700 font-canvasans text-sm">Professional</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="font-canvasans text-xs font-extralight">Practice Name</label>
                            <input type="text" className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="font-canvasans text-xs font-extralight">First Name</label>
                            <input type="text" className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="font-canvasans text-xs font-extralight">Last Name</label>
                            <input type="text" className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3" />
                        </div>

                        <div className="flex flex-col space-y-3">
                            <h1 className="text-sm font-canvasans">Is this account for more than one location?</h1>
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
                                    <span className="text-gray-700 font-canvasans text-sm">Yes</span>
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
                                    <span className="text-gray-700 font-canvasans text-sm">No</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="font-canvasans text-xs font-extralight">Select the number of your locations</label>
                            <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-5 text-gray-700"
                            >
                                <option value="" disabled>

                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <Link to='/auth/user-details-2' className="block">
                            <button className="bg-black text-white font-gordita text-xs rounded-lg h-9 w-full">
                                Next
                            </button>
                        </Link>
                    </form>
                    <div className="flex flex-col items-center justify-center text-sm">
                        <h1 className="text-[#515151] text-center font-canvasans">By signing up you agree to the   <Link to='/auth/sign-up' className="text-[#8c52ff] font-bold">Terms and Conditions.</Link></h1>
                        <Link to='/auth/sign-up' className="text-[#8c52ff] font-bold text-center">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails1
