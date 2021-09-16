const { Router } = require("express");
const router = Router();
const passport = require("passport");



router.get(
  "/payment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("You have a total of: 2400$");
  }
);


module.exports = router;