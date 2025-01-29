import Day from "./Day";

const Month = ({ month }) => {
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-6">
            {month.map((row, i) => (
                <div key={i} className="">
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Month;