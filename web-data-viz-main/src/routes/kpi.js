var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /carros/cadastrar
//     carroController.cadastrar(req, res);
// });

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiController.listar(req, res);
});

router.get("/media", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiController.media(req, res);
});

router.get("/acertos", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiController.acertos(req, res);
});

router.get("/mais_erradas", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiController.mais_erradas(req, res);
});

router.get("/mais_erradas_porcentagem", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiController.mais_erradas_porcentagem(req, res);
});


module.exports = router;