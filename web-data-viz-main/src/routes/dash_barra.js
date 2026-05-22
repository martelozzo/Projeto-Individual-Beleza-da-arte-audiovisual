var express = require("express");
var router = express.Router();

var dash_barraController = require("../controllers/dash_barraController");

/*router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    carroController.cadastrar(req, res);
});*/

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dash_barraController.listar(req, res);
});

module.exports = router;