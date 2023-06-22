
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {

    var dados= req.body

    return res.js({
        error: false,
        mensagem: "Cadastro efetuado com sucesso",
        dados
    })
})

module.exports = router;