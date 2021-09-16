const { Router } = require("express");
const router = Router();
const registerControllers = require("../controllers/register")



//handles register user
router.post(
  "/register",
  registerControllers.registerUser
);






module.exports = router;