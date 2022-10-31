const createJWTStrategy = require("./bin/passport-jwt.strategy");
const usersRepository = require("../../repositories/user.repository");

const globalJwtStrategy = createJWTStrategy({
    verifyCallback: async jwtPayload => {
        try {
            const { role } = jwtPayload;

            if (role === "user") {
                const userFound = await usersRepository.findUserSecretsByEmail(
                    jwtPayload.email
                );

                if (!userFound) {
                    return {
                        isValid: false,
                        message: "Acesso não autorizado"
                    };
                }
            }

            return {
                isValid: true,
                payload: jwtPayload
            };
        } catch (error) {
            return {
                isValid: false,
                message: error.message
            };
        }
    }
});

module.exports = globalJwtStrategy;
