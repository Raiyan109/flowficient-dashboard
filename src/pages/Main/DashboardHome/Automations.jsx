import React, { useState } from "react";
import automationsImg from "../../../assets/Automations.png";

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
                    Array(12)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    background:
                                        "radial-gradient(circle at 0% 0%, #ff5170, #ffd83b)",
                                }}
                                className="w-[356.1px] h-[110.3px] rounded-2xl space-y-1.5 pt-[18px] px-[22px] pb-[32px]"
                            >
                                <div className="flex justify-between">
                                    <h1 className="text-white font-canvasans text-[11.7px] font-semibold">
                                        Reschedule my next appointment
                                    </h1>
                                    <div className="bg-white p-[2px] w-[19.9px] h-[19.9px] rounded-2xl">
                                        <img src={automationsImg} alt="" className="" />
                                    </div>
                                </div>
                                <h1 className="text-white font-canvasans text-[8.9px] font-thin max-w-[280px]">
                                    Sends a reminder to the patient to reschedule their
                                    appointment.
                                </h1>
                                <p className="text-white flex justify-end text-[6.9px]">
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