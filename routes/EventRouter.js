const Router = require("express").Router();
const controllers = require("../controllers/eventController");

Router.get("/:eventId", controllers.getEventById);
Router.post("/:userId", controllers.createEvent);
Router.delete("/:userId/:eventId", controllers.DeleteEvent);
Router.put("/:userId/:eventId", controllers.UpdateEvent);

module.exports = Router;
