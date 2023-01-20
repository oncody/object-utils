import dayjs from "./dayjs.js";
import {CalendarDate} from "./calendar-date.js";

class DateCreator {
    /** @param {Month} month
     * @param {number} day
     * @param {number} year
     * @returns {CalendarDate} */
    static date = (month, day, year) => {
        return new CalendarDate(dayjs.utc({
            year: year,
            month: month.zeroBasedIndex(),
            day: day,
        }));
    }

    /** @param {string} date
     * @returns {CalendarDate} */
    static string = (date) => {
        let formats = ['YYYY-MM-DD', 'MMM DD, YYYY', 'YYYY-M-D', 'MMM D, YYYY'];
        let dayJsDate = dayjs.utc(date, formats);
        return new CalendarDate(dayJsDate);
    }

    /** @param {number} unixSeconds ms since January 1st, 1970
     * @returns CalendarDate */
    static unixSeconds = unixSeconds => DateCreator.unixMs(unixSeconds * 1000);

    /** @param {number} unixMs ms since January 1st, 1970
     * @returns CalendarDate */
    static unixMs = unixMs => new CalendarDate(dayjs.utc(unixMs));

    /** @returns {CalendarDate} */
    static now = () => new CalendarDate(dayjs.utc());
}

export {DateCreator}
