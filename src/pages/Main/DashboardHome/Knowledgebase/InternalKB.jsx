import { MdKeyboardBackspace } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const InternalKB = () => {
    const tableData = [
        {
            dataSource: "www.flowficient.ai",
            dataType: "URL",
            importedBy: "Naeem Hashim",
            dateUploaded: "2023-10-01",
        },
        {
            dataSource: "www.flowficient.ai",
            dataType: "URL",
            importedBy: "Naeem Hashim",
            dateUploaded: "2023-10-02",
        },
        {
            dataSource: "www.flowficient.ai",
            dataType: "URL",
            importedBy: "Naeem Hashim",
            dateUploaded: "2023-10-03",
        },
        {
            dataSource: "www.flowficient.ai",
            dataType: "URL",
            importedBy: "Naeem Hashim",
            dateUploaded: "2023-10-04",
        },
    ];
    return (
        <div>
            <div className='bg-[#f1f1f1] w-[1122.6px] h-[646px] rounded-[25px]'>
                <div className="flex flex-col pl-[35px] pt-[25px]">
                    <MdKeyboardBackspace size={25} />
                    <h1 className="font-canvasans text-[24px] font-bold">Internal KB</h1>
                </div>
                <div className="p-4 px-[27px] font-gordita text-[8px] font-extralight">
                    <table className="w-full">
                        <thead className="bg-[#fafafa] rounded-[9px] h-[42.2px]">
                            <tr className="text-left">
                                <th className="py-2 px-[15px]">Data Source</th>
                                <th className="py-2">Data Type</th>
                                <th className="py-2">Imported By</th>
                                <th className="py-2">Date Uploaded</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`h-[42.2px]  ${index % 2 === 0 ? "bg-transparent" : "bg-[#fafafa]"
                                        } rounded-[9px] `}
                                >
                                    <td className="py-2 px-[15px]">{row.dataSource}</td>
                                    <td className="py-2">{row.dataType}</td>
                                    <td className="py-2">{row.importedBy}</td>
                                    <td className="py-2">{row.dateUploaded}</td>
                                    <td className="py-2">
                                        <button className="text-gray-500">
                                            <RiDeleteBin5Line size={12} />
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

export default InternalKB
