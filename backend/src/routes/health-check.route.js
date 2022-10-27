const { Router } = require("express");
const router = Router();

router.get("/", function (req, res, next) {
    return res.status(200).json("Ready");
});

module.exports = router;
