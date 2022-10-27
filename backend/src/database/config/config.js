const path = require("path");
const dotenv = require("dotenv");
const {
    getCurrentEnvironmentVariableFilename
} = require("../../utils/node.env");

const envFile = getCurrentEnvironmentVariableFilename();
const envPath = path.join(__dirname, "..", "..", "..", envFile);
dotenv.config({ path: envPath });

if (process.env.NODE_ENV.includes("production") === false) {
    if (process.env.DB_HOST.includes("amazon")) {
        throw new Error("*** You are using Amazon AWS host in DEV mode! ***");
    }
}

module.exports.DEFAULT_DB_APP_USER = "clockdown";

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        useUTC: false
    },
    pool: {
        max: Number(process.env.DB_POOL_MAX),
        min: Number(process.env.DB_POOL_MIN),
        acquire: Number(process.env.DB_POOL_ACQUIRE),
        idle: Number(process.env.DB_POOL_IDLE)
    },
    timezone: "America/Sao_Paulo",
    define: {
        freezeTableName: true,
        timestamps: true
    },
    // Prevent sequelize to output SQL queries in console
    logging: false
};
