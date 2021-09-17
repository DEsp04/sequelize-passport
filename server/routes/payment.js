const { Router } = require("express");
const router = Router();
const passport = require("passport");


//authenticate allows to authenticate a particular user and you add the strategy you will be using with is jwt
//authenticate has a option which is session
router.get(
  "/payment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("You have a total of: 2400$");
  }
  
);


module.exports = router;