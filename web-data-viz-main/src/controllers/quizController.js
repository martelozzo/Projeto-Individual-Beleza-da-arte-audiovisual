var quizModel = require("../models/quizModel");

/*function listar(req, res) {
    quizModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}*/

function cadastrar(req, res) {
    var usuarioId  = req.body.usuario_id;
    var respostas  = req.body.respostas;   // array [{ questao_id, alternativa_id }, ...]

    if (usuarioId == undefined || respostas == undefined) {
        res.status(400).send("usuario_id ou respostas estão undefined!");
        return;
    }

    // Cria uma promise de INSERT para cada resposta do array
    var inserções = respostas.map(function(resposta) {
        return quizModel.cadastrar(usuarioId, resposta.questao_id, resposta.alternativa_id);
    });

    // Executa todas as inserções e aguarda terminar
    Promise.all(inserções).then(function() {
        res.status(200).send("Respostas cadastradas com sucesso!");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

/*function cadastrar(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    quizModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}*/

module.exports = {
    //listar,
    cadastrar
}