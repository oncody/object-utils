class DayFormat {
    /**
     * Use single digits when possible. Example January 7. 1-31
     * @type {DayFormat}
     */
    static ONE_DIGIT = new DayFormat('D');

    /**
     * Always use double digits. Example January 07. 01-31
     * @type {DayFormat}
     */
    static TWO_DIGIT = new DayFormat('DD');

    /** @param {string} format */
    constructor(format) {
        this._format = format;
    }

    /** @returns {string} */
    toString = () => this._format;
}

export {DayFormat}
