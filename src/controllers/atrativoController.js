import Atrativo from "../models/atrativo.js";

class AtrativoController {
    static async ListarAtrativos (req, res) {
        try {
            const listaAtrativos = await Atrativo.find({});
            res.status(200).json(listaAtrativos);
        } catch (error) {
            res.status(500).send("Erro ao buscar atrativos");
        }
    }

    static async BuscarAtrativoPorId(req, res) {
        try {
            const atrativoEncontrado = await Atrativo.findById(req.params.id);
            if (atrativoEncontrado) {
                res.status(200).json(atrativoEncontrado);
            } else {
                res.status(404).send("Atrativo não encontrado");
            }
        } catch (error) {
            res.status(500).send("Erro ao buscar atrativo");
        }
    }

    static async BuscarAtrativoPorSlug(req, res) {
        try {
            const atrativoEncontrado = await Atrativo.findOne({ slug: req.query.slug });
            if (atrativoEncontrado) {
                res.status(200).json(atrativoEncontrado);
            } else {
                res.status(404).send("Atrativo não encontrado");
            }
        } catch (error) {
            res.status(500).send("Erro ao buscar atrativo");
        }
    }
}

export default AtrativoController;
