const Router = require("express").Router();
const controllers = require("../controllers/messageController");

Router.get("/:matchId", controllers.getMessages);
Router.post("/:userId/:matchId", controllers.createMessage);

module.exports = Router;
