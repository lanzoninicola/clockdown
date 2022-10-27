const express = require("express");
const passportJwtMiddleware = require("../../auth/middlewares/passport-jwt.middleware");
const bodyParser = require("body-parser");

/**
 *
 * @param {object} router - The router to be used in the test
 * @param {number} port
 * @returns  {object} - The server and the app
 *
 * @example
 * const router = require("../routes/delivery-settings.route");
 *
 * const { server, app } = setupHttpTestServer(router, 5000);
 */
function setupHttpTestServer(router, port = 5000) {
    require("../../config/auth.passport.config");

    const app = express();
    app.use(passportJwtMiddleware);

    app.use(bodyParser.json());

    app.use(router);

    const server = app.listen(port);

    return { server, app };
}

module.exports = setupHttpTestServer;
