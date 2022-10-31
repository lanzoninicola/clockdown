const httpStatus = require("http-status");

function isValidHttpStatusCode(statusCode) {
    if (typeof statusCode === "string") {
        return false;
    }

    return httpStatus[statusCode] !== undefined;
}

module.exports = isValidHttpStatusCode;
