import express from "express";
import DestinoController from "../controllers/destinoController.js";

const router = express.Router();

router.get("/destinos", DestinoController.ListarDestinos);

export default router;


