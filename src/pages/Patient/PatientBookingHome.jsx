import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import patientHeaderAvatar from '../../assets/patientHeaderAvatar.png'

const PatientBookingHome = () => {
    return (
        <div className="">
            {/* Upper side */}
            <div className="flex justify-between items-center pt-[47px] pl-[38px] pr-[50px]">
                {/* Left */}
                <div className="flex items-center gap-[33px]">
                    <img src={patientHeaderAvatar} alt="" />
                    <div>
                        <h1 className="text-[24px] font-canvasans mb-[7px]">Dr. P Parker</h1>
                        <h2 className="font-canvasans text-[9.7px] font-semibold text-[#3f3f3f] mb-[6px]">Dentist - Stellenbosch University</h2>
                        <h2 className="font-canvasans text-[8.9px] text-[#515151]">1 Rachel Bloch Ave, Cape Town, 7500</h2>
                    </div>
                </div>

                {/* Right */}
                <div className='flex items-center gap-[9px]'>
                    <div className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                        <IoLogoWhatsapp className='w-[15.3px] h-[15.3px]' />
                    </div>
                    <div className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                        <BsInstagram className='w-[15.3px] h-[15.3px]' />
                    </div>
                    <div className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                        <FaFacebook className='w-[15.3px] h-[15.3px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientBookingHome
