import _ from "lodash";

class Arrays {
    /**
     * @return {Arrays}
     */
    constructor() {
    }

    /**
     *
     * @param {[]} array
     * @param {string} field
     * @return {[]}
     */
    static sort(array, field) {
        return _.sortBy(array, field)
    }

    /**
     * Return max of an array
     * @param {[]} array
     * @return {number}
     */
    static max(array) {
        return Math.max(...(array));
    }
}

export {Arrays}
