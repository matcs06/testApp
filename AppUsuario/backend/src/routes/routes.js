const express = require("express");
const routes = express.Router();

const SessionController = require("../Controllers/SessionController");
const Message = require("../Controllers/MessageController");

routes.get("/messages", Message.index);
routes.post("/messages", Message.store);

routes.get("/session/:id", SessionController.index);
routes.post("/session", SessionController.execute);

module.exports = routes;
