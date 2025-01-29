import React from 'react';
import messages from '../../assets/messages.png';
import patients from '../../assets/Patients.png';
import calendar from '../../assets/Calendar.png';
import automations from '../../assets/Automations.png';
import knowledgebase from '../../assets/Knowledgebase.png';
import settings from '../../assets/Settings.png';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const activeStyle = {
        transform: 'scale(1.1)',
        background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
    };

    return (
        <div className="flex flex-col items-center justify-start gap-3.5 h-screen w-28 pt-10">
            <Link
                to='/'
                style={location.pathname === '/' ? activeStyle : {}}
                className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'
            >
                <img src={messages} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link
                to='/patients'
                style={location.pathname === '/patients' ? activeStyle : {}}
                className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'
            >
                <img src={patients} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link
                to='/bookings'
                style={location.pathname === '/bookings' ? activeStyle : {}}
                className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'
            >
                <img src={calendar} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link
                to='/automations'
                style={location.pathname === '/automations' ? activeStyle : {}}
                className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'
            >
                <img src={automations} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link
                to='/knowledgebase'
                style={location.pathname === '/knowledgebase' ? activeStyle : {}}
                className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'
            >
                <img src={knowledgebase} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link
                to='/settings'
                style={location.pathname === '/settings' ? activeStyle : {}}
                className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'
            >
                <img src={settings} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
        </div>
    );
};

export default Sidebar;