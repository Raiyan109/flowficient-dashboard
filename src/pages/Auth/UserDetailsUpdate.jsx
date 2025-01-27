import { useState } from "react";
import { Link } from "react-router-dom"


const UserDetailsUpdate = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white border border-formBorder rounded-2xl pt-5 pb-14 px-7">
                    <div className="">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="font-canvasans font-bold text-lg">Naeem Hashim</h1>

                        </div>
                        <h4 className="font-canvasans font-extralight text-[#aaaaaa] text-sm">Have your details changed? Update us below</h4>
                    </div>
                    <div className="border-b border-[#b9b9b9] w-full pt-4"></div>

                    <form className="pt-8 space-y-6 mb-4">
                        {/* First Name and Last Name */}
                        <div className="flex space-x-4">
                            <div className="flex flex-col space-y-1 w-1/2">
                                <label className="font-canvasans text-xs font-extralight">First Name</label>
                                <input
                                    type="text"
                                    className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3"
                                />
                            </div>
                            <div className="flex flex-col space-y-1 w-1/2">
                                <label className="font-canvasans text-xs font-extralight">Last Name</label>
                                <input
                                    type="text"
                                    className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3"
                                />
                            </div>
                        </div>

                        {/* Mobile Number and Home Number */}
                        <div className="flex space-x-4">
                            <div className="flex flex-col space-y-2 w-1/2">
                                <label className="font-canvasans text-xs font-extralight">Mobile Number</label>
                                <select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-5 text-gray-700"
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2 w-1/2">
                                <label className="font-canvasans text-xs font-extralight">Home Number</label>
                                <select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-5 text-gray-700"
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        {/* Work Number */}
                        <div className="flex flex-col space-y-2 w-1/2">
                            <label className="font-canvasans text-xs font-extralight">Work Number</label>
                            <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-5 text-gray-700"
                            >
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col space-y-1">
                            <label className="font-canvasans text-xs font-extralight">Email Address</label>
                            <input
                                type="email"
                                className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3 w-full"
                                placeholder="naeemhash91@gmail.com"
                            />
                        </div>


                        <div className="flex flex-col space-y-1">
                            <label className="font-canvasans text-xs font-extralight">Residential Address</label>
                            <input
                                type="text"
                                className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3 w-full"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex flex-col space-y-1 w-1/2">
                                <label className="font-canvasans text-xs font-extralight">City</label>
                                <input
                                    type="text"
                                    className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3"
                                />
                            </div>
                            <div className="flex flex-col space-y-1 w-1/2">
                                <label className="font-canvasans text-xs font-extralight">Postal Code</label>
                                <input
                                    type="number"
                                    className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3"
                                />
                            </div>
                        </div>

                        {/* Next Button */}
                        <Link to="/auth/user-details-2" className="block">
                            <button className="bg-black text-white font-gordita text-xs rounded-lg h-9 w-full">
                                Update
                            </button>
                        </Link>
                    </form>

                    <div className="flex flex-col items-center justify-center text-sm">
                        <h1 className="text-[#515151] text-center font-canvasans">By onboarding you agree to the   <Link to='/auth/sign-up' className="text-[#8c52ff] font-bold">Terms and Conditions.</Link></h1>
                        <Link to='/auth/sign-up' className="text-[#8c52ff] font-bold text-center">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsUpdate
