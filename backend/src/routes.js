const express = require("express");
const ongController = require("./Controllers/OngController");
const incidentsController = require("./Controllers/IncidentController");
const profileController = require("./Controllers/ProfileController");
const sectionController = require("./Controllers/SectionController");

const routes = express.Router();

routes.post("/section", sectionController.store);

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.store);

routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.store);
routes.delete("/incidents/:id", incidentsController.delete);

routes.get("/profile", profileController.index);
module.exports = routes;
