//import http from "http";

import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "MaraTour",
  "/sobre": "Entrei na rota sobre",
  "/destinos": "Entrei na rota destinos"
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("servidor escutando!");
});