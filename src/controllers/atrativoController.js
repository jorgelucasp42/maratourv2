import Atrativo from "../models/atrativo.js";

class AtrativoController {
    static async ListarAtrativos (req, res) {
        try {
            console.log("Buscando atrativos...");  // Log para depuração
            const listaAtrativos = await Atrativo.find({});
            console.log("Atrativos encontrados:", listaAtrativos);  // Log para depuração
            res.status(200).json(listaAtrativos);
        } catch (error) {
            console.error("Erro ao buscar atrativos:", error);  // Log para depuração
            res.status(500).send("Erro ao buscar atrativos");
        }
    }

    static async BuscarAtrativoPorId(req, res) {
        try {
            console.log("Buscando atrativo por ID:", req.params.id);  // Log para depuração
            const atrativoEncontrado = await Atrativo.findById(req.params.id);
            if (atrativoEncontrado) {
                console.log("Atrativo encontrado:", atrativoEncontrado);  // Log para depuração
                res.status(200).json(atrativoEncontrado);
            } else {
                console.log("Atrativo não encontrado");  // Log para depuração
                res.status(404).send("Atrativo não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar atrativo:", error);  // Log para depuração
            res.status(500).send("Erro ao buscar atrativo");
        }
    }

    static async BuscarAtrativoPorSlug(req, res) {
        try {
            console.log("Buscando atrativo por slug:", req.query.slug);  // Log para depuração
            const atrativoEncontrado = await Atrativo.findOne({ slug: req.query.slug });
            if (atrativoEncontrado) {
                console.log("Atrativo encontrado:", atrativoEncontrado);  // Log para depuração
                res.status(200).json(atrativoEncontrado);
            } else {
                console.log("Atrativo não encontrado");  // Log para depuração
                res.status(404).send("Atrativo não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar atrativo por slug:", error);  // Log para depuração
            res.status(500).send("Erro ao buscar atrativo");
        }
    }
}

export default AtrativoController;
