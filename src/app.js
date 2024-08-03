import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';

const conexao =  await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
  });

const app = express();

app.use(express.json());

const destinos = [
    {
        id: 1,
        nome: "São Luís"
    },
    {
        id: 2,
        nome: "Atins"
    }
];

function buscaDestino(id) {
    return destinos.findIndex(destino => {
        return destino.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("MaraTour");
});

app.get("/destinos", (req, res) => {
    res.status(200).json(destinos);
});

app.get("/destinos/:id", (req, res) => {
    const index = buscaDestino(req.params.id);
    if (index !== -1) {
        res.status(200).json(destinos[index]);
    } else {
        res.status(404).send("Destino não encontrado");
    }
});

app.post("/destinos", (req, res) => {
    destinos.push(req.body);
    res.status(201).send("Destino cadastrado com sucesso");
});

app.put("/destinos/:id", (req, res) => {
    const index = buscaDestino(req.params.id);
    if (index !== -1) {
        destinos[index].nome = req.body.nome;
        res.status(200).json(destinos[index]);
    } else {
        res.status(404).send("Destino não encontrado");
    }
});

app.delete("/destinos/:id", (req, res) => {
    const index = buscaDestino(req.params.id);
    if (index !== -1) {
        destinos.splice(index, 1);
        res.status(200).send("Destino removido com sucesso");
    } else {
        res.status(404).send("Destino não encontrado");
    }
});

export default app;


