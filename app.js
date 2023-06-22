const express = require("express");

const app = express();

const mensagens = require("./controles/mensagens")

app.use("/mensage", mensagens)

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000")
}); 