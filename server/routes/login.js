const { Router } = require("express");
const router = Router();
const loginControllers = require("../controllers/login")



//handles register POST
router.post(
  "/login",
  loginControllers.loginUser
);






module.exports = router;