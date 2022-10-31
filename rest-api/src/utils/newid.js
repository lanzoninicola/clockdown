const { v4: uuidv4 } = require("uuid");

function newId() {
    return uuidv4();
}

module.exports = newId;
