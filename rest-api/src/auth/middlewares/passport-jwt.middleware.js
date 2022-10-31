const passport = require("passport");
const { isTokenValid } = require("../utils/auth.token");

const passportJwtMiddleware = (req, res, next) => {
    if (process.env.SKIP_AUTH === "true") {
        next();
        return;
    }

    passport.authenticate("jwt", { session: false }, (err, jwtPayload) => {
        const { isValid, code, message } = isTokenValid(req);

        if (!isValid) {
            return res.status(401).json({
                code,
                message
            });
        }

        if (err) {
            next(err.statusCode(401));
        } else if (jwtPayload) {
            req.user = jwtPayload;
            next();
        } else {
            return res.status(401).json({ message: "Acesso não autorizado" });
        }
    })(req, res, next);
};

module.exports = passportJwtMiddleware;
