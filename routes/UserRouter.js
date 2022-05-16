const Router = require("express").Router();
const controller = require("../controllers/UserController");
const middleware = require("../middleware");

Router.post("/login", controller.Login);
Router.post("/register", controller.Register);

Router.get(
  "/session/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserProfile
);
Router.get("/all", controller.GetProfiles);

Router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
);

module.exports = Router;
