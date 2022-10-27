const formatDate = (date, separator = "-") => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}${separator}${month}${separator}${day}`;
};

module.exports = formatDate;
