const Router = require("express").Router();
const controllers = require("../controllers/matchController");

Router.get("/event/:eventId", controllers.getMatchesByeventId);
Router.get("/user/:userId", controllers.getMatchesByUserId);
Router.post("/:userId/:eventId", controllers.createMatch);
Router.delete("/:matchId", controllers.DeleteMatch);

module.exports = Router;
