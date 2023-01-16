import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

import {DateUnit} from "./data/date-unit.js";

class CalendarDate {
    /**
     * @param {dayjs.Dayjs} date
     * @returns {CalendarDate}
     */
    constructor(date) {
        /**
         * @type {dayjs.Dayjs}
         * @private
         */
        this._date = date;
    }

    /**
     *
     * @return {number}
     */
    unix() {
        return this._date.unix();
    }

    /**
     *
     * @param {CalendarDate} date
     * @returns {boolean}
     */
    isBefore(date) {
        return this._date.isBefore(date._date);
    }

    /**
     *
     * @param {number} value
     * @param {DateUnit} dateUnit
     * @returns {CalendarDate}
     */
    add(value, dateUnit) {
        let dayJsDate = this._date.add(value, dateUnit.toString());
        return new CalendarDate(dayJsDate);
    }

    /**
     *
     * @param {number} value
     * @param {DateUnit} dateUnit
     * @returns {CalendarDate}
     */
    subtract(value, dateUnit) {
        let dayJsDate = this._date.subtract(value, dateUnit.toString());
        return new CalendarDate(dayJsDate);
    }

    /**
     *
     * @param {CalendarDate} date
     * @param {DateUnit} dateUnit
     * @returns {number}
     */
    difference(date, dateUnit) {
        return this._date.diff(date._date, dateUnit.toString());
    }

    /**
     * 1 - 31. Day of month
     * @returns {number}
     */
    day() {
        return this._date.date();
    }

    /**
     *
     * @returns {number}
     */
    month() {
        return this._date.month();
    }

    /**
     *
     * @returns {number}
     */
    year() {
        return this._date.year();
    }

    /**
     *
     * @param {string} format
     * @returns {string}
     */
    format(format) {
        return this._date.format(format);
    }

    /**
     * @returns {string}
     */
    friendlyHumanUnitedStatesToString() {
       return this._date.format('MMMM D, YYYY');
    }

    /**
     * ISO 8601
     * @returns {string}
     */
    toString() {
        return this._date.format();
    }

    /**
     * Remove commas from number and then convert that number to a number object
     * @param {Month} month
     * @param {number} day
     * @param {number} year
     * @returns {CalendarDate}
     */
    static simpleDate(month, day, year) {
        // This allows you to create dayjs objects from an object
        // https://day.js.org/docs/en/plugin/object-support
        dayjs.extend(objectSupport);

        return new CalendarDate(dayjs({
            month: month.zeroBasedIndex(),
            day: day,
            year: year,
        }));
    }

    /**
     * @param {string} date
     * @returns {CalendarDate}
     */
    static fromString(date) {
        // https://day.js.org/docs/en/parse/string-format
        dayjs.extend(customParseFormat);

        let formats = ['YYYY-MM-DD', 'MMM DD, YYYY', 'YYYY-M-D', 'MMM D, YYYY'];
        let dayJsDate = dayjs(date, formats);
        return new CalendarDate(dayJsDate);
    }

    /**
     * @param {number} timestamp
     * @returns CalendarDate
     */
    static fromUnix(timestamp) {
        let dayJsDate = dayjs.unix(timestamp);
        return new CalendarDate(dayJsDate);
    }

    /**
     * @returns {CalendarDate}
     */
    static now() {
        return new CalendarDate(dayjs());
    }
}

export {CalendarDate}
