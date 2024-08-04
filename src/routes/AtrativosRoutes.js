import express from "express";
import AtrativoController from "../controllers/atrativoController.js";

const routes = express.Router({ mergeParams: true });

routes.get("/", AtrativoController.listarAtrativos);
routes.get("/:atrativoId", AtrativoController.buscarAtrativoPorId);
routes.get("/slug/:slug", AtrativoController.buscarAtrativoPorSlug);

export default routes;
