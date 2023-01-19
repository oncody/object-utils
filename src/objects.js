import _ from "lodash";

class Objects {
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
        if(!Objects.size(object)) {
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
    static groupBy = (object, func) => _.groupBy(object, func);

    /**
     *
     * @param {Object} object1
     * @param {Object} object2
     * @returns boolean
     */
    static areEqual = (object1, object2) => _.isEqual(object1, object2);

    /**
     * Edits object in place and adds key => value to object. Then returns same object
     * @param {Object} object
     * @param {string} key
     * @param {*} value
     * @return {Object}
     */
    static appendValue(object, key, value) {
        object[key] = value;
        return object;
    }
}

export {Objects}
