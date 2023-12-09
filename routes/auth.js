const { Router } = require("express");

const authValidator = require("../validators/auth");

const authController = require("../controllers/auth");
const authRouter = Router();
authRouter.post("/signup", authController.postUser);
authRouter.post("/signin", authController.postLogin);

authRouter.post(
  "/",
  authValidator.validatePostAuth(), 
);
module.exports = authRouter;