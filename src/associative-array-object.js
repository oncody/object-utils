import _ from "lodash";

export default class AssociativeArrayObject {
    /**
     * @returns {AssociativeArrayObject}
     */
    constructor() {
    }

    /**
     * @param {Object} object
     * @returns {number}
     */
    static size(object) {
        let entries = Object.entries(object);
        return entries.length;
    }

    /**
     * @param {Object} object
     * @param {string} keyValueSeparator
     * @param {string} entrySeparator
     * @returns {string}
     */
    static join(object, keyValueSeparator, entrySeparator) {
        if(!AssociativeArrayObject.size(object)) {
            return '';
        }

        return Object.entries(object).map(keyValue => keyValue.join(keyValueSeparator)).join(entrySeparator);
    }

    /**
     *
     * @param {Object} object
     * @param {function} func
     * @returns {Dictionary<unknown[]>}
     */
    static groupBy(object, func) {
        return _.groupBy(object, func);
    }

    /**
     *
     * @param {Object} object1
     * @param {Object} object2
     * @returns boolean
     */
    static areEqual(object1, object2) {
        return _.isEqual(object1, object2);
    }
}