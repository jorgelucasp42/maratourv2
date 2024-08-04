// src/routes/buscarRoutes.js
import express from 'express';
import Destino from '../models/destino.js';
import Atrativo from '../models/atrativo.js';

const router = express.Router();

router.get('/buscar', async (req, res) => {
    const query = req.query.query;
    try {
        const destinos = await Destino.find({ slug: query });
        const atrativos = await Atrativo.find({ slug: query });
        
        const resultados = [
            ...destinos.map(destino => ({ ...destino.toObject(), tipo: 'destino' })),
            ...atrativos.map(atrativo => ({ ...atrativo.toObject(), tipo: 'atrativo' }))
        ];
        
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar resultados', error });
    }
});

export default router;
