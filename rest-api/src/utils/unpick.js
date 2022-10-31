/**
 * Returns a new object with the same properties as the original object,
 * but with the specified properties removed.
 *
 * @param {object} object The original object
 * @param {string[]} keys The keys to exclude from the object
 * @returns
 */
const unpick = (object, keys) => {
    return Object.keys(object).reduce((obj, key) => {
        if (!keys.includes(key)) {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {});
};

module.exports = unpick;
