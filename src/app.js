import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import destinoRoutes from './routes/DestinosRoutes.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão:", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("MaraTour");
});

app.use(destinoRoutes);

export default app;
