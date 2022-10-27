/**
 * Returns a new object with the specified keys from the original object (if they exist)
 *
 * @param {Object} object - The original object
 * @param {string[]} keys - The keys to pick
 * @returns {Object} - The new object
 */
const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {});
};

module.exports = pick;
