class YearFormat {
    /**
     * Always use four digits. Example: 2020
     * @type {YearFormat}
     */
    static FOUR_DIGIT = new YearFormat('YYYY');

    /** @param {string} format */
    constructor(format) {
        this._format = format;
    }

    /** @returns {string} */
    toString = () => this._format;
}

export {YearFormat}
