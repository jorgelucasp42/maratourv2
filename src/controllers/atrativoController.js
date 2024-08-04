import Atrativo from "../models/atrativo.js";

class AtrativoController {
    static async listarAtrativos(req, res) {
        try {
            const atrativos = await Atrativo.find({ destino: req.params.destinoId }).populate('destino');
            res.status(200).json(atrativos);
        } catch (error) {
            console.error("Erro ao listar atrativos:", error);
            res.status(500).send("Erro ao listar atrativos");
        }
    }

    static async buscarAtrativoPorId(req, res) {
        try {
            const atrativo = await Atrativo.findById(req.params.atrativoId).populate('destino');
            if (atrativo) {
                res.status(200).json(atrativo);
            } else {
                res.status(404).send("Atrativo não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar atrativo:", error);
            res.status(500).send("Erro ao buscar atrativo");
        }
    }

    static async buscarAtrativoPorSlug(req, res) {
        try {
            const atrativo = await Atrativo.findOne({ slug: req.query.slug }).populate('destino');
            if (atrativo) {
                res.status(200).json(atrativo);
            } else {
                res.status(404).send("Atrativo não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar atrativo por slug:", error);
            res.status(500).send("Erro ao buscar atrativo");
        }
    }
}

export default AtrativoController;
