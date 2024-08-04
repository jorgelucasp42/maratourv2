import express from "express";
import DestinoController from "../controllers/destinoController.js";
import AtrativoRoutes from "./AtrativosRoutes.js";

const routes = express.Router();

routes.use("/:destinoId/atrativos", AtrativoRoutes); // Incluir rotas de atrativos
routes.get("/destino", DestinoController.BuscarDestinoPorSlug); // Nova rota deve ser registrada antes
routes.get("/:id", DestinoController.BuscarDestinoPorId);
routes.get("/", DestinoController.ListarDestinos);

export default routes;

