const randomString = () => {
    const length = 10;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

module.exports = randomString;
