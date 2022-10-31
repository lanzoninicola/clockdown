const passportJwtMiddleware = require("../auth/middlewares/passport-jwt.middleware");

const setupRoutes = app => {
    app.all("*", (req, res, next) => {
        if (req.originalUrl.includes("favicon.ico")) {
            return res.status(204).end();
        } else {
            next();
        }
    });

    app.use("/health-check", require("./health-check.route"));

    // app.all("*", passportJwtMiddleware);

    /***********************************************************/
    // All routes below this line will require authentication
    /***********************************************************/

    app.use("/api/onboarding", require("./onboarding.route"));

    app.use((req, res, next) =>
        res.status(404).json({
            message: `Missing page: ${req.originalUrl}`
        })
    );

    app.use((err, req, res, next) => {
        console.error(err);
        if (err.code === "permission_denied") {
            res.status(403).json({
                message: "You do not have permission to access this resource"
            });
        } else {
            res.status(err.status ?? 500).json({ message: err.message });
        }
    });

    return app;
};

module.exports = setupRoutes;
