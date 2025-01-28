import { getMonth } from "../../../utils/getMonth"


const Bookings = () => {
    console.table(getMonth())
    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-pink-400"></div>
            <div className="w-3/4 bg-purple-400"></div>
        </div>
    )
}

export default Bookings
