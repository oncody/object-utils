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

    constructor(zeroBasedIndex) {
        this._zeroBasedIndex = zeroBasedIndex;
        this._oneBasedIndex = zeroBasedIndex + 1;
    }

    zeroBasedIndex() {
        return this._zeroBasedIndex;
    }

    oneBasedIndex() {
        return this._oneBasedIndex;
    }
}

export {Month}