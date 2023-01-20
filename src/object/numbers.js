class Numbers {
    /** Remove commas from number and then convert that number to a number object
     * @param {string} string
     * @returns {number} */
    static fromString = (string) => Number(string.replace(/,/g, ''));

    /** Round a float to X decimal places
     * @param {number} number
     * @param {number} decimals
     * @returns {number} */
    static roundFloat = (number, decimals) => parseFloat(number.toFixed(decimals));

    /** @param {number} minInclusive - inclusive
     * @param {number} maxExclusive - exclusive
     * @returns {number} */
    static randomIntegerExclusive = (minInclusive, maxExclusive) => {
        minInclusive = Math.ceil(minInclusive);
        maxExclusive = Math.floor(maxExclusive);
        return Math.floor(Math.random() * (maxExclusive - minInclusive) + minInclusive);
    }

    /** @param {number} minInclusive - inclusive
     * @param {number} maxInclusive - inclusive
     * @returns {number} */
    static randomIntegerInclusive = (minInclusive, maxInclusive) => {
        minInclusive = Math.ceil(minInclusive);
        maxInclusive = Math.floor(maxInclusive);
        return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive);
    }
}

export {Numbers}
