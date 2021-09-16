const { Router } = require("express");
const userRouter = Router();
const userControllers = require("../controllers/index")



userRouter.post(
  "/",
  userControllers.createUser
);

userRouter.get(
  "/users",
  userControllers.getAllUsers
);

userRouter.get(
  "/users/:id",
  userControllers.getUserByID
);

userRouter.put(
  "/users/:id",
  userControllers.updateUser
);

userRouter.delete(
  "/users/:id",
  userControllers.deleteUser
);




module.exports = userRouter;