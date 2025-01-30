import React, { useState } from 'react';
import flowkiAiLogo from '../../../../assets/flowki-logo.png';
import flowkiAiCalendar from '../../../../assets/flowki-calendar.png';
import { IoCloseOutline } from "react-icons/io5";

const initialChats = [
    {
        id: 1,
        image: flowkiAiCalendar,
        text: 'Cancel next appointment'
    },
    {
        id: 2,
        image: flowkiAiCalendar,
        text: 'Delay my next appointment bx mins'
    },
    {
        id: 3,
        image: flowkiAiCalendar,
        text: 'Delay my next appointment bx mins'
    },
    {
        id: 4,
        image: flowkiAiCalendar,
        text: 'Cancel next appointment'
    },
    {
        id: 5,
        image: flowkiAiCalendar,
        text: 'Delay my next appointment bx mins'
    },
    {
        id: 6,
        image: flowkiAiCalendar,
        text: 'Cancel next appointment'
    },
    {
        id: 7,
        image: flowkiAiCalendar,
        text: 'Cancel next appointment'
    },
    {
        id: 8,
        image: flowkiAiCalendar,
        text: 'Delay my next appointment bx mins'
    },
];


const BookingFlowkiModal = () => {

    return (
        <div
            className="fixed top-10 right-6 h-[757.3px] w-[651.9px] rounded-[33px]"
            style={{
                background: 'linear-gradient(225deg, #ffffff, #FEECFE)', // Linear gradient background
            }}
        >
            <div className='flex items-center gap-[17px] pt-[32px] pl-[40px]'>
                <IoCloseOutline className='w-[26.7px] h-[26.7px]' />
                <div className='flex items-center gap-[7px]'>
                    <img src={flowkiAiLogo} alt="" className='w-[25.2px] h-[25.2px]' />
                    <h1 className='font-gordita text-[13px] font-bold'>FlowKi AI</h1>
                </div>
            </div>

            <div className='mt-[77px] pl-[40px]'>
                <div className='bg-[#efefef] rounded-[38px] h-[41.8px] w-fit  py-[12px] px-[21px] flex items-center gap-[13px] mb-[36px]'>
                    <img src={flowkiAiCalendar} alt="" />
                    <h1 className='font-gordita text-[11.2px]'>Cancel the next meeting</h1>
                </div>

                <div className='flex items-end justify-end mb-[20px] pr-[44px]'>
                    <div className='h-[83.3px] w-[379.6px] flex items-center justify-center px-3 rounded-xl' style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }} >
                        <p className='font-gordita text-white text-xs'>Hey, are you sure you want to cancel your next appointment with Na’eem Hashim?</p>
                    </div>
                </div>

                <div className='flex items-center justify-end gap-[7px] pr-[44px]'>
                    <button className='w-[105.3px] h-[47.1px] text-white text-[11.2px] font-gordita rounded-[25px]' style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }}>
                        No
                    </button>
                    <button className='w-[105.3px] h-[47.1px] text-white text-[11.2px] font-gordita  rounded-[25px]' style={{
                        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
                    }}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingFlowkiModal
