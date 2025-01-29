import { BsThreeDotsVertical } from "react-icons/bs";

const WaitingList = () => {
    const tableData = [
        {
            firstName: "Jeremiah",
            surName: "Alexandar",
            slotPreference: "22/09/1971",
            doctorPreference: "Any Doctor",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
        },
        {
            firstName: "Jeremiah",
            surName: "Alexandar",
            slotPreference: "22/09/1971",
            doctorPreference: "Any Doctor",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
        },
        {
            firstName: "Jeremiah",
            surName: "Alexandar",
            slotPreference: "22/09/1971",
            doctorPreference: "Any Doctor",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
        },
        {
            firstName: "Jeremiah",
            surName: "Alexandar",
            slotPreference: "22/09/1971",
            doctorPreference: "Any Doctor",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
        },
        {
            firstName: "Jeremiah",
            surName: "Alexandar",
            slotPreference: "22/09/1971",
            doctorPreference: "Any Doctor",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
        },
        {
            firstName: "Jeremiah",
            surName: "Alexandar",
            slotPreference: "22/09/1971",
            doctorPreference: "Any Doctor",
            cellNumber: "+27 83 620 7199",
            workNumber: "+27 83 620 7199",
            email: "jeremiahalex@gmail.com",
        },
    ];
    return (
        <div>
            <div className='bg-[#f1f1f1] w-[1122.6px] h-[646px] rounded-[25px]'>
                <div className="flex flex-col pl-[35px] pt-[25px]">
                    <h1 className="font-canvasans text-[24px] font-bold">Waiting List</h1>
                </div>
                <div className="p-4 px-[27px] font-gordita text-[8px]">
                    <table className="w-full">
                        <thead className="bg-[#fafafa] h-[42.2px]">
                            <tr className="text-left text-[#3c3c3c]">
                                <th className="py-2 px-[15px] font-light rounded-s-[9px] ">First Name</th>
                                <th className="py-2 font-light">Surname</th>
                                <th className="py-2 font-light">Slot Preference</th>
                                <th className="py-2 font-light">Doctor Preference</th>
                                <th className="py-2 font-light">Cell Number</th>
                                <th className="py-2 font-light">Work Number</th>
                                <th className="py-2 font-light">Email Address</th>
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

                                    <td className="py-2 px-[15px] rounded-s-[9px]">{row.firstName}</td>
                                    <td className="py-2">{row.surName}</td>
                                    <td className="py-2">{row.slotPreference}</td>
                                    <td className="py-2">{row.doctorPreference}</td>
                                    <td className="py-2">{row.cellNumber}</td>
                                    <td className="py-2">{row.workNumber}</td>
                                    <td className="py-2 rounded-e-[9px]">{row.email}</td>
                                    <td className="py-2 rounded-e-[9px]">
                                        <button className="text-gray-500">
                                            <BsThreeDotsVertical size={12} />
                                        </button>
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

export default WaitingList
