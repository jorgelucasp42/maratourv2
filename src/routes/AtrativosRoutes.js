import express from "express";
import AtrativoController from "../controllers/atrativoController.js";

const routes = express.Router();

routes.get("/atrativo", AtrativoController.buscarAtrativoPorSlug);
routes.get("/:atrativoId", AtrativoController.buscarAtrativoPorId);
routes.get("/", AtrativoController.listarAtrativos);

export default routes;
