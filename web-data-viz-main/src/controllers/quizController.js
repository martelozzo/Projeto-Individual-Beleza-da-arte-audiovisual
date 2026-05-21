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
    var usuarioId = req.body.usuario_id;
    var respostas = req.body.respostas;   // array [{ questao_id, alternativa_id }, ...]

    if (usuarioId == undefined || respostas == undefined) {
        res.status(400).send("usuario_id ou respostas estão undefined!");
        return;
    }

    // Extrai os 10 alternativa_ids em ordem do array para passar como variáveis individuais
    quizModel.cadastrar(
        usuarioId,
        respostas[0].alternativa_id,
        respostas[1].alternativa_id,
        respostas[2].alternativa_id,
        respostas[3].alternativa_id,
        respostas[4].alternativa_id,
        respostas[5].alternativa_id,
        respostas[6].alternativa_id,
        respostas[7].alternativa_id,
        respostas[8].alternativa_id,
        respostas[9].alternativa_id
    ).then(function() {
        res.status(200).send("Respostas cadastradas com sucesso!");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function validar(req, res) {

    var usuarioId = req.body.usuario_id;

    if(usuarioId == undefined){
        res.status(400).send("usuario_id ou respostas estão undefined!");
        return;
    }

    quizModel.validar(usuarioId).then(function(resultado) {
        // Se o resultado contiver linhas, significa que o usuário já respondeu
        if (resultado.length > 0) {
            res.status(200).send("Usuário já respondeu anteriormente.");
        } else {
            // Se estiver vazio, retornamos um status de erro (ex: 404) para o front-end cair no 'else'
            res.status(404).send("Usuário ainda não respondeu este quiz.");
        }
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });

}

function atualizar(req, res) {
    var usuarioId = req.body.usuario_id;
    var respostas = req.body.respostas;   // array [{ questao_id, alternativa_id }, ...]

    if (usuarioId == undefined || respostas == undefined) {
        res.status(400).send("usuario_id ou respostas estão undefined!");
        return;
    }

    // Extrai os 10 alternativa_ids em ordem do array para passar como variáveis individuais
    quizModel.atualizar(
        usuarioId,
        respostas[0].alternativa_id,
        respostas[1].alternativa_id,
        respostas[2].alternativa_id,
        respostas[3].alternativa_id,
        respostas[4].alternativa_id,
        respostas[5].alternativa_id,
        respostas[6].alternativa_id,
        respostas[7].alternativa_id,
        respostas[8].alternativa_id,
        respostas[9].alternativa_id
    ).then(function() {
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
    cadastrar,
    validar,
    atualizar
}