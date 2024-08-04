import express from "express";
import DestinoController from "../controllers/destinoController.js";

const routes = express.Router();

routes.get("/destino", DestinoController.BuscarDestinoPorSlug); // Nova rota deve ser registrada antes
routes.get("/:id", DestinoController.BuscarDestinoPorId);
routes.get("/", DestinoController.ListarDestinos);

export default routes;
