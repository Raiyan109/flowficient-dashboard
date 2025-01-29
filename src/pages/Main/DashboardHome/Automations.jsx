import React, { useState } from "react";
import automationsImg from "../../../assets/Automations.png";
import { MdEdit } from "react-icons/md";

const Automations = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState("quickActions");

    return (
        <div>
            {/* Tab Navigation */}
            <div className="flex items-start gap-5 mb-[33px]">
                {/* Quick Actions Tab */}
                <div
                    className="flex flex-col gap-[4px] cursor-pointer"
                    onClick={() => setActiveTab("quickActions")}
                >
                    <h1
                        className={`text-[18px] font-bold font-canvasans ${activeTab === "quickActions" ? "text-black" : "text-[#757575]"
                            }`}
                    >
                        Quick Actions
                    </h1>
                    {/* Border bottom for active tab */}
                    {activeTab === "quickActions" && (
                        <div className="border-b-2 border-black"></div>
                    )}
                </div>

                {/* Scheduled Actions Tab */}
                <div
                    className="flex flex-col gap-[4px] cursor-pointer"
                    onClick={() => setActiveTab("scheduledActions")}
                >
                    <h1
                        className={`text-[18px] font-bold font-canvasans ${activeTab === "scheduledActions" ? "text-black" : "text-[#757575]"
                            }`}
                    >
                        Scheduled Actions
                    </h1>
                    {/* Border bottom for active tab */}
                    {activeTab === "scheduledActions" && (
                        <div className="border-b-2 border-black"></div>
                    )}
                </div>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-3 gap-4">
                {activeTab === "quickActions" ? (
                    // Content for Quick Actions
                    Array(12)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    background:
                                        "radial-gradient(circle at 0% 0%, #5170ff, #d83bff)",
                                }}
                                className="w-[356.1px] h-[110.3px] rounded-2xl space-y-1.5 pt-[18px] px-[22px] pb-[32px]"
                            >
                                <div className="flex justify-between">
                                    <h1 className="text-white font-canvasans text-[11.7px] font-semibold">
                                        Cancel my next appointment
                                    </h1>
                                    <div className="bg-white p-[2px] w-[19.9px] h-[19.9px] rounded-2xl">
                                        <img src={automationsImg} alt="" className="" />
                                    </div>
                                </div>
                                <h1 className="text-white font-canvasans text-[8.9px] font-thin max-w-[280px]">
                                    Sends a Whatsapp to the patient who’s scheduled to come in next
                                    to inform them.
                                </h1>
                                <p className="text-white flex justify-end text-[6.9px]">
                                    Saves 10 mins
                                </p>
                            </div>
                        ))
                ) : (
                    // Content for Scheduled Actions
                    Array(6)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="w-[351.7px] h-[187.9px] rounded-2xl space-y-1.5  px-[22px]  bg-[#f1f1f1] flex flex-col justify-center"
                            >
                                <div className="flex justify-between gap-12">
                                    <h1 className=" font-canvasans text-[12.7px] font-semibold">
                                        Send a Whatsapp booking confirmation message
                                    </h1>
                                    <div className="bg-black p-[2px] w-[19.9px] h-[19.9px] rounded-2xl">
                                        <MdEdit className="text-white" />
                                    </div>
                                </div>
                                <h1 className="font-canvasans text-[9.9px] font-extralight max-w-[220px] leading-loose">
                                    Sends  a Whatsapp message to a patient to confirm their booking appointment. Updates will be tracked on booking listings.
                                </h1>
                                <p className="text-[#757575] flex justify-end text-[6.9px]">
                                    Saves 15 mins
                                </p>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
};

export default Automations;