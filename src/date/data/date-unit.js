class DateUnit {
    static DAY = new DateUnit('day', 'd', 'Day');
    static MONTH = new DateUnit('month', 'M', 'Month (January as 0, December as 11)');
    static YEAR = new DateUnit('year', 'y', 'Year');

    /** @param {string} unit
     * @param {string} shorthand
     * @param {string} description */
    constructor(unit, shorthand, description) {
        /** @private */ this._unit = unit;
        /** @private */ this._shorthand = shorthand;
        /** @private */ this._description = description;
    }

    /** @returns {string} */
    toString = () => this._unit;
}

export {DateUnit}
