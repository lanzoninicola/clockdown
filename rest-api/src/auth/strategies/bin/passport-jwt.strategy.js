const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

/**
 *
 * @param {object} param0
 * - verifyCallback: function - A callback function that is called to verify the credentials.
 * It has the following signature: async (jwtPayload) => { isValid: boolean, payload: object, message: string }
 * @returns
 */
const createJWTStrategy = ({ verifyCallback }) => {
    /**  JWT Strategy for all routes except login and signup */
    const jwtStrategyOpts = {};

    // Specifies how the jsonwebtoken should be extracted from the incoming request message
    jwtStrategyOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

    // Supply the secret key to be using within strategy for the sign-in.
    jwtStrategyOpts.secretOrKey = process.env.JWT_SECRET;

    return new JWTStrategy(jwtStrategyOpts, async (jwtPayload, done) => {
        const { isValid, message, payload } = await verifyCallback(jwtPayload);

        if (isValid === false) {
            return done(null, false, { message });
        }

        return done(null, payload, { message });
    });
};

module.exports = createJWTStrategy;
