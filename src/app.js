import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import DestinoRoutes from './routes/DestinosRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;
