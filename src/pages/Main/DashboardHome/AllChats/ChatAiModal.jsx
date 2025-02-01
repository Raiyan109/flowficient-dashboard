import { IoCloseOutline } from "react-icons/io5";
import { RiSparklingFill } from "react-icons/ri";

const ChatAiModal = ({ toggleChatAi }) => {
    return (
        <div className="fixed top-10 right-6 w-[449.6px] h-[740.7px] rounded-[38px]" style={{
            background: 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)',
        }}>
            <IoCloseOutline className="text-white text-4xl ml-auto mt-[27px] mr-[28px]" onClick={toggleChatAi} />

            <RiSparklingFill className="ml-[55px] text-4xl text-white" />

            <div className="flex items-center justify-center pt-[26px]">
                <h1 className="text-[22px] font-gordita text-white max-w-[230px]">David is enquiring about a hair transplant and couldn’t find a suitable booking slot, it’s urgent and he would like to visit next month</h1>
            </div>

        </div>
    )
}

export default ChatAiModal
