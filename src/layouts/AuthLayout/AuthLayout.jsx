import React from 'react'
import { Outlet } from 'react-router-dom'
import bgSvg from '../../assets/bg2.svg'

const AuthLayout = () => {
    return (
        <div
            className="h-screen w-screen bg-gradient-to-b from-red-400 to-[#f5f5f5] relative"
            style={{
                backgroundImage: `url(${bgSvg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Outlet />
        </div>
    )
}

export default AuthLayout
