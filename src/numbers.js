class Numbers {
    /**
     * @returns {Numbers}
     */
    constructor() {
    }

    /**
     * Remove commas from number and then convert that number to a number object
     * @param {string} string
     * @returns {number}
     */
    static fromString(string) {
        let trimmedString = string.replace(/,/g, '');
        return Number(trimmedString);
    }

    /**
     * Round a float to X decimal places
     * @param {number} number
     * @param {number} decimals
     * @returns {number}
     */
    static roundFloat(number, decimals) {
        return parseFloat(number.toFixed(decimals));
    }

    /**
     *
     * @param {number} min - inclusive
     * @param {number} max - exclusive
     * @returns {number}
     */
    static randomIntegerExclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     *
     * @param {number} min - inclusive
     * @param {number} max - inclusive
     * @returns {number}
     */
    static randomIntegerInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export {Numbers}
