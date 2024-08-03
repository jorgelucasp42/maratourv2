import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import destinoRoutes from './routes/DestinosRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão:", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(destinoRoutes);

export default app;
