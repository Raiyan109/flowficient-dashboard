import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { useState } from "react";

const Patients = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const tableData = [
        {
            title: "Mr.",
            name: "Jeremiah",
            surName: "Alexandar",
            age: "45",
            dateOfBirth: "22/09/1971",
            idNumber: "87893948304",
            address: "1 Rachel Bloch Ave, Panorama 7500",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
            medicalAid: "Momentum",
        },
        {
            title: "Mr.",
            name: "Jeremiah",
            surName: "Alexandar",
            age: "45",
            dateOfBirth: "22/09/1971",
            idNumber: "87893948304",
            address: "1 Rachel Bloch Ave, Panorama 7500",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
            medicalAid: "Momentum",
        },
        {
            title: "Mr.",
            name: "Jeremiah",
            surName: "Alexandar",
            age: "45",
            dateOfBirth: "22/09/1971",
            idNumber: "87893948304",
            address: "1 Rachel Bloch Ave, Panorama 7500",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
            medicalAid: "Momentum",
        },
        {
            title: "Mr.",
            name: "Jeremiah",
            surName: "Alexandar",
            age: "45",
            dateOfBirth: "22/09/1971",
            idNumber: "87893948304",
            address: "1 Rachel Bloch Ave, Panorama 7500",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
            medicalAid: "Momentum",
        },
        {
            title: "Mr.",
            name: "Jeremiah",
            surName: "Alexandar",
            age: "45",
            dateOfBirth: "22/09/1971",
            idNumber: "87893948304",
            address: "1 Rachel Bloch Ave, Panorama 7500",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
            medicalAid: "Momentum",
        },
        {
            title: "Mr.",
            name: "Jeremiah",
            surName: "Alexandar",
            age: "45",
            dateOfBirth: "22/09/1971",
            idNumber: "87893948304",
            address: "1 Rachel Bloch Ave, Panorama 7500",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
            medicalAid: "Momentum",
        },
    ];

    const toggleMenu = (index) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    return (
        <div>
            <div className='bg-[#f1f1f1] w-[1122.6px] h-[646px] rounded-[25px]'>
                <div className="flex justify-between pl-[35px] pr-[28px] pt-[25px]">
                    <h1 className="font-canvasans text-[24px] font-bold">Patients</h1>

                    {/* Search and Filters */}
                    <div className="flex items-center gap-5">
                        <button className="w-[106.6px] h-[28.6px] bg-black text-white rounded-[5px] flex gap-1 items-center justify-center">
                            <FaPlus className="text-white text-[7.3px]" />
                            <h1 className="font-gordita text-[7.3px]">Add Patient</h1>
                        </button>
                        {/* Input */}
                        <div className="relative bg-white rounded-[13px] w-[320px] h-[42.2px]" >
                            <label htmlFor="Search" className="sr-only"> Search </label>
                            <span className="absolute inset-y-0 start-1 grid w-10 place-content-center" >
                                <CiSearch size={18} />
                            </span>
                            <input
                                type="text"
                                id="Search"
                                placeholder="Search"
                                className="bg-transparent py-[6px] border-none outline-none pl-12 placeholder:text-gray-500 placeholder:font-canvasans placeholder:text-[11px] text-white font-canvasans"

                            />
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div className='bg-[#fafafa] rounded-full w-[35.8px] h-[35.8px] flex items-center justify-center'>
                                <MdElectricBolt size={18} />
                            </div>
                            <div className='bg-[#fafafa] rounded-full w-[35.8px] h-[35.8px] flex items-center justify-center'>
                                <BiFilter size={18} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 px-[27px] font-gordita text-[8px] pt-[26px]">
                    <table className="w-full">
                        <thead className="bg-[#fafafa] h-[42.2px]">
                            <tr className="text-left text-[#3c3c3c]">
                                <th className="py-2 px-[15px] font-light rounded-s-[9px] ">Title</th>
                                <th className="py-2 font-light">Name</th>
                                <th className="py-2 font-light">Surname</th>
                                <th className="py-2 font-light">Age</th>
                                <th className="py-2 font-light">Date of Birth</th>
                                <th className="py-2 font-light">ID Number</th>
                                <th className="py-2 font-light">Address</th>
                                <th className="py-2 font-light">Cell Number</th>
                                <th className="py-2 font-light">Work Number</th>
                                <th className="py-2 font-light">Email Address</th>
                                <th className="py-2 font-light">Medical Aid</th>
                                <th className="py-2 font-light rounded-e-[9px]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`h-[42.2px] text-[#3c3c3c] ${index % 2 === 0 ? "bg-transparent" : "bg-[#fafafa]"
                                        } rounded-[9px] `}
                                >

                                    <td className="py-2 px-[15px] rounded-s-[9px]">{row.title}</td>
                                    <td className="py-2">{row.name}</td>
                                    <td className="py-2">{row.surName}</td>
                                    <td className="py-2">{row.age}</td>
                                    <td className="py-2">{row.dateOfBirth}</td>
                                    <td className="py-2">{row.idNumber}</td>
                                    <td className="py-2">{row.address}</td>
                                    <td className="py-2">{row.cellNumber}</td>
                                    <td className="py-2">{row.workNumber}</td>
                                    <td className="py-2 rounded-e-[9px]">{row.email}</td>
                                    <td className="py-2 rounded-e-[9px]">{row.medicalAid}</td>
                                    <td className="py-2 rounded-e-[9px] relative">
                                        <button className="text-gray-500" onClick={() => toggleMenu(index)}>
                                            <BsThreeDotsVertical size={12} />
                                        </button>
                                        {openMenuIndex === index && (
                                            <div className="absolute left-[-200.7px] top-0 bg-white shadow-xl rounded-[9px] w-[200.7px]">
                                                <ul className="p-2">
                                                    <li className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[19px]">
                                                        <IoEyeOutline size={13} />
                                                        View full record
                                                    </li>
                                                    <li className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[19px]">
                                                        <MdElectricBolt size={13} />
                                                        Trigger an automation
                                                    </li>
                                                    <li className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[19px]">
                                                        <PiWhatsappLogoThin size={13} />
                                                        Send a WhatsApp message
                                                    </li>
                                                    <li className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[19px]">
                                                        <CiMail size={13} />
                                                        Send an email
                                                    </li>
                                                    <li className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[19px]">
                                                        <LiaEditSolid size={13} />
                                                        Edit patient record
                                                    </li>
                                                    <li className="p-2 hover:bg-gray-100 cursor-pointer text-[10px] font-gordita flex items-center gap-[19px]">
                                                        <RiDeleteBin5Line size={13} />
                                                        Delete patient record
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Patients
