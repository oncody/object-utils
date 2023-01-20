class MonthFormat {
    /** Use single digits when possible. Example 1 for January. 1-12
     * @type {MonthFormat} */
    static ONE_DIGIT = new MonthFormat('M');

    /** Always use double digits. Example 01 for January. 01-12
     * @type {MonthFormat} */
    static TWO_DIGIT = new MonthFormat('MM');

    /** Abbreviated name. Example Jan 07. Jan - Dec
     * @type {MonthFormat} */
    static SHORT_NAME = new MonthFormat('MMM');

    /** Full name. Example January 07. January - December
     * @type {MonthFormat} */
    static FULL_NAME = new MonthFormat('MMMM');

    /** @param {string} format */
    constructor(format) {
        /** @private */ this._format = format;
    }

    /** @returns {string} */
    toString = () => this._format;
}

export {MonthFormat}
