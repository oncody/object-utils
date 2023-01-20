import {DayFormat} from "./data/day-format.js";
import {MonthFormat} from "./data/month-format.js";
import {YearFormat} from "./data/year-format.js";

class DateFormatBuilder {
    constructor() {
        this._format = '';
    }

    /** @param {DayFormat} dayFormat
     * @returns {DateFormatBuilder} */
    day = (dayFormat) => {
        this._format += dayFormat;
        return this;
    }

    /** @param {MonthFormat} monthFormat
     * @returns {DateFormatBuilder} */
    month = (monthFormat) => {
        this._format += monthFormat;
        return this;
    }

    /** @param {YearFormat} yearFormat
     * @returns {DateFormatBuilder} */
    year = (yearFormat) => {
        this._format += yearFormat;
        return this;
    }

    /** @returns {DateFormatBuilder} */
    space = () => {
        this._format += ' ';
        return this;
    }

    /** @returns {DateFormatBuilder} */
    comma = () => {
        this._format += ',';
        return this;
    }

    /** @returns {DateFormatBuilder} */
    slash = () => {
        this._format += '/';
        return this;
    }

    /** @returns {DateFormatBuilder} */
    dash = () => {
        this._format += '-';
        return this;
    }

    /** @returns {DateFormatBuilder} */
    dot = () => {
        this._format += '.';
        return this;
    }

    /** @returns {string} */
    build = () => this._format;
}

export {DateFormatBuilder}
