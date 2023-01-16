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
}

export {Arrays}
