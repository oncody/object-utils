class Month {
    static JANUARY = new Month(0);
    static FEBRUARY = new Month(1);
    static MARCH = new Month(2);
    static APRIL = new Month(3);
    static MAY = new Month(4);
    static JUNE = new Month(5);
    static JULY = new Month(6);
    static AUGUST = new Month(7);
    static SEPTEMBER = new Month(8);
    static OCTOBER = new Month(9);
    static NOVEMBER = new Month(10);
    static DECEMBER = new Month(11);

    /** @param {number} zeroBasedIndex */
    constructor(zeroBasedIndex) {
        /** @private */ this._zeroBasedIndex = zeroBasedIndex;
    }

    /** @param {number} index
     * @returns {Month} */
    static fromZeroBasedIndex = index => Object.values(Month).find(month => month.zeroBasedIndex() === index);

    /** @param {number} index
     * @returns {Month} */
    static fromOneBasedIndex = index => Object.values(Month).find(month => month.oneBasedIndex() === index);

    /** @returns {number} */
    zeroBasedIndex = () => this._zeroBasedIndex;

    /** @returns {number} */
    oneBasedIndex = () => this._zeroBasedIndex + 1;
}

export {Month}
