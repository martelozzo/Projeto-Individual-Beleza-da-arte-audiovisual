var kpiModel = require("../models/kpiModel");

function listar(req, res) {
    kpiModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function media(req, res) {
    kpiModel.media().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function acertos(req, res) {

    var usuarioId = req.query.usuario_id;

    if(usuarioId == undefined){
        res.status(400).send("usuario_id ou respostas estão undefined!");
        return;
    }

    kpiModel.acertos(usuarioId).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function mais_erradas(req, res) {
    kpiModel.mais_erradas().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

// function cadastrar(req, res) {
//     var nome = req.body.nome;

//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     }

//     carroModel.cadastrar(nome).then(function(resposta){
//         res.status(200).send("Carro criado com sucesso");
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

module.exports = {
    listar,
    media,
    acertos,
    mais_erradas
    //cadastrar
}