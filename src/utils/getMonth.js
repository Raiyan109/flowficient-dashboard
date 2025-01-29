import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    const daysInMonth = dayjs(new Date(year, month + 1, 0)).date();

    let currentMonthCount = 0 - firstDayOfTheMonth;
    const dayMatrix = new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });

    return dayMatrix;
}