const base64Encode = str => {
    return Buffer.from(str).toString("base64");
};

const base64Decode = str => {
    return Buffer.from(str, "base64").toString("ascii");
};

module.exports = {
    base64Encode,
    base64Decode
};
