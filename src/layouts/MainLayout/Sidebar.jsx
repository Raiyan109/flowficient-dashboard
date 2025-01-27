import messages from '../../assets/messages.png'
import patients from '../../assets/Patients.png'
import calendar from '../../assets/Calendar.png'
import automations from '../../assets/Automations.png'
import knowledgebase from '../../assets/Knowledgebase.png'
import settings from '../../assets/Settings.png'

const Sidebar = () => {
    return (
        <div className="flex flex-col items-center justify-start gap-3.5 h-screen w-48 pt-10">
            <div className='bg-[#f1f1f1] rounded-full p-2'>
                <img src={messages} alt="" />
            </div>
            <div className='bg-[#f1f1f1] rounded-full p-2'>
                <img src={patients} alt="" />
            </div>
            <div className='bg-[#f1f1f1] rounded-full p-2'>
                <img src={calendar} alt="" />
            </div>
            <div className='bg-[#f1f1f1] rounded-full p-2'>
                <img src={automations} alt="" />
            </div>
            <div className='bg-[#f1f1f1] rounded-full p-2'>
                <img src={knowledgebase} alt="" />
            </div>
            <div className='bg-[#f1f1f1] rounded-full p-2'>
                <img src={settings} alt="" />
            </div>
        </div>
    )
}

export default Sidebar
