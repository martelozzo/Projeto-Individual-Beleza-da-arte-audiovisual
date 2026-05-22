var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT a.questao_id, a.id AS alternativa_id, COUNT(r.id) AS total
        FROM alternativas a
        LEFT JOIN respostas r ON r.alternativa_id = a.id
        GROUP BY a.questao_id, a.id
        ORDER BY a.questao_id, a.ordem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/*
function cadastrar(nome) {
    var instrucao = `
        INSERT INTO carro (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    */

module.exports = {
    //cadastrar,
    listar
};