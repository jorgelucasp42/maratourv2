import express from "express";
import DestinoController from "../controllers/destinoController.js";

const routes = express.Router();

routes.get("/", DestinoController.ListarDestinos);

export default routes;
