const express = require("express");

const cors = require('cors')

const app = express();

app.use(express.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    app.use(cors());

    next()

})

const clientes = require("./controles/mensagens");

app.use("/mensage", clientes)

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000")
}); 