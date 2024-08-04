import express from "express";
import AtrativoController from "../controllers/atrativoController.js";

const routes = express.Router();

routes.get("/atrativo", AtrativoController.BuscarAtrativoPorSlug); // Rota para buscar atrativo por slug
routes.get("/:id", AtrativoController.BuscarAtrativoPorId);
routes.get("/", AtrativoController.ListarAtrativos);

export default routes;
