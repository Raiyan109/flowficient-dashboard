import brainImg from '../../../../assets/knowledebrain.png'
import brainImg2 from '../../../../assets/knowledebrain3.png'
import knowledgeImg from '../../../../assets/knowledebrain2.png'
import { Link } from 'react-router-dom'

const Knowledgebase = () => {
    return (
        <div className='flex gap-[36px] items-center justify-center pt-[10px]'>
            <div className="bg-[#fafafa] w-[356.1px] h-[574.9px] rounded-[25px]">
                <h1 className="text-[23px] font-canvasans font-bold text-center pt-[33px]">External AI</h1>

                <div className="flex items-center justify-center mt-[30px]">
                    <div
                        className="w-[270.6px] h-[399.8px] rounded-[25px] flex flex-col justify-between shadow-xl"
                        style={{ background: 'linear-gradient(135deg, #ff66c4, #ffde59)' }}
                    >
                        <div className='flex flex-col items-center justify-center pt-[40px]'>
                            <img src={brainImg} alt="" className='w-[83.3px] h-[97.1px] object-contain pb-[23px]' />
                            <h3 className='font-canvasans  text-[10.7px] text-white text-center max-w-[180px]'>External AI is trained on data meant to be seen by the public</h3>
                        </div>
                        <div className='flex justify-center items-end pb-[28px]'>
                            <Link to='internalkb'
                                className="text-white bg-black rounded-[15px] w-[208.1px] h-[49.7px] font-gordita text-md flex items-center justify-center gap-5"
                            >
                                <img src={knowledgeImg} alt="" className="w-[19.1px] h-[19.1px] object-contain" />
                                <p className='text-[11.1px] font-gordita'>Train Model</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fafafa] w-[356.1px] h-[574.9px] rounded-[25px]">
                <h1 className="text-[23px] font-canvasans font-bold text-center pt-[33px]">Internal AI</h1>

                <div className="flex items-center justify-center mt-[30px]">
                    <div
                        className="w-[270.6px] h-[399.8px] rounded-[25px] flex flex-col justify-between shadow-xl"
                        style={{ background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)' }}
                    >
                        <div className='flex flex-col items-center justify-center pt-[40px]'>
                            <img src={brainImg2} alt="" className='w-[83.3px] h-[97.1px] object-contain pb-[23px]' />
                            <h3 className='font-canvasans  text-[10.7px] text-white text-center max-w-[180px]'>Internal AI is trained on data meant to be seen by staff and professionals internally</h3>
                        </div>
                        <div className='flex justify-center  pb-[28px]'>
                            <button
                                className="text-white bg-black rounded-[15px] w-[208.1px] h-[49.7px] font-gordita text-md flex items-center justify-center gap-5"
                            >
                                <img src={knowledgeImg} alt="" className="w-[19.1px] h-[19.1px] object-contain" />
                                <p className='text-[11.1px] font-gordita'>Train Model</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Knowledgebase
