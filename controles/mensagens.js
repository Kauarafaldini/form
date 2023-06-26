
const express = require("express");

const db = require("../db/models");

const router = express.Router();

router.post("/", async (req, res) => {

    var dados= req.body

    await db.clientes.create(dados).then((dadosMensagem) => {

        return res.js({
            error: false,
            mensagem: "Cadastro efetuado com sucesso",
            dados: dadosMensagem
        });

    }).catch(() => {

        return res.js({
            error: false,
            mensagem: "Cadastro não efetuado, Por favor tente novamente",
        });

    });

});

module.exports = router;