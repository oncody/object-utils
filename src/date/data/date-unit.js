class DateUnit {
    static DAY = new DateUnit('day', 'd', 'Day');
    static MONTH = new DateUnit('month', 'M', 'Month (January as 0, December as 11)');
    static YEAR = new DateUnit('year', 'y', 'Year');

    constructor(unit, shorthand, description) {
        this._unit = unit;
        this._shorthand = shorthand;
        this._description = description;
    }

    toString() {
        return this._unit;
    }
}

export {DateUnit}