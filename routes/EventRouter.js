const Router = require("express").Router();
const controllers = require("../controllers/eventController");

Router.get("/:id", controllers.getEventById);
Router.get("/", controllers.getAllEvents);
Router.get("/user/:userId", controllers.getAllEventsByUserId);
Router.post("/:userId", controllers.createEvent);
Router.delete("/:userId/:id", controllers.DeleteEvent);
Router.put("/:userId/:id", controllers.UpdateEvent);

module.exports = Router;
