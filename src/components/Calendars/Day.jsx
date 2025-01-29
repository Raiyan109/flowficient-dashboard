import dayjs from "dayjs";

const Day = ({ day, rowIdx }) => {
    const isCurrentMonth = day.month() === dayjs().month();

    return (
        <div className="border border-gray-400 flex flex-col" role="gridcell" aria-label={day.format('YYYY-MM-DD')}>
            <div className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
                )}

                <p className={`text-sm p-1 my-1 text-center ${isCurrentMonth ? '' : 'text-gray-400'}`}>
                    {day.format('DD')}
                </p>
            </div>
        </div>
    );
};

export default Day;