import Destino from "../models/destino.js";

class DestinoController {
    static async ListarDestinos(req, res) {
        try {
            console.log("Buscando destinos...");
            const listaDestinos = await Destino.find({});
            console.log("Destinos encontrados:", listaDestinos);
            res.status(200).json(listaDestinos);
        } catch (error) {
            console.error("Erro ao buscar destinos:", error);
            res.status(500).send("Erro ao buscar destinos");
        }
    }
}

export default DestinoController;
