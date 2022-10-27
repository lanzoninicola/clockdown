const { Strategy: LocalStrategy } = require("passport-local");

/**
 *
 * @param {object} param0
 * - usernameField: string - The name of the field in the request body that contains the username.
 * - passwordField: string - The name of the field in the request body that contains the password.
 * - verifyCallback: function - A callback function that is called to verify the credentials.
 *
 * The verifyCallback function must returns an object with the following structure:
 * {
 *  isValid: boolean,
 *  payload: object, // The user or whatever object that will be used as the payload of the JWT token for authentication
 *  message: string
 * }
 * @returns
 */
const createLocalStrategy = ({
    usernameField = "email",
    passwordField = "password",
    verifyCallback
}) =>
    new LocalStrategy(
        { usernameField, passwordField },
        async (username, password, done) => {
            const { isValid, message, payload } = await verifyCallback(
                username,
                password
            );

            if (isValid === false) {
                return done(null, false, {
                    message
                });
            }

            return done(null, payload, {
                message: "Autenticação realizada com sucesso"
            });
        }
    );

module.exports = createLocalStrategy;
