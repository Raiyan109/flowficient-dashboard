import React, { useState } from 'react';
import flowkiAiLogo from '../../assets/flowki-logo.png';
import flowkiAiCalendar from '../../assets/flowki-calendar.png';
import { FaArrowUp } from "react-icons/fa6";

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
            className="fixed top-10 right-6 h-[757.3px] w-[651.9px] rounded-[33px] flex flex-col justify-between"
            style={{
                background: 'linear-gradient(225deg, #F3F3F3, #FEECFE)', // Linear gradient background
            }}
        >
            <div className='flex justify-center items-center flex-col gap-[24px] pt-[87px]'>
                <img src={flowkiAiLogo} alt="" />
                <h1 className='font-gordita text-[20px] font-bold'>Chat with FlowKi AI</h1>
            </div>

            <div className='flex flex-col items-center justify-center pb-[22px] relative'>
                {/* Render initial chat options or chat history based on state */}
                {!isChatStarted ? (
                    <div className='flex items-center flex-wrap justify-center gap-[19px] flex-grow'>
                        {initialChats.map((chat) => (
                            <div key={chat.id} className='bg-[#efefef] rounded-[38px] h-[41.8px] w-[267.2px] py-[12px] px-[21px] flex items-center gap-[13px]'>
                                <img src={chat.image} alt="" />
                                <h1 className='font-gordita text-[11.2px]'>{chat.text}</h1>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='w-full h-[500px] overflow-y-auto px-4'>
                        {chatHistory.map((chat) => (
                            <div
                                key={chat.id}
                                className={`flex ${chat.type === 'user' ? 'justify-start' : 'justify-end'} mb-4`}
                            >
                                <div
                                    className={`max-w-[313px]  p-3 rounded-lg font-gordita ${chat.type === 'user'
                                        ? 'bg-[#efefef] text-black'
                                        : 'text-white'
                                        }`}
                                    style={{
                                        background: chat.type === 'bot'
                                            ? 'radial-gradient(circle at 0% 0%, #5170ff, #d83bff)'
                                            : undefined, // Use undefined to avoid overriding the className background
                                    }}
                                >
                                    {chat.text}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Input */}
                <div className="fixed bottom-28 p-4 w-[594.9px]">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        type="text"
                        id="Search"
                        placeholder="Let's chat"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="w-full border-gray-200 px-[25px] py-[17px] placeholder:font-canvasans placeholder:text-[#aaaaaa] placeholder:text-[11.7px] rounded-full"
                    />

                    <span
                        className="absolute right-7 top-7 inset-y-0 grid place-content-center bg-black h-[34.3px] w-[34.3px] rounded-full cursor-pointer"
                        onClick={handleSendMessage}
                    >
                        <FaArrowUp color='white' />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FlowkiAiModal;