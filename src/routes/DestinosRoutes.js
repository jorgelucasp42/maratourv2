import express from "express";
import DestinoController from "../controllers/destinoController.js";

const routes = express.Router();

routes.get("/destinos", DestinoController.ListarDestinos);
routes.get("/destinos/:id", DestinoController.BuscarDestinoPorId);
routes.get("/destino", DestinoController.BuscarDestinoPorSlug); // Nova rota
routes.get("/maps-api-key", (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

export default routes;
