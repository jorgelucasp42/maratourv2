import express from 'express';

const app = express();

const destinos = [
    {
        id: 1,
        título: "São Luís"
    },
    {
        id: 2,
        título: "Atins"
    }
];

app.get("/", (req, res) => {
  res.status(200).send("MaraTour");
});
app.get("/destinos", (req, res) => {
    res.status(200).json(destinos);
  });

export default app;