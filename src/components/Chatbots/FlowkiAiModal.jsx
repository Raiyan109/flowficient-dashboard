import flowkiAiLogo from '../../assets/flowki-logo.png'
import flowkiAiCalendar from '../../assets/flowki-calendar.png'
import { FaArrowUp } from "react-icons/fa6";
import { useState } from 'react';

const chats = [
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
]

const FlowkiAiModal = ({ toggleNotifications }) => {
    const [isChatStarted, setIsChatStarted] = useState(false); // State to track if chat has started
    const [userInput, setUserInput] = useState(''); // State to store user input
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history

    // Function to handle user input submission
    const handleSendMessage = () => {
        if (userInput.trim()) {
            // Add user message to chat history
            setChatHistory(prev => [
                ...prev,
                { id: prev.length + 1, type: 'user', text: userInput }
            ]);

            // Simulate a bot response after a delay
            setTimeout(() => {
                setChatHistory(prev => [
                    ...prev,
                    { id: prev.length + 1, type: 'bot', text: 'This is a mock response from FlowKi AI.' }
                ]);
            }, 1000);

            setUserInput(''); // Clear input field
            setIsChatStarted(true); // Set chat as started
        }
    };
    return (
        <div
            className="fixed top-10 right-6 h-[757.3px] w-[651.9px] rounded-[33px] z-50 flex flex-col justify-between"
            style={{
                background: 'linear-gradient(225deg, #F3F3F3, #FEECFE)', // Linear gradient background
            }}
        >
            <div className='flex justify-center items-center flex-col gap-[24px] pt-[87px]'>
                <img src={flowkiAiLogo} alt="" />
                <h1 className='font-gordita text-[20px] font-bold'>Chat with FlowKi AI</h1>
            </div>

            <div className='flex flex-col items-center justify-center pb-[22px]'>
                <div className='flex items-center flex-wrap justify-center gap-[19px] flex-grow'>
                    {chats.map((chat) => (
                        <div key={chat.id} className='bg-[#efefef] rounded-[38px] h-[41.8px] w-[267.2px] py-[12px] px-[21px] flex items-center gap-[13px]'>
                            <img src={chat.image} alt="" />
                            <h1 className='font-gordita text-[11.2px]'>{chat.text}</h1>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="relative  p-4 w-[594.9px]">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        type="text"
                        id="Search"
                        placeholder="Let's chat"
                        className="w-full border-gray-200 px-[25px] py-[17px] placeholder:font-canvasans placeholder:text-[#aaaaaa] placeholder:text-[11.7px] rounded-full"
                    />

                    <span className="absolute right-7 top-7 inset-y-0  grid place-content-center bg-black h-[34.3px] w-[34.3px] rounded-full">
                        <FaArrowUp color='white' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FlowkiAiModal