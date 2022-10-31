const httpStatus = require("http-status");

const routeAuthRoleGuardMiddleware =
    (acceptedRoles = []) =>
    (req, res, next) => {
        const { headers } = req;

        if (!headers.authorization) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                message: "Não tem permissão para executar esta ação"
            });
        }

        const [bearer] = headers.authorization.split(" ");

        if (bearer !== "Bearer") {
            return res.status(httpStatus.UNAUTHORIZED).json({
                message: "Não tem permissão para executar esta ação"
            });
        }

        const requesterRole = req?.user?.entity;

        if (!acceptedRoles.includes(requesterRole)) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                message: "Não tem permissão para executar esta ação"
            });
        }

        return next();
    };

module.exports = routeAuthRoleGuardMiddleware;
