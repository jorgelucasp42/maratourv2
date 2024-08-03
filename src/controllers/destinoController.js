import Destino from "../models/destino.js";

class DestinoController {
    static async ListarDestinos (req, res) {
        try {
            const listaDestinos = await Destino.find({});
            res.status(200).json(listaDestinos);
        } catch (error) {
            res.status(500).send("Erro ao buscar destinos");
        }
    }
}

export default DestinoController;
