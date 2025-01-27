import { useRef } from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const OTP = () => {
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        // Move to the next input if a digit is entered
        if (value.length === 1 && index < 3) {
            inputRefs.current[index + 1].focus();
        }

        // Prevent entering more than one digit
        if (value.length > 1) {
            e.target.value = value.slice(0, 1);
        }
    };

    const handleKeyDown = (e, index) => {
        // Handle Backspace to move to the previous input
        if (e.key === "Backspace" && index > 0 && e.target.value === "") {
            inputRefs.current[index - 1].focus();
        }
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className=" border border-formBorder rounded-2xl pt-5 pb-14 px-7 w-96" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="flex items-center justify-center">
                        <img src={logoImg} alt="" className='w-36 h-36 object-contain' />
                    </div>

                    <form className="pt-8 space-y-6 mb-4">
                        <h1 className='font-canvasans font-bold text-lg text-center'>OTP Verification</h1>
                        <div className="flex space-x-4 justify-center">
                            {Array(4)
                                .fill("")
                                .map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        onChange={(e) => handleInputChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="w-12 h-12 border border-[#757575] rounded-lg text-center text-xl outline-none focus:ring-2 focus:ring-[#757575] focus:border-transparent"
                                    />
                                ))}
                        </div>
                        <h1 className="text-[#515151] text-center font-canvasans text-sm font-medium pb-48">Didn't recieve an OTP?  <Link to='/auth/sign-in' className="text-[#8c52ff] font-bold">Resend</Link></h1>
                        <button className="bg-black text-white font-gordita text-xs rounded-lg h-9 w-full uppercase">
                            Verify
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OTP
