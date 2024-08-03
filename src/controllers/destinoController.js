import destino from "../models/destino.js";

class DestinoController {
    static async ListarDestinos (req, res) {
        try {
            console.log("Buscando destinos...");  // Log para depuração
            const listaDestinos = await destino.find({});
            console.log("Destinos encontrados:", listaDestinos);  // Log para depuração
            res.status(200).json(listaDestinos);
        } catch (error) {
            console.error("Erro ao buscar destinos:", error);  // Log para depuração
            res.status(500).send("Erro ao buscar destinos");
        }
    }

    static async BuscarDestinoPorId(req, res) {
        try {
            const destinoEncontrado = await destino.findById(req.params.id);
            if (destinoEncontrado) {
                res.status(200).json(destinoEncontrado);
            } else {
                res.status(404).send("Destino não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar destino:", error);
            res.status(500).send("Erro ao buscar destino");
        }
    }

    static async BuscarDestinoPorSlug(req, res) {
        try {
            const destinoEncontrado = await destino.findOne({ slug: req.query.slug });
            if (destinoEncontrado) {
                res.status(200).json(destinoEncontrado);
            } else {
                res.status(404).send("Destino não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar destino:", error);
            res.status(500).send("Erro ao buscar destino");
        }
    }
}

export default DestinoController;
