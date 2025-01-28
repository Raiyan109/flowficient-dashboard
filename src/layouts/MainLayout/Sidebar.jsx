import messages from '../../assets/messages.png'
import patients from '../../assets/Patients.png'
import calendar from '../../assets/Calendar.png'
import automations from '../../assets/Automations.png'
import knowledgebase from '../../assets/Knowledgebase.png'
import settings from '../../assets/Settings.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="flex flex-col items-center justify-start gap-3.5 h-screen w-28 pt-10">
            <Link to='/' className='bg-[#f1f1f1] rounded-full w-[39.1px] h-[39.1px] flex items-center justify-center'>
                <img src={messages} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link to='/patients' className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'>
                <img src={patients} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link to='/bookings' className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'>
                <img src={calendar} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link to='/automations' className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'>
                <img src={automations} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link to='/knowledgebase' className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'>
                <img src={knowledgebase} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
            <Link to='/settings' className='bg-[#f1f1f1] rounded-full p-2 w-[39.1px] h-[39.1px] flex items-center justify-center'>
                <img src={settings} alt="" className='w-[19.3px] h-[17px]' />
            </Link>
        </div>
    )
}

export default Sidebar
