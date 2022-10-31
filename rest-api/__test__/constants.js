const formatDate = require("./utils/format-date");

const MOCK_NAME = "__TEST__";

const APP_USER_TEST = `__test__${formatDate(new Date(), "_")}`;

module.exports = {
    MOCK_NAME,
    APP_USER_TEST
};
