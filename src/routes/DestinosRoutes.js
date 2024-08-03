import express from "express";
import DestinoController from "../controllers/destinoController.js";

const routes = express.Router();

routes.get("/destinos", DestinoController.ListarDestinos);
routes.get("/destinos/:id", DestinoController.BuscarDestinoPorId);
routes.get("/destino", DestinoController.BuscarDestinoPorSlug); // Nova rota

export default routes;
