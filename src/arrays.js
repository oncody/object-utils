import _ from "lodash";

class Arrays {
    /**
     * @return {Arrays}
     */
    constructor() {
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
