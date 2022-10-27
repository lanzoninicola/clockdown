const { Router } = require("express");
const router = Router();
const routeAuthRoleGuardMiddleware = require("../middlewares/route-auth-guard.middleware");
const validateWithJoiMiddleware = require("../middlewares/validate-with-joi.middleware");

router.get(
    "/",
    // routeAuthRoleGuardMiddleware(["application"]),
    // validateWithJoiMiddleware(pollingSchema),
    async (req, res, next) => {
        try {
            return res.status(200).json("ok");
        } catch (e) {
            return next(e);
        }
    }
);

module.exports = router;
