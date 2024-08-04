import express from "express";
import AtrativoController from "../controllers/atrativoController.js";

const routes = express.Router();

routes.get("/atrativo", AtrativoController.BuscarAtrativoPorSlug); // Nova rota deve ser registrada antes
routes.get("/:id", AtrativoController.BuscarAtrativoPorId);
routes.get("/", AtrativoController.ListarAtrativos);

export default routes;
