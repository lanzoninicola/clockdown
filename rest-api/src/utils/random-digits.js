/**
 *
 * @returns {string} - a random string of x digits
 */
function randomDigits(length = 4) {
    const randomNum = Math.floor(
        1 * Math.pow(10, length - 1) +
            Math.random() * (9 * Math.pow(10, length - 1))
    );

    return String(randomNum);
}

module.exports = randomDigits;
