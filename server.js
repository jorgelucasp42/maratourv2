import http from "http";

const PORT = 3000;

const rotas = {
  "/": "MaraTour",
  "/sobre": "Entrei na rota sobre",
  "/destinos": "Entrei na rota destinos"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("servidor escutando!");
});