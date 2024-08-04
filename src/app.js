import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import DestinoRoutes from './routes/DestinosRoutes.js';
import AtrativoRoutes from './routes/AtrativosRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import Destino from './models/destino.js';
import Atrativo from './models/atrativo.js';

// Resolver __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conectar ao banco de dados
await conectaNaDatabase();

const app = express();

app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/api/destinos', DestinoRoutes);
app.use('/api/atrativos', AtrativoRoutes);

// Rota de busca
app.get('/api/search', async (req, res) => {
    const query = req.query.query;
    console.log(`Recebendo consulta de busca: ${query}`); // Log para verificar a consulta recebida

    try {
        const destinos = await Destino.find({ slug: { $regex: query, $options: 'i' } });
        const atrativos = await Atrativo.find({ slug: { $regex: query, $options: 'i' } });

        console.log(`Destinos encontrados: ${destinos.length}`);
        console.log(`Atrativos encontrados: ${atrativos.length}`);

        const resultados = [
            ...destinos.map(destino => ({
                nome: destino.nome,
                descricao: destino.descricao,
                url: `detalhes.html?destino=${destino.slug}`,
                imagem: destino.imagem
            })),
            ...atrativos.map(atrativo => ({
                nome: atrativo.nome,
                descricao: atrativo.descricao,
                url: `detalhesatrativos.html?atrativo=${atrativo.slug}`,
                imagem: atrativo.imagem
            }))
        ];

        res.status(200).json(resultados);
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        res.status(500).send('Erro ao buscar resultados');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;
