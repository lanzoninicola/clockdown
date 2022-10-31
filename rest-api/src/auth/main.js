const passport = require("passport");
const globalJwtStrategy = require("./strategies/global.jwt.strategy");

/**
 * Here we are setting up the authentication strategies.
 */

const setupAuthentication = () => {
    /**
     * Setting up the Local Strategy to be used to register new applications.
     */
    // passport.use("applications", applicationLocalStrategy);

    /**
     * Setting up the JWT strategy for all routes except login and signup.
     * The rules to determine if the request is authenticated with a valid JWT token are defined in the verifyCallback function.
     */
    passport.use("jwt", globalJwtStrategy);
};

module.exports = setupAuthentication;
