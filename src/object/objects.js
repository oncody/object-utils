import _ from "lodash";

class Objects {
    /** @param {Object} object
     * @returns {number} */
    static size = (object) => Object.entries(object).length;

    /** @param {Object} object
     * @param {string} keyValueSeparator
     * @param {string} entrySeparator
     * @returns {string} */
    static join = (object, keyValueSeparator, entrySeparator) =>
        Objects.size(object)
            ? Object.entries(object).map(keyValue => keyValue.join(keyValueSeparator)).join(entrySeparator)
            : '';

    /** @param {Object} object
     * @param {function} func
     * @returns {Dictionary<[]>} */
    static groupBy = (object, func) => _.groupBy(object, func);

    /** @param {Object} object1
     * @param {Object} object2
     * @returns boolean */
    static areEqual = (object1, object2) => _.isEqual(object1, object2);

    /** Edits object in place and adds key => value to object. Then returns same object
     * @param {Object} object
     * @param {string} key
     * @param {*} value
     * @return {Object} */
    static appendValue = (object, key, value) => Object.assign(object, {[key]: value})
}

export {Objects}
