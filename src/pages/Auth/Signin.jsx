import { useState } from "react";
import { Link } from "react-router-dom"
import logoImg from '../../assets/logo.png'

const Signin = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-start justify-center gap-96">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="bg-white border border-formBorder rounded-2xl pt-5 pb-14 px-7">
                        {/* Logo */}
                        <div className="w-28 pt-1 pb-5">
                            <img src={logoImg} alt="" className='object-contain block' />
                        </div>

                        <div className="">
                            <h1 className="font-canvasans font-bold text-lg">Sign in</h1>
                            <h4 className="font-canvasans font-extralight text-[#515151] text-lg">Welcome back - Please enter your details</h4>
                        </div>
                        <div className="border-b border-[#b9b9b9] w-full pt-4"></div>

                        <form className="pt-8 space-y-6 pb-3">
                            <div className="flex flex-col space-y-1">
                                <label className="font-canvasans text-xs font-extralight">Email Address</label>
                                <input type="text" className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="font-canvasans text-xs font-extralight">Password</label>
                                <input type="text" className="border-none outline-none bg-[#f3f3f3] rounded-xl h-9 px-3" />
                            </div>
                            <button className="bg-black text-white font-gordita text-xs rounded-lg h-9 w-full">
                                Sign In
                            </button>

                        </form>
                        <h1 className="text-[#515151] text-center font-canvasans">Don't have an account? <Link to='/auth/sign-up' className="text-[#8c52ff] font-bold">Sign Up</Link></h1>
                    </div>
                </div>
                <div className="flex-1 relative pt-14">
                    <h1 className="text-6xl max-w-md font-montserrat">Put your practice on</h1>
                    <h1 className="text-6xl font-montserrat italic float-end absolute top-44 left-44">Autopilot</h1>
                </div>
            </div>
        </div>
    )
}

export default Signin
