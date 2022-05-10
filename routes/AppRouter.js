const Router = require("express").Router();
const MessageRouter = require("./MessageRouter");
const EventRouter = require("./EventRouter");
const MatchRouter = require("./MatchRouter");
const UserRouter = require("./UserRouter");

Router.use("/messages", MessageRouter);
Router.use("/events", EventRouter);
Router.use("/matches", MatchRouter);
Router.use("/users", UserRouter);

module.exports = Router;
