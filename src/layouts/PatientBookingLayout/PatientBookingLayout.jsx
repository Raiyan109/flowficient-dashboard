import React from 'react'
import { Outlet } from 'react-router-dom'
import bgSvg from '../../assets/bg2.svg'

const PatientBookingLayout = () => {
    return (
        <div
            className="h-screen w-screen bg-gradient-to-b from-red-400 to-[#f5f5f5] relative"
            style={{
                backgroundImage: `radial-gradient(circle, hsla(0, 0%, 54%, 0.3) 50%, hsla(0, 4%, 62%, 0.1) 100%), 
                                         linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), 
                                         url(${bgSvg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Outlet />
        </div>
    )
}

export default PatientBookingLayout
