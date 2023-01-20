import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

import {Month} from "./data/month.js";
import {DateUnit} from "./data/date-unit.js";
import {DateFormatBuilder} from "./date-format-builder.js";
import {MonthFormat} from "./data/month-format.js";
import {DayFormat} from "./data/day-format.js";
import {YearFormat} from "./data/year-format.js";

class CalendarDate {
    /** @param {dayjs.Dayjs} date */
    constructor(date) {
        /** @private */ this._date = date;
    }

    /** @returns {number} */
    unix = () => this._date.unix();

    /** @param {CalendarDate} date
     * @returns {boolean} */
    isBefore = date => this._date.isBefore(date._date);

    /** Used for comparing two dates like sorting
     * @param date
     * @returns {number} */
    minus = date => this.unix() - date.unix();

    /** @param {number} value
     * @param {DateUnit} dateUnit
     * @returns {CalendarDate} */
    add = (value, dateUnit) => new CalendarDate(this._date.add(value, dateUnit.toString()));

    /** @param {number} value
     * @param {DateUnit} dateUnit
     * @returns {CalendarDate} */
    subtract = (value, dateUnit) => new CalendarDate(this._date.subtract(value, dateUnit.toString()));

    /** @param {CalendarDate} date
     * @param {DateUnit} dateUnit
     * @returns {number} */
    difference = (date, dateUnit) => this._date.diff(date._date, dateUnit.toString());

    /** 1 - 31. Day of month
     * @returns {number} */
    day = () => this._date.date();

    /** Months are zero indexed. 0 - 11
     * @returns {Month} */
    month = () => Month.fromZeroBasedIndex(this._date.month());

    /** @returns {number} */
    year = () => this._date.year();

    /** Example: January 7, 1990
     * @returns {string} */
    longHumanString = () => {
        return this._date.format(new DateFormatBuilder()
            .month(MonthFormat.FULL_NAME)
            .space()
            .day(DayFormat.ONE_DIGIT)
            .comma()
            .space()
            .year(YearFormat.FOUR_DIGIT)
            .build())
    };

    /** Example: Jan 7, 1990
     * @returns {string} */
    shortHumanString = () => {
        return this._date.format(new DateFormatBuilder()
            .month(MonthFormat.SHORT_NAME)
            .space()
            .day(DayFormat.ONE_DIGIT)
            .comma()
            .space()
            .year(YearFormat.FOUR_DIGIT)
            .build());
    }

    /** ISO 8601 string. Example: 1990-01-07
     * @returns {string} */
    computerString = () => {
        return this._date.format(new DateFormatBuilder()
            .year(YearFormat.FOUR_DIGIT)
            .dash()
            .month(MonthFormat.TWO_DIGIT)
            .dash()
            .day(DayFormat.TWO_DIGIT)
            .build());
    }

    /** @param {Month} month
     * @param {number} day
     * @param {number} year
     * @returns {CalendarDate} */
    static simpleDate = (month, day, year) => {
        /** This allows you to create dayjs objects from an object
         https://day.js.org/docs/en/plugin/object-support **/
        dayjs.extend(objectSupport);

        return new CalendarDate(dayjs({
            month: month.zeroBasedIndex(),
            day: day,
            year: year,
        }));
    }

    /** @param {string} date
     * @returns {CalendarDate} */
    static fromString = (date) => {
        /** https://day.js.org/docs/en/parse/string-format **/
        dayjs.extend(customParseFormat);

        let formats = ['YYYY-MM-DD', 'MMM DD, YYYY', 'YYYY-M-D', 'MMM D, YYYY'];
        let dayJsDate = dayjs(date, formats);
        return new CalendarDate(dayJsDate);
    }

    /** @param {number} timestamp
     * @returns CalendarDate */
    static fromUnix = timestamp => {
        return new CalendarDate(dayjs.unix(timestamp));
    }

    /** @returns {CalendarDate} */
    static now = () => new CalendarDate(dayjs());
}

export {CalendarDate}
