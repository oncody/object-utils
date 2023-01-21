class Arrays {
    /** Return max of an array
     * @param {[]} array
     * @return {number} */
    static max = array => Math.max(...(array));

    /**
     * Clone an array. only 1 level deep.
     * @param {[]} array
     * @returns {[]}
     */
    static clone = array => [...array];
}

export {Arrays}
