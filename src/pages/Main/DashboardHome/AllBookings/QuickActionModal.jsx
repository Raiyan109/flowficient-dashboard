import whiteAutomationsImg from '../../../../assets/white-automation.png'

const QuickActionModal = ({ toggleQuickActions }) => {
    return (
        <div
            className="fixed top-10 right-6 min-h-[730.1px] w-[449.6px] rounded-[33px] flex flex-col justify-between bg-white"
        >
            <div className='flex justify-center  flex-col gap-[24px] pt-[27px]'>

                <h1 className="text-[24px] font-canvasans font-bold pl-[49px]">Quick Actions</h1>

                <div className='flex flex-col justify-center items-center gap-[16px]'>
                    <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] w-[356.1px] h-[110.3px]">
                        <div className="flex justify-between">
                            <h1 className=" font-canvasans text-[11.7px] font-semibold">Cancel my next appointment</h1>
                            <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                            </div>
                        </div>
                        <h1 className=" font-canvasans text-[8.9px] font-thin max-w-[280px]">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                        <p className="text-[#757575] flex justify-end text-[10px]">Saves 10 mins</p>
                    </div>
                    <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] w-[356.1px] h-[110.3px]">
                        <div className="flex justify-between">
                            <h1 className=" font-canvasans text-[11.7px] font-semibold">Cancel my next appointment</h1>
                            <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                            </div>
                        </div>
                        <h1 className=" font-canvasans text-[8.9px] font-thin max-w-[280px]">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                        <p className="text-[#757575] flex justify-end text-[10px]">Saves 10 mins</p>
                    </div>
                    <div className="py-3 px-4 rounded-2xl space-y-1.5 bg-[#f1f1f1] w-[356.1px] h-[110.3px]">
                        <div className="flex justify-between">
                            <h1 className=" font-canvasans text-[11.7px] font-semibold">Cancel my next appointment</h1>
                            <div className="bg-black p-1  rounded-full flex items-center justify-center">
                                <img src={whiteAutomationsImg} alt="" className="w-3 h-3" />
                            </div>
                        </div>
                        <h1 className=" font-canvasans text-[8.9px] font-thin max-w-[280px]">Sends  a Whatsapp to the patient who’s scheduled to come in next to inform them.</h1>
                        <p className="text-[#757575] flex justify-end text-[10px]">Saves 10 mins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickActionModal
