const bcrypt = require("bcrypt");

async function hash(data) {
    const hash = await bcrypt.hash(data, 12);

    return hash;
}

/**
 *
 * @param {*} data - The data to be hashed
 * @param {*} hash - The data to be compared against
 * @returns
 */
async function compare(data, hash) {
    const isMatch = await bcrypt.compareSync(data, hash);

    return isMatch;
}

module.exports = {
    hash,
    compare
};
