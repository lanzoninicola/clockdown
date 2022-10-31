/**
 * Handling the status of merchant. OPEN, CLOSED
 * Handling orders events
 */

require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("./src/utils/proto");

const setupServer = () => {
    const app = express();

    app.use(
        bodyParser.json({
            limit: "50mb"
        })
    );

    app.use(
        bodyParser.urlencoded({
            limit: "50mb",
            parameterLimit: 100000,
            extended: true
        })
    );

    app.use(cookieParser());
    app.use(
        cors({
            origin: "*",
            methods: "GET,HEAD,PUT,PATCH,POST,OPTIONS,DELETE",
            credentials: true,
            allowedHeaders: "Authorization,Content-Type",
            exposedHeaders: "x-auth-token"
        })
    );

    return app;
};

module.exports = setupServer;
