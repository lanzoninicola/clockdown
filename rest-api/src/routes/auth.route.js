const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const validateWithJoiMiddleware = require("../middlewares/validate-with-joy.middleware");
const {
    loginSchema,
    refreshTokenSchema
} = require("./validators/auth.route.validator");
const router = Router();

router.post("/", validateWithJoiMiddleware(loginSchema), authController.login);

/** This route let generate a new JWT token starting from a refresh token */
router.post(
    "/refresh-token",
    validateWithJoiMiddleware(refreshTokenSchema),
    authController.generateNewToken
);

module.exports = router;
